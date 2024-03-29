export interface GetProdcedures {
  id: number;
  name: string;
  branch: number;
  color: string;
  med_service_specialty: any[];
}

export interface AppointmentMedServiceTypes {
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
  type: Type;
  created_at: Date;
  modified_at: Date;
  speciality: number;
  category: null;
  created_by: number;
  modified_by: number;
  branch: number;
  doctor: number[];
}

export enum Type {
  Service = 'service',
}

export interface LabResearchesType {
  id: number;
  name: string;
  lab_research: LabResearch[];
}

export interface LabResearch {
  id: number;
  name: string;
  price: number;
  category: number;
  branch: number;
}
