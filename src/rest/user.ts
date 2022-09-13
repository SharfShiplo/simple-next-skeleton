import { useModalAction } from '@/components/ui/modal/modal.context';
import {
  useMutation, useQuery, useQueryClient,
} from 'react-query';
import { toast } from 'react-toastify';
import client from './client';
import { authorizationAtom } from '@/store/authorization-atom';
import { useAtom } from 'jotai';
import { signOut as socialLoginSignOut } from 'next-auth/react';
import { useToken } from '@/lib/hooks/use-token';
import { API_ENDPOINTS } from './client/api-endpoints';
import { useState } from 'react';
import type {
  RegisterUserInput,
} from '@/types';
export function useUser() {
    const [isAuthorized] = useAtom(authorizationAtom);
    const { data, isLoading, error } = useQuery(
      [API_ENDPOINTS.USERS_ME],
      client.users.me,
      {
        enabled: isAuthorized,
        onError: (err) => {
          console.log(err);
        },
      }
    );
    //TODO: do some improvement here
    return { me: data, isLoading, error, isAuthorized };
  }
export function useLogin() {
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  const { setToken } = useToken();
  let [serverError, setServerError] = useState<string | null>(null);

  const { mutate, isLoading } = useMutation(client.users.login, {
    onSuccess: (data) => {
      if (!data.token) {
        setServerError('The credentials was wrong!');
        return;
      }
      setToken(data.token);
      setAuthorized(true);
      closeModal();
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  return { mutate, isLoading, serverError, setServerError };
}

export function useSocialLogin() {
    const queryClient = useQueryClient();
    const { setToken } = useToken();
    const [_, setAuthorized] = useAtom(authorizationAtom);
  
    return useMutation(client.users.socialLogin, {
      onSuccess: (data) => {
        if (data?.token && data?.permissions?.length) {
          setToken(data?.token);
          setAuthorized(true);
          return;
        }
        if (!data.token) {
          toast.error('The credentials was wrong!');
        }
      },
      onSettled: () => {
        queryClient.clear();
      },
    });
  }
  

export function useRegister() {
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  let [formError, setFormError] = useState<Partial<RegisterUserInput> | null>(
    null
  );

  const { mutate, isLoading } = useMutation(client.users.register, {
    onSuccess: (data) => {
      if (data?.token && data?.permissions?.length) {
        setToken(data?.token);
        setAuthorized(true);
        closeModal();
        return;
      }
      if (!data.token) {
        toast.error('The credentials was wrong!');
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      setFormError(data);
    },
  });

  return { mutate, isLoading, formError, setFormError };
}
export function useLogout() {
    const queryClient = useQueryClient();
    const { setToken } = useToken();
    const [_, setAuthorized] = useAtom(authorizationAtom);
  
    const { mutate: signOut } = useMutation(client.users.logout, {
      onSuccess: (data) => {
        if (data) {
          setToken('');
          setAuthorized(false);
          queryClient.refetchQueries(API_ENDPOINTS.USERS_ME);
        }
      },
      onSettled: () => {
        queryClient.clear();
      },
    });
    function handleLogout() {
      socialLoginSignOut({ redirect: false });
      signOut();
    }
    return {
      mutate: handleLogout,
    };
  }
  
  export const useContact = () => {
  
    return useMutation(client.users.contactUs, {
      onSuccess: (data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
