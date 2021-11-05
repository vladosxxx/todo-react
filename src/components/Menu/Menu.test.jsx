import { Provider } from 'react-redux'
import { store } from '../../store/store'
import Menu from './Menu'

describe('Menu tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Menu id={2} />
      </Provider>
    )
  })
  afterEach(() => {
    wrapper.unmount()
  })
  it('Menu check id', () => {
    expect(wrapper.props().children.props.id).toEqual(2)
  })
})
