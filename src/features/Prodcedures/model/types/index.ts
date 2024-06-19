export type ProcedureTypes = ProcedureType[];

export interface ProcedureType {
  id: number;
  name: string;
  branch: number;
  color: string;
  med_service_specialty: MedServiceSpecialty[];
}

export interface MedServiceSpecialty {
  id: number;
  name: string;
  cost: number;
  type: string;
  created_at: string;
  modified_at: string;
  speciality: number;
  category: any;
  created_by: number;
  modified_by: number;
  branch: number;
  doctor: number[];
}
