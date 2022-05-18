import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { programReducer } from '../reducers/programReducer'
import { workoutReducer, allWorkoutsReducer } from '../reducers/workoutReducers'
import { UserWorkouts } from '../reducers/TrainersReducers'
import { veryuserReducer, subcribeWorkouts, userprofileEditReducer, LoginCheckReducer, userWeightUpdate, uploadProfilePhoto } from '../reducers/userReducers'
import { verytrainerReducer, trainerLoginReducer, uploadTrainerProfilePhoto, updateProfile, getSubcribedUsers, SingleTrainer, trainerWorkoutReducer } from '../reducers/TrainersReducers'
import { AdminLoginReducer, AdminAllWorkoutsReducers, BlockWorkoutReducer, getAlltrainers, BlockUnblockTrainerReducer, allUserReducers, BlockUnblockUserReducer, getNewTrainerReducer, acceptRequest } from '../reducers/AdminReducers'

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
    trainerPhoto: uploadTrainerProfilePhoto,
    trainerInfo: verytrainerReducer,
    trainerlogin: trainerLoginReducer,
    updateTrainerProfile: updateProfile,
    subcribedUsers: getSubcribedUsers,
    singleTrainer: SingleTrainer,
    trainerWorkout: trainerWorkoutReducer,
    adminAllWorkouts: AdminAllWorkoutsReducers,
    blockWorkout: BlockWorkoutReducer,
    getAlltrainers: getAlltrainers,
    blockTrainer: BlockUnblockTrainerReducer,
    allusers: allUserReducers,
    blockUser: BlockUnblockUserReducer,
    newTrainer: getNewTrainerReducer,
    acceptTrainer: acceptRequest

})

const initialState = {}
const middlewares = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))


export default store;