import {shallow} from 'enzyme'
import Congrats from './Congrats'
import {findByAttr, checkProp} from '../test/testUtils'

const defaultProps = {success: false}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps}/>)
}

test('renders without error', () => {
  const wrapper = setup({success: false})
  const congratsDiv = findByAttr(wrapper, 'congrats-div')
  expect(congratsDiv.length).toBe(1)
})

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({success: false})
  const component = findByAttr(wrapper, 'congrats-div')
  expect(component.text()).toBe("")
})

test('renders non-empty congrats message when `success` props is true', () => {
  const wrapper = setup({success: true})
  const message = findByAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})

test('does not throw warning with expected props', () => {
  const expectedProps = {success: false}
  checkProp(Congrats, expectedProps)
})