export interface RepeatedAppointment {
  medical_services: MedicalService[];
  lab_research: LabResearch[];
  procedures: Procedure[];
  pills: Pill[];
  state: string;
  complaint: string;
  objective_data: string;
  arterial_high: number;
  arterial_low: number;
  imt: number;
  cito: boolean;
  summary: string;
  created_by: number;
  modified_by: number;
  doctor: number;
  illness_history: number;
  diagnosis: number;
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
