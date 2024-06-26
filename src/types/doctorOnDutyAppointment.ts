export interface PostDoctorOnDutyAppointmentTypes {
  medical_services: Partial<MedicalService>[];
  lab_research: Partial<LabResearch>[];
  procedures: Partial<Procedure>[];
  pills: Partial<Pill>[];
}

export interface DoctorOnDutyAppointmentTypes {
  medical_services: MedicalService[];
  lab_research: LabResearch[];
  procedures: Procedure[];
  pills: Pill[];
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
