import axios from '../util/axios'
import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCESS,
    ADMIN_LOGIN_FAIL
}
    from '../constances/AdminConstants'


export const AdminLoginForm = (details) => async (dispatch) => {
    console.log("reached actions");
    dispatch({
        type: ADMIN_LOGIN_REQUEST
    })
    try {
        const { data } = await axios.post('/admin', details)
        dispatch({
            type: ADMIN_LOGIN_SUCESS,
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
