export interface GetIBSTypes2 {
    id: number;
    status: string;
    patient: string;
    gender: boolean;
    room: string;
    room_type: string;
    age: number;
    tariff: string;
    start_date: Date;
    end_date: Date;
}

export interface GetIBSTypes {
    id: number;
    patient: Patient;
    booking: Booking;
    profession: Diagnosis;
    toxic_factors: Diagnosis[];
    tags: null;
    diagnosis: Diagnosis;
    nurse: Doctor[];
    doctor: Doctor;
    series_number: string;
    type: string;
}

export interface Booking {
    id: number;
    patients: Patient;
    room: BookingRoom;
    room_type: RoomType;
    living: Living[];
    cheques: Cheque[];
    discount: number;
    is_checked_out: boolean;
    stage: string;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    modified_at: Date;
    tariff: number;
    cheque: number;
}

export interface Cheque {
    id: number;
    name: ChequeName;
    day: Date;
    code: Code;
    pocket: Pocket;
    quantity: number;
    price: number;
    status: boolean;
    transaction_date: Date;
    paid_amount: number;
    cashier: Cashier;
}

export enum Cashier {
    SonyaOShavlanManicom = "Sonya O'Shavlan Manicom",
}

export interface Code {
    color: Color;
    code: number;
}

export enum Color {
    De8A64 = "#de8a64",
    The65Aedb = "#65aedb",
}

export enum ChequeName {
    Polyuks = "POLYUKS",
    The459983335 = "45-998-3335",
}

export interface Pocket {
    color: Color;
    code: number;
    name: PocketName;
}

export enum PocketName {
    StandartK = "StandartK",
    Tariff = "tariff",
}

export interface Living {
    date: Date;
    scheme: number;
    tariff: Tariff;
    roomType: string;
    room: LivingRoom;
    disCount: number;
    services: any[];
}

export interface LivingRoom {
    room_number: string;
    is_paid: boolean;
    price: null;
}

export interface Tariff {
    tariff_name: string;
    is_paid: boolean;
    price: null;
}

export interface Patient {
    id: number;
    f_name: string;
    mid_name: string;
    l_name: string;
    email: string;
    date_of_birth: Date;
    home_phone_number: string;
    mobile_phone_number: string;
    address: string;
    additional_info: number;
    is_active: boolean;
    doc_type: string;
    doc_number: string;
    issued_data: Date;
    INN: string;
    country: string;
    last_visit_at: Date;
    created_at: Date;
    modified_at: Date;
    gender: boolean;
    information_source: number;
    created_by: number;
    modified_by: number;
    organization: number;
    patient_group: any[];
}

export interface BookingRoom {
    id: number;
    room_number: string;
    price: number;
    is_available: boolean;
    count: number;
    floor: number;
    view: string;
    capacity: number;
    status_cleanest: string;
    created_at: Date;
    modified_at: Date;
    room_type: number;
    created_by: number;
    modified_by: number;
}

export interface RoomType {
    id: number;
    name: string;
    tag: string;
    color: string;
    created_at: Date;
    modified_at: Date;
    created_by: number;
    modified_by: number;
}

export interface Diagnosis {
    id: number;
    name: string;
}

export interface Doctor {
    id: number;
    email: string;
    username: string;
    f_name: string;
    l_name: string;
    m_name: string;
    phone_number: string;
    sex: boolean;
    organization_id: number;
    branch_id: number;
    color: string;
}
