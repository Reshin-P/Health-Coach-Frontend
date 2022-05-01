import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { programReducer } from '../reducers/programReducer'
import { workoutReducer, allWorkoutsReducer } from '../reducers/workoutReducers'
import { veryuserReducer, subcribeWorkouts, userprofileEditReducer, LoginCheckReducer, userWeightUpdate } from '../reducers/userReducers'
import { AdminLoginReducer } from '../reducers/AdminReducers'

const reducer = combineReducers({
    programList: programReducer,
    singleWorkout: workoutReducer,
    getAllWorkouts: allWorkoutsReducer,
    user: veryuserReducer,
    updateuser: userprofileEditReducer,
    loginUser: LoginCheckReducer,
    updateweight: userWeightUpdate,
    admin: AdminLoginReducer,
    subcribe: subcribeWorkouts
})

const initialState = {}
const middlewares = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))


export default store;