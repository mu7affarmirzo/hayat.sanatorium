export type CardiologistAppointment = Omit<
  GetCardiologistAppointmentTypes,
  'id'
>;

export interface GetCardiologistAppointmentTypes {
  id: number;
  medical_services: MedicalServiceForCardiologist[];
  lab_research: LabResearchForCardiologist[];
  procedures: ProcedureForCardiologist[];
  pills: PillForCardiologist[];
  state: string;
  created_at: Date;
  modified_at: Date;
  has_cardio_complaints: boolean;
  has_nerve_complaints: boolean;
  other_complaints: string;
  history_of_illness: string;
  inheritance: string;
  height: number;
  weight: number;
  pulse_general: number;
  arterial_high: number;
  arterial_low: number;
  imt: number;
  imt_interpretation: number;
  body_figure: string;
  skin: string;
  sclera_visible_mucosa: string;
  thyroids: string;
  cervical: string;
  axillary: string;
  inguinal: string;
  pulse_per_min: number;
  pulse: string;
  fault_of_pulse: string;
  heart_arterial_high: number;
  heart_arterial_low: number;
  left_heart_edges: string;
  right_heart_edges: string;
  upper_heart_edges: string;
  heart_beat: string;
  heart_tone: string;
  i_tone: null;
  ii_tone: null;
  noise: null;
  arterial_pulse_stop: null;
  varicose_veins_of_superficial_veins: string;
  trophic_skin_changes: string;
  chdd_per_minute: number;
  chest_shape: string;
  pulmonary_fields: string;
  auscultation_breathing: string;
  wheezing: string;
  pleural_friction_rub: null;
  cito: boolean;
  for_sanatorium_treatment: string;
  summary: string;
  recommendation: string;
  created_by: number;
  modified_by: number;
  doctor: number;
  illness_history: number;
}

// export interface PostCardiologistAppoinmnet {
//   medical_services: MedicalServiceForCardiologist[];
//   lab_research: LabResearchForCardiologist[];
//   procedures: ProcedureForCardiologist[];
//   pills: PillForCardiologist[];
//   state: string;
//   has_cardio_complaints: boolean;
//   has_nerve_complaints: boolean;
//   other_complaints: string;
//   history_of_illness: string;
//   inheritance: string;
//   height: number;
//   weight: number;
//   pulse_general: number;
//   arterial_high: number;
//   arterial_low: number;
//   imt: number;
//   imt_interpretation: number;
//   body_figure: string;
//   skin: string;
//   sclera_visible_mucosa: string;
//   thyroids: string;
//   cervical: string;
//   axillary: string;
//   inguinal: string;
//   pulse_per_min: number;
//   pulse: string;
//   fault_of_pulse: string;
//   heart_arterial_high: number;
//   heart_arterial_low: number;
//   left_heart_edges: string;
//   right_heart_edges: string;
//   upper_heart_edges: string;
//   heart_beat: string;
//   heart_tone: string;
//   i_tone: string;
//   ii_tone: string;
//   noise: string;
//   arterial_pulse_stop: string;
//   varicose_veins_of_superficial_veins: string;
//   trophic_skin_changes: string;
//   chdd_per_minute: number;
//   chest_shape: string;
//   pulmonary_fields: string;
//   auscultation_breathing: string;
//   wheezing: string;
//   pleural_friction_rub: string;
//   cito: boolean;
//   for_sanatorium_treatment: string;
//   summary: string;
//   recommendation: string;
//   created_by: number;
//   modified_by: number;
//   doctor: number;
//   illness_history: number;
// }

export interface LabResearchForCardiologist {
  lab: number;
  comments: string;
}

export interface MedicalServiceForCardiologist {
  medical_service: number;
  consulted_doctor: number;
  state: string;
}

export interface PillForCardiologist {
  pills_injections: number;
  state: string;
  quantity: number;
  period_days: number;
  end_date: Date;
  frequency: string;
  comments: string;
  instruction: string;
}

export interface ProcedureForCardiologist {
  medical_service: number;
  quantity: number;
  frequency: string;
  comments: string;
}
