import axios from '../util/axios'
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
}
    from '../constances/AdminConstants'

// Admin Login Form
export const AdminLoginForm = (details) => async (dispatch) => {
    console.log("reached actions");
    dispatch({
        type: ADMIN_LOGIN_REQUEST
    })
    try {
        const { data } = await axios.post('/admin', details)
        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}



//To Get All Workouts

export const getAllWorkoutsAdmin = () => async (dispatch) => {
    dispatch({
        type: ADMIN_WORKOUTS_REQUEST
    })
    try {
        const { data } = await axios.get('/workout')
        dispatch({
            type: ADMIN_WORKOUT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_WORKOUTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


//To Block workout


export const blockUnblockWorkout = (id, value) => async (dispatch) => {
    console.log(id, value);
    const details = { id, value }
    console.log(details);
    dispatch({
        type: WORKOUT_BLOCK_UNBLOCK_REQUEST
    })
    try {
        const { data } = await axios.patch(`/workout/${id}`, details)
        dispatch({
            type: WORKOUT_BLOCK_UNBLOCK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: WORKOUT_BLOCK_UNBLOCK_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// To Get All Trainers

export const getAllTrainers = () => async (dispatch) => {
    dispatch({
        type: ALL_TRAINERS_REQUEST
    })
    try {
        const { data } = await axios.get('/trainers')
        console.log(data);
        dispatch({
            type: ALL_TRAINERS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_TRAINERS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}

//To Block Unblock Trainers

export const blockUnblockTrainers = (id, value) => async (dispatch) => {
    console.log(id, value);
    const details = { value }
    console.log(details);
    dispatch({
        type: TRAINER_BLOCK_UNBLOCK_REQUEST
    })
    try {
        const { data } = await axios.post(`/admin/trainer/${id}`, details)
        dispatch({
            type: TRAINER_BLOCK_UNBLOCK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRAINER_BLOCK_UNBLOCK_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// To Get All Users

export const getAllUsers = () => async (dispatch) => {
    dispatch({
        type: GET_ALL_USER_REQUEST
    })
    try {
        const { data } = await axios.get('/user')
        console.log(data);
        dispatch({
            type: GET_ALL_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_USER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


//To Block Unblock Users

export const blockUnblockUsers = (id, value) => async (dispatch) => {
    console.log(id, value);
    const details = { value }
    console.log(details);
    dispatch({
        type: USER_BLOCK_REQUEST
    })
    try {
        const { data } = await axios.post(`/admin/user/${id}`, details)
        dispatch({
            type: USER_BLOCK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_BLOCK_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

//To Get All New Trainers

export const getAllNewTrainer = () => async (dispatch) => {
    dispatch({
        type: TRAINER_SIGNUP_ACCEPT_REQUEST
    })
    try {
        const { data } = await axios.get('/admin/trainers')
        dispatch({
            type: TRAINER_SIGNUP_ACCEPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRAINER_SIGNUP_ACCEPT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const acceptTrainers = (id) => async (dispatch) => {
    console.log("id", id);
    dispatch({
        type: TRAINER_ACCEPT_REQUEST
    })
    try {
        const { data } = await axios.patch(`/admin/accept/${id}`)
        console.log("jjjkk>>>>>>>", data);
        dispatch({
            type: TRAINER_ACCEPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRAINER_ACCEPT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}