export interface GetMedicationTypes {
  id: number;
  in_pack: number;
  name: string;
  price: number;
  unit: string;
  seria: string;
  is_expired: boolean;
  expire_date: Date;
  created_at: Date;
  modified_at: Date;
  company: number;
  created_by: number;
  modified_by: number;
}
