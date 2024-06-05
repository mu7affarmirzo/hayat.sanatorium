export interface Nutrition {
    number: string
    name: string
    group: any[]
    arrivalData: string
    departureDate: string
    roomType: string
    room: string
    numberOfGuest: number
    level: number
    howManyTimesUsed: number
    capacity: number
    occupied: boolean
    tariff: number
    duration: number
    balance: number
    paid: number
    discount: number
    statusRoom: string
  }
  
 export interface NutritionState {
    nutritionList: Nutrition[];
    nutritionSupplements: Nutrition[]
    nutritionExceptions: Nutrition[]
 }