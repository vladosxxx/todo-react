import Modal from './Modal'

describe('Modal tests', () => {
  it('check modal', () => {
    let wrapper = mount(<Modal />)
    wrapper.unmount()
  })
})
