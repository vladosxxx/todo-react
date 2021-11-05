import { Provider } from 'react-redux'
import { store } from '../../store/store'
import ListTask from './ListTasks'

describe('List tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ListTask />
      </Provider>
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })
  it('List buttons', () => {
    expect(wrapper.find('li').length).toBe(0)
  })
})
