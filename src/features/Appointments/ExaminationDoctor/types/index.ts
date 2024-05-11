export type ExaminationAppointment = Omit<GetExaminatorAppointment, 'id'>;

export interface GetExaminatorAppointment {
  id: number;
  state: string;
  created_at: Date;
  modified_at: Date;
  complaints: null;
  arv_number: string;
  ayes_shells: string;
  from_to_sanatorium: string;
  road_crossed: string;
  abroad_for_last_years: null;
  virus_hepatitis: null;
  tuberculosis: null;
  malarias: null;
  venerian_illness: null;
  dizanteri: null;
  helminthic_infestations: null;
  had_contact_with_inf_people: null;
  had_stul_for: boolean;
  allergy: null;
  meteolabilisis: null;
  non_carrying_prods: null;
  stull_issues: null;
  has_always_pills: null;
  objective_data: null;
  temperature: number;
  arterial_high: number;
  arterial_low: number;
  imt: number;
  pulse: string;
  diet: null;
  regime: string;
  created_by: number;
  modified_by: null;
  doctor: number;
  illness_history: number | null;
}
