export type RepeatedAppointment = Omit<GetRepeatedAppointment, 'id'>;

export interface GetRepeatedAppointment {
  id: number;
  medical_services: MedicalServiceForRepApp[];
  lab_research: LabResearchForRepApp[];
  procedures: ProcedureForRepApp[];
  pills: PillForRepApp[];
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

export interface LabResearchForRepApp {
  lab: number;
  comments: string;
}

export interface MedicalServiceForRepApp {
  medical_service: number;
  consulted_doctor: number;
  state: string;
}

export interface PillForRepApp {
  pills_injections: number;
  state: string;
  quantity: number;
  period_days: number;
  end_date: Date;
  frequency: string;
  comments: string;
  instruction: string;
}

export interface ProcedureForRepApp {
  medical_service: number;
  quantity: number;
  frequency: string;
  comments: string;
}
