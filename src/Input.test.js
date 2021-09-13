import {shallow} from 'enzyme'
import React from 'react'
import { findByAttr, checkProp } from '../test/testUtils'
import Input from './Input'

const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord}/>)
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByAttr(wrapper, 'component-input')
  expect(component.length).toBe(1)
})

test('does not throw warning with expected props', () => {
  checkProp(Input, {secretWord: 'party'})
})

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn()
    React.useState = jest.fn(() => ["", mockSetCurrentGuess])
    const wrapper = setup()
    const inputBox = findByAttr(wrapper, 'input-box')
    const mockEvent = {target: {value: 'train'}}
    inputBox.simulate("change", mockEvent)
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })
})