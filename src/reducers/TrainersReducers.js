import {
    USER_WORKOUT_REQUEST,
    USER_WORKOUT_SUCESS,
    USER_WORKOUT_FAIL,
    USER_WORKOUT_NULL,
    TRAINER_VERYFY,
    TRAINER_LOGIN_REQUEST,
    TRAINER_LOGIN_SUCESS,
    TRAINER_LOGIN_FAIL
} from '../constances/TrainerReduxConstants'

// TO GET USER WORKOUTS

export const UserWorkouts = (state = { userWorkouts: [] }, { type, payload }) => {
    switch (type) {
        case USER_WORKOUT_REQUEST:
            return { ...state, loading: true }
        case USER_WORKOUT_SUCESS:
            return { ...state, loading: false, userWorkouts: payload }
        case USER_WORKOUT_FAIL:
            return { ...state, loading: false, error: payload }
        case USER_WORKOUT_NULL:
            return {}
        default:
            return state

    }
}


let data = localStorage.getItem('trainer')
data = JSON.parse(data)
if (data) {
    data = data

} else {
    data = null
}


// To Veryfy the TRAINER

export const verytrainerReducer = (state = { userInfo: data }, action) => {

    switch (action.type) {
        case TRAINER_VERYFY:
            return { ...state, userInfo: action.payload }
        default: return state

    }
}


//TO TRAINER LOGIN

export const trainerLoginReducer = (state = { trainerLogin: {} }, { type, payload }) => {
    switch (type) {
        case TRAINER_LOGIN_REQUEST:
            return { ...state, loading: true, sucess: false }
        case TRAINER_LOGIN_SUCESS:
            return { ...state, loading: false, sucess: true, trainerLogin: payload }
        case TRAINER_LOGIN_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}