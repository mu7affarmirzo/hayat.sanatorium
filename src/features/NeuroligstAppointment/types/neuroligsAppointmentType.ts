export interface PostNeuroligstAppointment {
  medical_services: MedicalServiceForNeuroligst[];
  lab_research: LabResearchForNeuroligst[];
  procedures: ProcedureForNeuroligst[];
  pills: PilForNeuroligst[];
  state: string;
  is_familiar_with_anamnesis: boolean;
  complaint: string;
  anamnesis: string;
  palpebral_fissures: string;
  pupils: string;
  reaction_on_pupils: string;
  aye_frame_movement: string;
  nystagmus: string;
  face: string;
  tongue: string;
  soft_sk: string;
  phonation_swallowing: string;
  reflexes: string;
  muscle_strength: string;
  muscle_tones: string;
  deep_reflexes_hand: string;
  deep_reflexes_foot: string;
  stylo_radial: string;
  biceps: string;
  triceps: string;
  knees: string;
  achilles: string;
  abdominal: string;
  pathological_reflexes: string;
  romberg_position: string;
  complicated_position: string;
  finger_test: string;
  heel_knee_test: string;
  gait: string;
  sensitivity: string;
  cognitive_test: string;
  emotional_volitional_sphere: string;
  insomnia: string;
  movements_in_the_cervical_spine: string;
  movements_in_the_spinal_spine: string;
  spinous_processes: string;
  paravertebral_points: string;
  lasegues_symptom: string;
  cito: boolean;
  for_sanatorium_treatment: string;
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
