export interface GetMyPatients {
  cito: null;
  no: string;
  age: number;
  room: string;
  diagnosis: string;
  start_date: Date;
  end_date: Date;
}

export interface GetMyPatientsQuery {
  full_name: string;
  ib: number;
  card_type: any;
  word: string;
}

export interface InitAppointmentTypes {
  complaint: string;
  anamnesis_morbi: string;
  anamnesis_vitae: string;
  contact_with_infectious: string;
  contact_with_orvi: boolean;
  is_away_two_month: boolean;
  transferred_infectious: string;
  staying_hospital: string;
  receiving_blood_transfusions: string;
  surgical_massive_interventions_six_months: string;
  dentist_visits_last_six_months: string;
  profession_toxics: string;
  additional_data: string;
  general_state: string;
  consciousness: string;
  state: string;
  constitution: string;
  skin: string;
  pigmentation: string;
  depigmentation: string;
  rashes: string;
  vascular_changes: string;
  hemorrhages: string;
  scarring: string;
  trophic_changes: string;
  visible_tumors: string;
  skin_moisture: string;
  skin_turgor: string;
  subcutaneous_fat: string;
  temperature: number;
  height: number;
  weight: number;
  heart_beat: number;
  arterial_high: number;
  arterial_low: number;
  imt: number;
  extra_weight: number;
  swelling_pastiness: string;
  lymph_nodes: string;
  deformations: string;
  contractures: string;
  movement_restrictions: string;
  respiratory_frequency: number;
  breathing_type: string;
  doctor: number;
}
