export interface GetFinalAppointmentPostData {
  id: number;
  state: 'assigned' | 'stopped' | 'cancelled' | 'dispatched';
  objective_status: string;
  height: number;
  weight: number;
  heart_beat: number;
  arterial_high: number;
  arterial_low: number;
  imt: number;
  imt_interpretation: number;
  summary: string;
  treatment_results: string;
  created_by: number;
  modified_by: number;
  doctor: number;
  illness_history: number;
  diagnosis: number[];
}

export type FinalAppointment = Omit<GetFinalAppointmentPostData, 'id'>;
