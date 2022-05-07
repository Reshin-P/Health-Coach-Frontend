import axios from "../util/axios";
import {
    USER_WORKOUT_REQUEST,
    USER_WORKOUT_SUCESS,
    USER_WORKOUT_FAIL,
    TRAINER_LOGIN_REQUEST,
    TRAINER_LOGIN_SUCESS,
    TRAINER_LOGIN_FAIL,
    TRAINER_LOGOUT,
    TRAINER_VERYFY,
    TRAINER_PROFILE_PHOTO_SUCESS,
    TRAINER_PROFILE_PHOTO_REQUEST,
    TRAINER_PROFILE_PHOTO_FAIL,
    TRAINER_PROFIE_UPDATE_REQUEST,
    TRAINER_PROFILE_UPDATE_SUCESS
} from '../constances/TrainerReduxConstants.js'

//FOR LOGIN TRAINER

export const trainerLoginAction = (username, password) => async (dispatch) => {

    dispatch({ type: TRAINER_LOGIN_REQUEST })
    try {
        const { data } = await axios.post('/trainers/trainerlogin', { username, password })
        localStorage.setItem('trainer', JSON.stringify(data))
        dispatch({
            type: TRAINER_LOGIN_SUCESS,
            payload: data
        })
        dispatch({
            type: TRAINER_VERYFY,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRAINER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}





//TO GET USER WORKOUTS
export const getUserWorkouts = (id) => async (dispatch) => {
    dispatch({
        type: USER_WORKOUT_REQUEST
    })
    let trainerInfo = localStorage.getItem('trainer')
    trainerInfo = JSON.parse(trainerInfo)
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${trainerInfo.token}`
            }
        }
        const { data } = await axios.get(`/trainers/userworkouts/${id}`, config)
        dispatch({
            type: USER_WORKOUT_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_WORKOUT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

//To logot trainer

export const LogoutTrainer = () => async (dispatch) => {

    localStorage.removeItem("trainer")
    dispatch({
        type: TRAINER_LOGOUT
    })
}



//To upoad profile photo

export const uploadProfilePhoto = (formData) => async (dispatch) => {

    let trainerInfo = await localStorage.getItem('trainer')
    trainerInfo = JSON.parse(trainerInfo)
    dispatch({
        type: TRAINER_PROFILE_PHOTO_REQUEST
    })
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${trainerInfo.token}`,
            }
        }
        const { data } = await axios.patch('/trainers/profilephoto', formData, config)

        localStorage.setItem('trainer', JSON.stringify(data))
        dispatch({
            type: TRAINER_PROFILE_PHOTO_SUCESS,
            payload: data
        })
        dispatch({
            type: TRAINER_LOGIN_SUCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRAINER_PROFILE_PHOTO_FAIL,
            payload: error.response && error.response.data.message
                ? error.data.message
                : error.message
        })
    }
}


//To update trainer profile

export const updateProfile = (detail) => async (dispatch, getState) => {
    console.log(detail);
    console.log("reached update action");
    dispatch({
        type: TRAINER_PROFIE_UPDATE_REQUEST
    })
    const {
        trainerInfo: { trainerInfo },
    } = getState();


    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${trainerInfo.token}`,
        },
    };

    try {
        console.log("try");
        const { data } = await axios.put(`/trainers/${trainerInfo._id}`, detail)
        console.log(data);
        await localStorage.setItem('trainer', JSON.stringify(data))
        dispatch({
            type: TRAINER_PROFILE_UPDATE_SUCESS,
            payload: data
        })
        dispatch({
            type: TRAINER_VERYFY,
            payload: data
        })
    } catch (error) {

    }


} 