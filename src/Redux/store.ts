import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { NPMListReducer } from './reducers/NPMreducer'

const reducer = combineReducers({
  NPMListReducer: NPMListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export type RootState = ReturnType<typeof reducer>    //rootstate defines the type of information in our state
export default store