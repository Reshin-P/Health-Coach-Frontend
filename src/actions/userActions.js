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
    USER_WEIGHT_UPDATE_FAIL
} from '../constances/UserConstants'




export const veryfyUser = () => async (dispatch) => {
    console.log("re a ched");
    let userInfo = await localStorage.getItem('userInfo')
    console.log("999999999999999999999999999999");
    console.log(userInfo);
    userInfo = JSON.parse(userInfo)
    console.log("999999999999999999999999999999");

    if (!userInfo) {
        userInfo = null

    }

    dispatch({
        type: USER_VERYFY,
        payload: userInfo

    })
}


export const loginForm = ({ username, password }) => async (dispatch) => {
    console.log("reached here");
    console.log(username);
    console.log(password);

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

export const Logout = () => async (dispatch) => {
    console.log("logout actions");
    localStorage.removeItem("userInfo")
    dispatch({
        type: USER_LOGOUT
    })
}

export const userUpdate = (user) => async (dispatch, getState) => {
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
        const { data } = await axios.put(`/user/${userInfo._id}`, user, config)
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


export const updateWeight = (weight, id) => async (dispatch) => {
    let user = localStorage.getItem('userInfo')
    user = JSON.parse(user)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    console.log(user);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    console.log(weight);
    dispatch({
        type: USER_WEIGHT_UPDATE_REQUEST
    })
    try {

        const config = {
            headers: {
                Authorization: user.token
            }
        }
        console.log("before calling");
        const { data } = await axios.put(`/user/weight/${user._id}`, { weight }, config)
        console.log("after calling");
        console.log(data);
        console.log(".............hhhhh............................");
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