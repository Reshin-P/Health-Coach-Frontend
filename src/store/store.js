import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { programReducer } from '../reducers/programReducer'
import { workoutReducer, allWorkoutsReducer } from '../reducers/workoutReducers'
import { UserWorkouts } from '../reducers/TrainersReducers'
import { veryuserReducer, subcribeWorkouts, userprofileEditReducer, LoginCheckReducer, userWeightUpdate, uploadProfilePhoto } from '../reducers/userReducers'
import { verytrainerReducer, trainerLoginReducer } from '../reducers/TrainersReducers'
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
    subcribe: subcribeWorkouts,
    userworoutsTrainer: UserWorkouts,
    profilePhoto: uploadProfilePhoto,
    trainerInfo: verytrainerReducer,
    trainerlogin: trainerLoginReducer
})

const initialState = {}
const middlewares = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))


export default store;