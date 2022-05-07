import axios from '../util/axios'
import {
    USER_WORKOUT_REQUEST,
    USER_WORKOUT_SUCESS,
    USER_WORKOUT_FAIL,
    USER_WORKOUT_NULL,
    TRAINER_VERYFY,
    TRAINER_LOGIN_REQUEST,
    TRAINER_LOGIN_SUCESS,
    TRAINER_LOGIN_FAIL,
    TRAINER_LOGOUT,
    TRAINER_PROFILE_PHOTO_REQUEST,
    TRAINER_PROFILE_PHOTO_SUCESS,
    TRAINER_PROFILE_PHOTO_FAIL,
    TRAINER_PROFIE_UPDATE_REQUEST,
    TRAINER_PROFILE_UPDATE_SUCESS,
    TRAINER_PROFILE_UPDATE_FAIL
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

export const verytrainerReducer = (state = { trainerInfo: data }, action) => {

    switch (action.type) {
        case TRAINER_VERYFY:
            return { ...state, trainerInfo: action.payload }
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
        case TRAINER_LOGOUT:
        default:
            return state
    }
}

//To upload profile photo


export const uploadTrainerProfilePhoto = (state = { trainerprofilePhoto: {} }, { type, payload }) => {
    switch (type) {
        case TRAINER_PROFILE_PHOTO_REQUEST:
            return { ...state, loadingphoto: true }
        case TRAINER_PROFILE_PHOTO_SUCESS:
            return { ...state, loadingphoto: false, photosucess: true, photo: payload }
        case TRAINER_PROFILE_PHOTO_FAIL:
            return { ...state, loadingphoto: false, error: payload }
        case TRAINER_LOGOUT:
            return {}
        default:
            return state
    }

}


//To update Trainer profile

export const updateProfile = (state = { profileupdate: {} }, { type, payload }) => {
    switch (type) {
        case TRAINER_PROFIE_UPDATE_REQUEST:
            return { ...state, loading: true }
        case TRAINER_PROFILE_UPDATE_SUCESS:
            return { ...state, loading: false, sucess: true, profileupdate: payload }
        case TRAINER_PROFILE_UPDATE_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }


}