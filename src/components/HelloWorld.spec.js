//引入描述、它、斷言 如果在使用
import { describe, it, expect } from 'vitest' 
//引入測試實用程式
import { mount } from '@vue/test-utils'
//引入元件
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () =>
{
    
  it('1+1 應該是2', () => {
    expect(1 + 1).toBe(2)
  })
    
  it('正確渲染', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
    
  it('在此測試檔案中使用 jsdom', () => {
    const element = document.createElement('div')
    element.innerHTML = '<p>Hello, HTML!</p>'
    expect(element.innerHTML).toBe('<p>Hello, HTML!</p>')
  })
})