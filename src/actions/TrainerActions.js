import axios from "../util/axios";
import {
    USER_WORKOUT_REQUEST,
    USER_WORKOUT_SUCESS,
    USER_WORKOUT_FAIL,
    USER_WORKOUT_NULL,
    TRAINER_LOGIN_REQUEST,
    TRAINER_LOGIN_SUCESS,
    TRAINER_LOGIN_FAIL
} from '../constances/TrainerReduxConstants.js'

//FOR LOGIN TRAINER

export const trainerLoginAction = (username, password) => async (dispatch) => {
    console.log(username);
    console.log(password);
    dispatch({ type: TRAINER_LOGIN_REQUEST })
    try {
        const { data } = await axios.post('/trainers/trainerlogin', { username, password })
        console.log(data);
        dispatch({
            type: TRAINER_LOGIN_SUCESS,
            payload: data
        })
        localStorage.setItem('trainer', JSON.stringify(data))

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
    console.log("trainer info", trainerInfo);
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