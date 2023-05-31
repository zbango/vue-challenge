import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  test('renders properly', () => {
    const wrapper = mount(Header)
    expect(wrapper.text()).toContain('tipti-vue-challenge')
  })
})
