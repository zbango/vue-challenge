import { defineStore } from 'pinia'
import { IHotel, IHotelCost } from '@/types/hotel'
import { ClientTypeEnum } from '@/constants/ClientTypeEnum'
import { WeekDayEnum } from '@/constants/WeekDayEnum'

interface State {
  hotels: IHotel[]
  customerType: string
  dates: string[]
}

export const useHotelStore = defineStore('hotel', {
  state: (): State => ({
    hotels: [
      {
        id: 1,
        name: 'Lakewood',
        rating: 3,
        weekdayRate: {
          regular: 110,
          rewards: 80
        },
        weekendRate: {
          regular: 90,
          rewards: 80
        },
        isCheaper: false
      },
      {
        id: 2,
        name: 'Bridgewood',
        rating: 4,
        weekdayRate: {
          regular: 160,
          rewards: 110
        },
        weekendRate: {
          regular: 60,
          rewards: 50
        },
        isCheaper: false
      },
      {
        id: 3,
        name: 'Ridgewood',
        rating: 5,
        weekdayRate: {
          regular: 220,
          rewards: 100
        },
        weekendRate: {
          regular: 150,
          rewards: 40
        },
        isCheaper: false
      }
    ],
    customerType: ClientTypeEnum.REGULAR,
    dates: ['']
  }),

  actions: {
    calculateCheapestHotel() {
      const hotelCosts: IHotelCost[] = this.hotels.map((hotel: IHotel) => {
        const weekdayRate =
          this.customerType === ClientTypeEnum.REGULAR
            ? hotel.weekdayRate.regular
            : hotel.weekdayRate.rewards
        const weekendRate =
          this.customerType === ClientTypeEnum.REGULAR
            ? hotel.weekendRate.regular
            : hotel.weekendRate.rewards

        const totalCost = this.dates.reduce((total: number, date: string) => {
          const [year, month, day] = date.trim().split('-').map(Number)
          const finalDate = new Date(year, month - 1, day)
          const dayOfWeek = finalDate.getDay()
          const isWeekend = dayOfWeek === WeekDayEnum.SATURDAY || dayOfWeek === WeekDayEnum.SUNDAY
          return total + (isWeekend ? weekendRate : weekdayRate)
        }, 0)

        return { hotel, totalCost }
      })

      hotelCosts.sort((a: IHotelCost, b: IHotelCost) =>
        a.totalCost !== b.totalCost ? a.totalCost - b.totalCost : b.hotel.rating - a.hotel.rating
      )

      this.hotels.forEach((hotel: IHotel) => {
        hotel.isCheaper = hotel.id === hotelCosts[0].hotel.id ? true : false
      })
    },
    addDate() {
      if (this.dates.length < 10) {
        this.dates.push('')
      }
    },
    removeDate(index: number) {
      if (this.dates.length > 1) {
        this.dates.splice(index, 1)
      }
    },
    updateDate(value: string, index: number) {
      this.dates[index] = value
    }
  }
})
