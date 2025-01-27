// Common types used across the application

// Example of a basic user type
export interface User {
  id: number;
  username: string;
  email: string;
}

// Common status type
export type Status = 'idle' | 'loading' | 'success' | 'error';

// Common response wrapper type
export type ApiResponse<T> = {
  data: T;
  status: Status;
  message?: string;
};

// Common props that many components might share
export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  'data-testid'?: string;
  'aria-label'?: string;
  role?: string;
}
