export interface PostEkgAppointmentTypes {
  medical_services: MedicalServiceForEKG[];
  lab_research: LabResearchForEkg[];
  procedures: ProcedureForEKG[];
  pills: PillForEkg[];
  state: string;
  rhythm: string;
  heart_s_count: number;
  r_r: number;
  p_q: number;
  qrs: number;
  v1: number;
  v6: number;
  q_t: number;
  la: number;
  prong_p: string;
  complex_qrs: string;
  prong_t: string;
  segment_st: string;
  electric_axis: string;
  cito: boolean;
  for_sanatorium_treatment: string;
  created_by: number;
  modified_by: number;
  doctor: number;
  illness_history: number;
  diagnosis: number;
}

export interface LabResearchForEkg {
  lab: number;
  comments: string;
}

export interface MedicalServiceForEKG {
  medical_service: number;
  consulted_doctor: number;
  state: string;
}

export interface PillForEkg {
  pills_injections: number;
  state: string;
  quantity: number;
  period_days: number;
  end_date: Date;
  frequency: string;
  comments: string;
  instruction: string;
}

export interface ProcedureForEKG {
  medical_service: number;
  quantity: number;
  frequency: string;
  comments: string;
}
