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

let data = localStorage.getItem('userInfo')
data = JSON.parse(data)
console.log(data);
console.log("console from rducer");
if (data) {
    data = data

} else {
    data = null
}
console.log("data");

console.log(data);
console.log("data");
export const veryuserReducer = (state = { userInfo: data }, action) => {

    switch (action.type) {
        case USER_VERYFY:
            return { ...state, userInfo: action.payload }
        default: return state

    }
}

export const userWeightUpdate = (state = { weight: {} }, { type, payload }) => {
    switch (type) {
        case USER_WEIGHT_UPDATE_REQUEST:
            return { ...state, loading: true }
        case USER_WEIGHT_UPDATE_SUCESS:
            return { ...state, loading: false, Weightsuccess: true, userdata: payload }
        case USER_WEIGHT_UPDATE_FAIL:
            return { ...state.weight, loading: false, error: payload }
        default: return state

    }
}



export const userprofileEditReducer = (state = { user: {} }, { type, payload }) => {
    switch (type) {
        case USER_UPDATE_REQUEST:
            return { ...state, loading: true }
        case USER_UPDATE_SUCESS:
            return { ...state, loading: false, success: true, user: payload }
        case USER_UPDATE_FAIL:
            return { ...state, loading: false, error: payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}


export const LoginCheckReducer = (state = { userInfo: {} }, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true }
        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, loginUser: payload }
        case USER_LOGIN_FAIL:
            return { ...state, loading: false, error: payload }
        default: return state
    }
}