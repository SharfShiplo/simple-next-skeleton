import type {
    AuthResponse,
    ChangePasswordUserInput,
    ForgotPasswordUserInput,
    PasswordChangeResponse,
    RegisterUserInput,
    ResetPasswordUserInput,
    SocialLoginInputType,
    LoginUserInput,
    User,
    CreateContactUsInput,
    Settings,
  } from '@/types';
  import { API_ENDPOINTS } from './api-endpoints';
  import { HttpClient } from './http-client';
  
  class Client {
    users = {
      me: () => HttpClient.get<User>(API_ENDPOINTS.USERS_ME),
      login: (input: LoginUserInput) =>
        HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
      socialLogin: (input: SocialLoginInputType) =>
        HttpClient.post<AuthResponse>(API_ENDPOINTS.SOCIAL_LOGIN, input),
      register: (input: RegisterUserInput) =>
        HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_REGISTER, input),
      forgotPassword: (input: ForgotPasswordUserInput) =>
        HttpClient.post<PasswordChangeResponse>(
          API_ENDPOINTS.USERS_FORGOT_PASSWORD,
          input
        ),
      resetPassword: (input: ResetPasswordUserInput) =>
        HttpClient.post<PasswordChangeResponse>(
          API_ENDPOINTS.USERS_RESET_PASSWORD,
          input
        ),
      changePassword: (input: ChangePasswordUserInput) =>
        HttpClient.post<PasswordChangeResponse>(
          API_ENDPOINTS.USERS_CHANGE_PASSWORD,
          input
        ),
      logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
      subscribe: (input: { email: string }) =>
        HttpClient.post<any>(API_ENDPOINTS.USERS_SUBSCRIBE_TO_NEWSLETTER, input),
      contactUs: (input: CreateContactUsInput) =>
        HttpClient.post<any>(API_ENDPOINTS.USERS_CONTACT_US, input),
    };
    settings = {
      all: () => HttpClient.get<Settings>(API_ENDPOINTS.SETTINGS),
    };
  }
  
  export default new Client();
  