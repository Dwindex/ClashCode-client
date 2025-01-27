// Component-specific types
import { BaseProps } from './common';

// Button component props
export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

// Input component props
export interface InputProps extends BaseProps {
  type?: 'text' | 'password' | 'email' | 'number';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  label?: string;
}

// Form component props
export interface FormProps extends BaseProps {
  onSubmit: (data: unknown) => void | Promise<void>;
  children: React.ReactNode;
}
