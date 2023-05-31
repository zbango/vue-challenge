import { setActivePinia, createPinia } from 'pinia'
import { useHotelStore } from './hotels'
import { describe, beforeEach, test, expect } from 'vitest'

describe('Hotel Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('calculateCheapestHotel sets isCheaper field to true for Lakewood when input is Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)', () => {
    const store = useHotelStore()
    store.customerType = 'regular'
    store.dates = ['2009-03-16', '2009-03-17', '2009-03-18']

    store.calculateCheapestHotel()

    expect(store.hotels[0].isCheaper).toBe(true)
    expect(store.hotels[1].isCheaper).toBe(false)
    expect(store.hotels[2].isCheaper).toBe(false)
  })

  test('calculateCheapestHotel sets isCheaper field to true for Ridgewood when input is Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)', () => {
    const store = useHotelStore()
    store.customerType = 'rewards'
    store.dates = ['2009-03-26', '2009-03-27', '2009-03-28']

    store.calculateCheapestHotel()

    expect(store.hotels[0].isCheaper).toBe(false)
    expect(store.hotels[1].isCheaper).toBe(false)
    expect(store.hotels[2].isCheaper).toBe(true)
  })

  test('addDate adds a new item in the dates array', () => {
    const store = useHotelStore()
    store.dates = ['']

    store.addDate()

    expect(store.dates.length).toBe(2)
  })

  test('addDate does not add a new item if dates array lenght is already 10', () => {
    const store = useHotelStore()
    store.dates = ['', '', '', '', '', '', '', '', '', '']

    store.addDate()

    expect(store.dates.length).toBe(10)
  })

  test('removeDate removes specific item of dates array', () => {
    const store = useHotelStore()
    store.dates = ['', '', '', '', '', '', '', '', '', '']

    store.removeDate(1)

    expect(store.dates.length).toBe(9)
  })

  test('removeDate does not remove item of dates array if there is only one', () => {
    const store = useHotelStore()
    store.dates = ['']

    store.removeDate(1)

    expect(store.dates.length).toBe(1)
  })

  test('updateDate set a value in specific index of dates array', () => {
    const date = '2009-03-26'
    const store = useHotelStore()
    store.dates = ['']

    store.updateDate(date, 0)

    expect(store.dates[0]).toBe(date)
  })
})
