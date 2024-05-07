export interface DoctorOnDutyAppointmentPostData {
  medical_services: MedicalServiceForDoctorOnDuty[];
  lab_research: LabResearchForDoctorOnDuty[];
  procedures: ProcedureForDoctorOnDuty[];
  pills: PillForDoctorOnDuty[];
  state: string;
  complaints: string;
  objective_data: string;
  arterial_high: number;
  arterial_low: number;
  imt: number;
  cito: boolean;
  for_sanatorium_treatment: string;
  summary: string;
  recommendation: string;
  created_by: number;
  modified_by: number;
  doctor: number;
  illness_history: number;
}

export interface LabResearchForDoctorOnDuty {
  lab: number;
  comments: string;
}

export interface MedicalServiceForDoctorOnDuty {
  medical_service: number;
  consulted_doctor: number;
  state: string;
}

export interface PillForDoctorOnDuty {
  pills_injections: number;
  state: string;
  quantity: number;
  period_days: number;
  end_date: Date;
  frequency: string;
  comments: string;
  instruction: string;
}

export interface ProcedureForDoctorOnDuty {
  medical_service: number;
  quantity: number;
  frequency: string;
  comments: string;
}
