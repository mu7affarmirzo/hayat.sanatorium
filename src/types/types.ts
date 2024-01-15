export interface SvgProps {
    width?: any;
    height?: number;
    viewBox?: string;
    preserveAspectRatio?: string;
    color?: string;
    title?: string;
    stroke?: string;
    fill?: string;
    strokeOpasity?: string;
    style?: any;
}
export interface RoomsTypePriceView {
    id: number;
    roomNumber: string;
    capacity: number;
    level: number;
    view: string;
    isClean: string;
    color: string;
    departureDate: null;
    visitDate: null;
    gender: null;
    age: null;
    section: string;
    cleaningType: string;
    occupied: boolean;
    comments: string;
    howManyTimesUsed: number;
}
