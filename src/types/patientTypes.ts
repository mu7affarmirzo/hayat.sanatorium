export interface GetMyPatients {
  cito: null;
  no: string;
  age: number;
  room: string;
  diagnosis: string;
  start_date: Date;
  end_date: Date;
}

export interface GetMyPatientsQuery {
  full_name: string;
  ib: number;
  card_type: any;
  word: string;
}
