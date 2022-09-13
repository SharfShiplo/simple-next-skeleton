import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export type LayoutProps = {
  readonly children: ReactNode;
};

export interface HomePageProps {
  demoData: string;
}

export interface QueryOptions {
  page?: number;
  limit?: number;
}

export interface PaginatorInfo<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Address {
  id: string;
  country: string;
  city: string;
  state: string;
  zip: string;
  street_address: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profile: {
    id?: string;
    contact?: string;
    bio?: string;
    avatar?: string;
  };
  address: Address;
}
export interface AuthResponse {
  token: string;
  permissions: string[];
}
export interface UpdateUserInput extends Partial<User> {
  id: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export type SocialLoginInputType = {
  provider: string;
  access_token: string;
};
export type SendOtpCodeInputType = {
  phone_number: string;
};

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export interface ForgotPasswordUserInput {
  email: string;
}

export interface ResetPasswordUserInput {
  email: string;
  token: string;
  password: string;
}

export interface VerifyForgotPasswordUserInput {
  token: string;
  email: string;
}

export interface ChangePasswordUserInput {
  oldPassword: string;
  newPassword: string;
}

export interface UpdateUserInput extends Partial<User> {
  id: string;
}
export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}
export interface LoginUserInput {
  email: string;
  password: string;
}
export interface PasswordChangeResponse {
  success: boolean;
  message: string;
}

export interface CreateContactUsInput {
  name: string;
  email: string;
  subject: string;
  description: string;
}
export interface Settings {
  id: string;
  name: string;
  slug: string;
  options: {
    [key: string]: string;
  };
}