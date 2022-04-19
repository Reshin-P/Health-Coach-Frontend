import {createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {programReducer} from '../reducers/programReducer'

const reducer=combineReducers({
    programList:programReducer
})

const initialState={}
const middlewares=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlewares)))


export default store;