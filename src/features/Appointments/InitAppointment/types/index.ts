// Get init appointment types

export interface GetInitAppointmentTypes {
  id: number;
  medical_services: any[];
  lab_research: LabResearch[];
  procedures: any[];
  pills: any[];
  created_at: Date;
  modified_at: Date;
  state: string;
  complaint: null;
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
  consciousness_state: null;
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
  auscultative_breathing: string;
  wheezing: string;
  coughing: string;
  high_humidity: string;
  crepitus: string;
  lungs_percussion: string;
  heart_edge: string;
  heart_tones: string;
  accent_in_aorta: string;
  noise_change_on_ot: string;
  ad_left: string;
  ad_right: string;
  ps_left: string;
  ps_right: string;
  pulse_noise_on_arteria: string;
  appetit: string;
  tongue: string;
  cracks_ulcers_in_mouth: string;
  stomach: string;
  ill_part_stomach: string;
  liver: string;
  liver_edge: string;
  spleen: string;
  spleen_edge: string;
  stool: string;
  stool_frequency: string;
  urinary_system: string;
  effleurage_symptoms: string;
  thyroid: string;
  nerve_system: string;
  cito: boolean;
  summary: string;
  created_by: null;
  modified_by: null;
  doctor: null;
  illness_history: number;
  diagnosis: number;
}

export interface LabResearch {
  lab: number;
  start_date: Date;
  comments: string;
}

//Post init appointment types
export interface PostInitAppointmentTypes {
  medical_services: MedicalServiceForInitAppointment[];
  lab_research: LabResearchForInitAppointment[];
  procedures: ProcedureForInitAppointment[];
  pills: PillForInitAppointment[];
  state: string;
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
  consciousness_state: string;
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
  auscultative_breathing: string;
  wheezing: string;
  coughing: string;
  high_humidity: string;
  crepitus: string;
  lungs_percussion: string;
  heart_edge: string;
  heart_tones: string;
  accent_in_aorta: string;
  noise_change_on_ot: string;
  ad_left: string;
  ad_right: string;
  ps_left: string;
  ps_right: string;
  pulse_noise_on_arteria: string;
  appetit: string;
  tongue: string;
  cracks_ulcers_in_mouth: string;
  stomach: string;
  ill_part_stomach: string;
  liver: string;
  liver_edge: string;
  spleen: string;
  spleen_edge: string;
  stool: string;
  stool_frequency: string;
  urinary_system: string;
  effleurage_symptoms: string;
  thyroid: string;
  nerve_system: string;
  cito: boolean;
  summary: string;
  created_by: number;
  modified_by: number;
  doctor: number;
  illness_history: number;
  diagnosis: number;
}

export interface LabResearchForInitAppointment {
  lab: number;
  comments: string;
}

export interface MedicalServiceForInitAppointment {
  medical_service: number;
  consulted_doctor: number;
  state: 'assigned' | 'cancelled' | 'stopped' | 'dispatched';
}

export interface PillForInitAppointment {
  pills_injections: number;
  state: 'assigned' | 'cancelled' | 'stopped' | 'dispatched';
  quantity: number;
  period_days: number;
  end_date: Date;
  frequency: string;
  comments: string;
  instruction: string;
}

export interface ProcedureForInitAppointment {
  medical_service: number;
  quantity: number;
  frequency: string;
  comments: string;
}
