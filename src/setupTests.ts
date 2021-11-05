// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect'
import Enzyme, { shallow, render, mount } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import toJson from 'enzyme-to-json'

let globalAny: any = global
Enzyme.configure({ adapter: new EnzymeAdapter() })

globalAny.shallow = shallow
globalAny.render = render
globalAny.mount = mount
globalAny.toJson = toJson
