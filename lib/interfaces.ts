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

export interface FirmInterface {
  id: number,
  firm_name: string;
}

export interface OnboardingInterface {
  company_name: string;
  firm_id: number,
  phone_number: string;
  location: string;
  country: string;
  plan_id: number;
}

export interface PlanInterface {
  features: string[];
  timePeriod: string;
  id: number,
  plan_type: string;
  amount: number
}

export interface CompanyAdminInterface {
  first_name :string;
  last_name: string;
  email: string;
  contact_number: string;
  company_logo: string;
  company_name: string;
  firm_name: string,
  phone_number: string;
  location: string;
  country: string;
}

export interface EditCompanyAdminInterface {
  first_name :string;
  last_name: string;
  email: string;
  contact_number: string;
  password: string;
}

export interface EditCompanyInformationInterface {
  company_name: string;
  firm_id: number,
  phone_number: string;
  location: string;
  country: string;
}