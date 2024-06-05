export interface GetMedicationTypes {
  map(
    arg0: (medication: any) => {
      pills_injections: any;
      price: any;
      state: string;
      quantity: number;
      period_days: number;
      end_date: Date;
      frequency: string;
      comments: string;
      instruction: string;
    },
  ): import('types/patientTypes').Pill[];
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
