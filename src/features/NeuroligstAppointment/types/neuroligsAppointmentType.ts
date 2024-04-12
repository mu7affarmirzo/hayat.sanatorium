export interface PostNeuroligstAppointment {
  medical_services: MedicalService[];
  lab_research: LabResearch[];
  procedures: Procedure[];
  pills: Pill[];
  state: string;
  is_familiar_with_anamnesis: boolean;
  complaint: string;
  anamnesis: string;
  cito: boolean;
  for_sanatorium_treatment: string;
  summary: string;
  recommendation: string;
  created_by: number;
  modified_by: number;
  doctor: number;
  illness_history: number;
}

export interface LabResearch {
  lab: number;
  comments: string;
}

export interface MedicalService {
  medical_service: number;
  consulted_doctor: number;
  state: string;
}

export interface Pill {
  pills_injections: number;
  state: string;
  quantity: number;
  period_days: number;
  end_date: Date;
  frequency: string;
  comments: string;
  instruction: string;
}

export interface Procedure {
  medical_service: number;
  quantity: number;
  frequency: string;
  comments: string;
}
