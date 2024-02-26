export interface BookedDoctorsRootTypes {
  id?: number;
  patient?: Patient;
  booking?: Booking;
  profession?: Profession;
  toxic_factors?: ToxicFactor[];
  tags?: Tags;
  diagnosis?: Diagnosis;
  nurse?: Nurse[];
  doctor?: Doctor;
  series_number?: string;
  type?: string;
  state?: string;
  initial_diagnosis?: any;
  at_arrival_diagnosis?: any;
  documents?: Documents;
  regime?: string;
  highlighted_tags?: HighlightedTags;
}

export interface Patient {
  id?: number;
  f_name?: string;
  mid_name?: string;
  l_name?: string;
  email?: string;
  date_of_birth?: string;
  home_phone_number?: string;
  mobile_phone_number?: string;
  address?: string;
  additional_info?: number;
  is_active?: boolean;
  doc_type?: string;
  doc_number?: string;
  issued_data?: string;
  INN?: string;
  country?: string;
  last_visit_at?: string;
  created_at?: string;
  modified_at?: string;
  gender?: boolean;
  information_source?: number;
  organization?: number;
  patient_group?: any[];
}

export interface Booking {
  id?: number;
  room?: Room;
  room_type?: RoomType;
  living?: Living[];
  cheques?: Cheque[];
  discount?: number;
  is_checked_out?: boolean;
  stage?: string;
  start_date?: string;
  end_date?: string;
  created_at?: string;
  modified_at?: string;
  tariff?: number;
  patients?: number;
  cheque?: number;
}

export interface Room {
  id?: number;
  room_number?: string;
  price?: number;
  is_available?: boolean;
  count?: number;
  floor?: number;
  view?: string;
  capacity?: number;
  status_cleanest?: string;
  created_at?: string;
  modified_at?: string;
  room_type?: number;
  created_by?: number;
  modified_by?: number;
}

export interface Living {
  date?: string;
  scheme?: number;
  tariff?: Tariff;
  roomType?: RoomType;
  room?: Room2;
  disCount?: number;
  services?: any[];
}
export interface RoomType {
  id?: number;
  name?: string;
  tag?: string;
  color?: string;
  created_at?: string;
  modified_at?: string;
  created_by?: number;
  modified_by?: number;
}

export interface Tariff {
  tariff_name?: string;
  is_paid?: boolean;
  price?: number;
}

export interface Room2 {
  room_number?: string;
  is_paid?: boolean;
  price?: number;
}

export interface Cheque {
  id?: number;
  name?: string;
  day?: string;
  code?: Code;
  pocket?: Pocket;
  quantity?: number;
  price?: number;
  status?: boolean;
  transaction_date?: string;
  paid_amount?: number;
  cashier?: string;
}

export interface Code {
  color?: string;
  code?: number;
}

export interface Pocket {
  color?: string;
  code?: number;
  name?: string;
}

export interface Profession {
  id?: number;
  name?: string;
}

export interface ToxicFactor {
  id?: number;
  name?: string;
}

export interface Tags {
  id?: number;
  name?: string;
}

export interface Diagnosis {
  id?: number;
  name?: string;
  code?: string;
}

export interface Nurse {
  id?: number;
  email?: string;
  username?: string;
  f_name?: string;
  l_name?: string;
  m_name?: string;
  phone_number?: string;
  sex?: boolean;
  organization_id?: number;
  branch_id?: number;
  color?: string;
}

export interface Doctor {
  id?: number;
  email?: string;
  username?: string;
  f_name?: string;
  l_name?: string;
  m_name?: string;
  phone_number?: string;
  sex?: boolean;
  organization_id?: any;
  branch_id?: any;
  color?: string;
}

export interface Documents {}

export interface HighlightedTags {
  allergy?: boolean;
  meteolabel?: boolean;
  food_issues?: boolean;
  furniture_fault?: boolean;
  pills_drugs?: boolean;
}
