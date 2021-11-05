import NewTaskField from './NewTaskField'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('NewTaskField tests', () => {
  it('check input', () => {
    let wrapper = mount(
      <Provider store={store}>
        <NewTaskField />
      </Provider>
    )
    wrapper.find('input').simulate('change')
    wrapper.unmount()
  })
})
