import {createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {programReducer} from '../reducers/programReducer'
import {workoutReducer,getAllWorkouts} from '../reducers/workoutReducers'

const reducer=combineReducers({
    programList:programReducer,
    singleWorkout:workoutReducer,
    getAllWorkouts:getAllWorkouts
})

const initialState={}
const middlewares=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlewares)))


export default store;