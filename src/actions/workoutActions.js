import axios from '../util/axios'
import {
    SINGLE_WORKOUT_FAIL,
    SINGLE_WORKOUT_REQUEST,
    SINGLE_WORKOUT_SUCCESS,
    ALL_WORKOUTS_FAIL,
    ALL_WORKOUTS_REQUEST,
    ALL_WORKOUTS_SUCESS,
    SINGLE_WORKOUT_RESET
} from '../constances/workoutConstants'

export const singleWorkout = (workoutID) => async (dispatch) => {
    console.log("fdfdfd");
    try {
        dispatch({
            type: SINGLE_WORKOUT_REQUEST
        })
        const { data } = await axios.get(`/workout/${workoutID}`)
        dispatch({
            type: SINGLE_WORKOUT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SINGLE_WORKOUT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }

}
export const updateProductReset = () => {
    return {
        type: SINGLE_WORKOUT_RESET
        
    };
};
export const getAllWorkouts = () => async (dispatch) => {
    console.log("reducer");
    try {
        console.log("try");
        dispatch({
            type: ALL_WORKOUTS_REQUEST
        })
        const { data } = await axios.get('/workout')
        console.log(data);
        dispatch({
            type:ALL_WORKOUTS_SUCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ALL_WORKOUTS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}