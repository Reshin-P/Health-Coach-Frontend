import {PROGRAM_LIST_FAIL,
PROGRAM_LIST_REQUEST,
PROGRAM_SUCESS} from  '../constances/programConstants'


export const programReducer = (state = { programs: [] }, action) => {

    switch (action.type) {
        case PROGRAM_LIST_REQUEST:
            return { loading: true }
        case PROGRAM_SUCESS:
            return { loading: false, programs: action.payload }
        case PROGRAM_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }

}