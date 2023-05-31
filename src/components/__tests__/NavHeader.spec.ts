import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavHeader from '../NavHeader.vue'

describe('NavHeader', () => {
  test('renders properly', () => {
    const wrapper = mount(NavHeader)
    expect(wrapper.text()).toContain('tipti-vue-challenge')
  })
})
