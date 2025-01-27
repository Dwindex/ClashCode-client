
export enum ApiEndpoints {
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  PROFILE = '/user/profile',
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

