import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Congrats from './Congrats'
import {findByAttr} from '../test/testUtils'

Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = (props={}) => {
  return shallow(<Congrats {...props}/>)
}

test('renders without error', () => {
  const wrapper = setup()
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