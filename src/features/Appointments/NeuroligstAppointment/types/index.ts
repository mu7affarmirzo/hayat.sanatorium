export type NeuroligstAppointment = Omit<GetNeuroligstAppointmentTypes, 'id'>;

// get neuroligst appointment

export interface GetNeuroligstAppointmentTypes {
  id: number;
  medical_services: MedicalServiceForNeuroligst[];
  lab_research: LabResearchForNeuroligst[];
  procedures: ProcedureForNeuroligst[];
  pills: PilForNeuroligst[];
  state: string;
  created_at: Date;
  modified_at: Date;
  is_familiar_with_anamnesis: boolean;
  complaint: string;
  anamnesis: string;
  palpebral_fissures: null;
  pupils: null;
  reaction_on_pupils: null;
  aye_frame_movement: null;
  nystagmus: null;
  face: null;
  tongue: null;
  soft_sk: null;
  phonation_swallowing: null;
  reflexes: null;
  muscle_strength: null;
  muscle_tones: null;
  deep_reflexes_hand: null;
  deep_reflexes_foot: null;
  stylo_radial: null;
  biceps: null;
  triceps: null;
  knees: null;
  achilles: null;
  abdominal: null;
  pathological_reflexes: null;
  romberg_position: string;
  complicated_position: string;
  finger_test: string;
  heel_knee_test: string;
  gait: string;
  sensitivity: string;
  cognitive_test: null;
  emotional_volitional_sphere: null;
  insomnia: string;
  movements_in_the_cervical_spine: null;
  movements_in_the_spinal_spine: null;
  spinous_processes: null;
  paravertebral_points: null;
  lasegues_symptom: null;
  cito: boolean;
  for_sanatorium_treatment: null;
  summary: string;
  recommendation: string;
  created_by: number;
  modified_by: number;
  doctor: number;
  illness_history: number;
}

export interface LabResearchForNeuroligst {
  lab: number;
  comments: string;
}

export interface MedicalServiceForNeuroligst {
  medical_service: number;
  consulted_doctor: number;
  state: string;
}

export interface PilForNeuroligst {
  pills_injections: number;
  state: string;
  quantity: number;
  period_days: number;
  end_date: Date;
  frequency: string;
  comments: string;
  instruction: string;
}

export interface ProcedureForNeuroligst {
  medical_service: number;
  quantity: number;
  frequency: string;
  comments: string;
}
