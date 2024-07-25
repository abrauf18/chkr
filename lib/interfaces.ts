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
  token: string;
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
  id: number;
  firm_name: string;
}

export interface OnboardingInterface {
  company_name: string;
  firm_id: number;
  phone_number: string;
  location: string;
  country: string;
  plan_id: number;
}

export interface PlanInterface {
  productDescription: string;
  price: number;
  productName: string;
  features: string[];
  timePeriod: string;
  id: number;
  plan_type: string;
}

export interface CompanyAdminInterface {
  first_name: string;
  last_name: string;
  email: string;
  contact_number: string;
  company_logo: string;
  company_name: string;
  firm_name: string;
  phone_number: string;
  location: string;
  country: string;
  stripe_connect_account_id: string | null;
}

export interface EditCompanyAdminInterface {
  picture?: string | File;
  first_name?: string;
  last_name?: string;
  email?: string;
  contact_number?: string;
  password?: string;
}

export interface EditCompanyInformationInterface {
  company_name: string;
  firm_id: number;
  phone_number: string;
  location: string;
  country: string;
}

export interface Users {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  contact_number: string;
  picture?: string;
  amount?: number;
}

export interface ServicesInterface {
  id: number;
  service_name: string;
  firm_id: number;
}

export interface JobsInterface {
  service_id: string;
  customer_name: string;
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  phone_number: string;
  date_time: string;
  price: number; // Can be improved to number if the price is always numeric
  description: string;
  selected_users: {
    user_id: number;
    price: number;
  }[];
}

export interface JobRequestInterface {
  job_request: boolean;
  job_id: number;
}

export interface CompanyInterface {
  firm: {
    firm_name: string;
  };
  phone_number: string;
  id: number;
  company_logo: string;
  company_name: string;
  location: string;
  country: string;
  plan: {
    plan_type: string;
  };
  staffCount: number;
  company_admin?: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  disable?: boolean;
  createdAt: string;
}

export interface MessageInterface {
  job_id: number;
  message: string;
}

export interface FeedbackInterface {
  id: number;
  rating: number;
  comment: string;
  user: {
    first_name: string;
    last_name: string;
    picture: string;
  };
  createdAt: string;
}

export interface DisableCompanyInterface {
  company_id: number;
  disable: boolean | undefined;
}

