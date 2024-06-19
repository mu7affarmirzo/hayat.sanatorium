export type MedServiceCategoryTypes = MedServiceCategoryType[];
export type LabResearchesTypes = LabResearchesType[];

export interface MedServiceCategoryType {
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
