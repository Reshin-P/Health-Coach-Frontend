import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_WORKOUTS_REQUEST,
    ADMIN_WORKOUT_SUCCESS,
    ADMIN_WORKOUTS_FAIL,
    WORKOUT_BLOCK_UNBLOCK_REQUEST,
    WORKOUT_BLOCK_UNBLOCK_SUCCESS,
    WORKOUT_BLOCK_UNBLOCK_FAIL,
    ALL_TRAINERS_REQUEST,
    ALL_TRAINERS_SUCCESS,
    ALL_TRAINERS_FAIL,
    TRAINER_BLOCK_UNBLOCK_REQUEST,
    TRAINER_BLOCK_UNBLOCK_SUCCESS,
    TRAINER_BLOCK_UNBLOCK_FAIL,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAIL,
    USER_BLOCK_REQUEST,
    USER_BLOCK_SUCCESS,
    USER_BLOCK_FAIL,
    TRAINER_SIGNUP_ACCEPT_REQUEST,
    TRAINER_SIGNUP_ACCEPT_SUCCESS,
    TRAINER_SIGNUP_ACCEPT_FAIL,
    TRAINER_ACCEPT_REQUEST,
    TRAINER_ACCEPT_SUCCESS,
    TRAINER_ACCEPT_FAIL
} from '../constances/AdminConstants'


export const AdminLoginReducer = (state = { admin: {} }, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN_REQUEST:
            return { ...state, loading: true }
        case ADMIN_LOGIN_SUCCESS:
            return { ...state, loading: false, success: true, admin: payload }
        case ADMIN_LOGIN_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }

}

export const AdminAllWorkoutsReducers = (state = { adminAllWorkouts: [] }, { type, payload }) => {
    switch (type) {
        case ADMIN_WORKOUTS_REQUEST:
            return { ...state, loading: true }
        case ADMIN_WORKOUT_SUCCESS:
            return { ...state, loading: false, adminAllWorkouts: payload }
        case ADMIN_WORKOUTS_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

// To Block user

export const BlockWorkoutReducer = (state = { blockworkout: "" }, { type, payload }) => {
    switch (type) {
        case WORKOUT_BLOCK_UNBLOCK_REQUEST:
            return { ...state, loading: true }
        case WORKOUT_BLOCK_UNBLOCK_SUCCESS:
            return { ...state, loading: false, blockworkout: payload }
        case WORKOUT_BLOCK_UNBLOCK_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

// To Block user

export const getAlltrainers = (state = { trainers: [] }, { type, payload }) => {
    switch (type) {
        case ALL_TRAINERS_REQUEST:
            return { ...state, loading: true }
        case ALL_TRAINERS_SUCCESS:
            return { ...state, loading: false, trainers: payload }
        case ALL_TRAINERS_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

//To Block Unblock Trainers   

export const BlockUnblockTrainerReducer = (state = { blockTrainer: "" }, { type, payload }) => {
    switch (type) {
        case TRAINER_BLOCK_UNBLOCK_REQUEST:
            return { ...state, loading: true }
        case TRAINER_BLOCK_UNBLOCK_SUCCESS:
            return { ...state, loading: false, blockTrainer: payload }
        case TRAINER_BLOCK_UNBLOCK_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

//To Get All User

export const allUserReducers = (state = { alluser: [] }, { type, payload }) => {
    switch (type) {
        case GET_ALL_USER_REQUEST:
            return { ...state, loading: true }
        case GET_ALL_USER_SUCCESS:
            return { ...state, loading: false, alluser: payload }
        case GET_ALL_USER_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}



//To Block Unblock Users   

export const BlockUnblockUserReducer = (state = { blockUser: "" }, { type, payload }) => {
    switch (type) {
        case USER_BLOCK_REQUEST:
            return { ...state, loading: true }
        case USER_BLOCK_SUCCESS:
            return { ...state, loading: false, blockUser: payload }
        case USER_BLOCK_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

//To Accept New Trainer Signup

export const getNewTrainerReducer = (state = { newTrainers: [] }, { type, payload }) => {
    switch (type) {
        case TRAINER_SIGNUP_ACCEPT_REQUEST:
            return { ...state, loading: true }
        case TRAINER_SIGNUP_ACCEPT_SUCCESS:
            return { ...state, loading: false, newTrainers: payload }
        case TRAINER_SIGNUP_ACCEPT_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

//To ACCEPT TRAINER BTN

export const acceptRequest = (state = { acceptTrainer: "" }, { type, payload }) => {
    switch (type) {
        case TRAINER_ACCEPT_REQUEST:
            return { ...state, acceptLoading: true, sucess: false }
        case TRAINER_ACCEPT_SUCCESS:
            return { ...state, acceptLoading: false, sucess: true, acceptTrainer: payload }
        case TRAINER_ACCEPT_FAIL:
            return { ...state, acceptLoading: false, errors: payload }
        default:
            return state
    }
}
