export interface SignUpInterface {
  first_name: string;
  last_name: string;
  email: string;
  contact_number: string;
  password: string;
}

export interface ForgetPasswordInterface {
  email: string;
}

export interface ResetPasswordInterface {
  token: string,
  password: string;
  confirm_password: string;
}

export interface InviteUserInterface {
  first_name: string;
  last_name: string;
  email: string;
  contact_number: string;
}