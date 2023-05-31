interface IRate {
  regular: number
  rewards: number
}
export interface IHotel {
  id: number
  name: string
  rating: number
  weekdayRate: IRate
  weekendRate: IRate
  isCheaper: boolean
}

export interface IHotelCost {
  hotel: IHotel
  totalCost: number
}
