import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import DelTask from './DelTask'

describe('<DelTask>', () => {
  it('DelTask id check', () => {
    let wrapper = shallow(
      <Provider store={store}>
        <DelTask id={2} />
      </Provider>
    )
    expect(wrapper.props().children.props.id).toEqual(2)
  })
})
