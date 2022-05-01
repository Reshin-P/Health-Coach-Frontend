import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCESS,
    ADMIN_LOGIN_FAIL
} from '../constances/AdminConstants'


export const AdminLoginReducer = (state = { admin: {} }, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN_REQUEST:
            return { ...state, loading: true }
        case ADMIN_LOGIN_SUCESS:
            return { ...state, loading: false, success: true, admin: payload }
        case ADMIN_LOGIN_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }

}