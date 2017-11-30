import { createStore } from 'redux'
import reducer from './reducers'

const DEFAULT_STATE = {
	author: {
		name: 'rmnd',
		bio: 'Doing things...'
	}
}

const store = createStore(
	reducer, 
	DEFAULT_STATE,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
