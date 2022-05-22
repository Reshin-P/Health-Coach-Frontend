import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWorkouts } from '../actions/workoutActions.js'
import HeaderAdmin from '../components/Admin/HeaderAdmin'
import ProgramWiseWorkouts from '../components/ProgramWiseWorkouts'
import SingleWorkoutAdmin from '../components/Admin/SingleWorkoutAdmin'
const AllWorkoutScreen = () => {
    const dispatch = useDispatch()
    const { getAllWorkouts: { allWorkouts } } = useSelector((state) => {
        return state
    })
    console.log('allWorkouts', allWorkouts);
    const [workout, setWorkout] = useState([])

    useEffect(() => {
        dispatch(getAllWorkouts())
        // getAllWokouts()
    }, [])
    useEffect(() => {
        console.log("useEffect");
    }, [allWorkouts])
    return (
        <>
            <HeaderAdmin />
            <Container>
                {allWorkouts.map((smp) =>
                    <SingleWorkoutAdmin data={smp} />)
                }
            </Container >
        </>
    )
}

export default AllWorkoutScreen
