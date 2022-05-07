import axios from '../util/axios'
import {
    USER_VERYFY,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCESS,
    USER_UPDATE_FAIL,
    USER_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_WEIGHT_UPDATE_REQUEST,
    USER_WEIGHT_UPDATE_SUCESS,
    USER_WEIGHT_UPDATE_FAIL,
    USER_SUBCRIBED_WORKOUT_REQUEST,
    USER_SUBCRIBED_WORKOUT_SUCCESS,
    USER_SUBCRIBED_WORKOUT_FAIL,
    USER_PROFILE_PHOTO_REQUEST,
    USER_PROFILE_PHOTO_SUCESS,
    USER_PROFILE_PHOTO_FAIL
} from '../constances/UserConstants'



// To Very The User

export const veryfyUser = () => async (dispatch) => {

    let userInfo = await localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo)
    if (!userInfo) {
        userInfo = null
    }
    dispatch({
        type: USER_VERYFY,
        payload: userInfo
    })
}

//User LoginForm

export const loginForm = ({ username, password }) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST
    })
    try {
        console.log("try");
        const { data } = await axios.post('/user/login', { username, password })
        await localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        dispatch({
            type: USER_VERYFY,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

//User Logout

export const Logout = () => async (dispatch) => {

    localStorage.removeItem("userInfo")
    dispatch({
        type: USER_LOGOUT
    })
}

//User Profile Update

export const userUpdate = (detail) => async (dispatch, getState) => {

    dispatch({
        type: USER_UPDATE_REQUEST,
    })
    try {
        const {
            user: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.put(`/user/${userInfo._id}`, detail, config)
        localStorage.setItem('userInfo', JSON.stringify(data))

        dispatch({
            type: USER_UPDATE_SUCESS,
            payload: data
        })
        dispatch({
            type: USER_VERYFY,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.message
        })
    }
}

//To Update User Weight

export const updateWeight = (weight, id) => async (dispatch) => {

    let user = localStorage.getItem('userInfo')
    user = JSON.parse(user)
    dispatch({
        type: USER_WEIGHT_UPDATE_REQUEST
    })
    try {
        const config = {
            headers: {
                Authorization: user.token
            }
        }
        const { data } = await axios.put(`/user/weight/${user._id}`, { weight }, config)
        dispatch({
            type: USER_WEIGHT_UPDATE_SUCESS,
            payload: data
        })
        dispatch({
            type: USER_VERYFY,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_WEIGHT_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

//To get subcribed workouts

export const getSubcribedWorkouts = (id) => async (dispatch) => {
    console.log("reacherd reducesressfjdhkjgbfwkdshio");

    let userInfo = await localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo)
    console.log(">>>>>>>>>>>>>>>>>>>>>>", userInfo);
    dispatch({
        type: USER_SUBCRIBED_WORKOUT_REQUEST
    })

    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        const { data } = await axios.get(`/subcribe/${userInfo._id}`)
        dispatch({
            type: USER_SUBCRIBED_WORKOUT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_SUBCRIBED_WORKOUT_FAIL,
            payload: error.response && error.response.data.message
                ? error.data.message
                : error.message
        })

    }
}

//To upoad profile photo

export const uploadProfilePhoto = (formData, userInfo) => async (dispatch) => {
    let userInfo = await localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo)
    console.log(userInfo);
    console.log("reached upload photo");
    console.log(formData);
    dispatch({
        type: USER_PROFILE_PHOTO_REQUEST
    })
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
        const { data } = await axios.patch('/user/profilephoto', formData, config)
        const user = await localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch({
            type: USER_PROFILE_PHOTO_SUCESS,
            payload: data
        })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_PROFILE_PHOTO_FAIL,
            payload: error.response && error.response.data.message
                ? error.data.message
                : error.message
        })

    }
}