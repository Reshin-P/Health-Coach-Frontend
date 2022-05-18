import axios from '../util/axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ProgramWiseWorkouts from '../components/ProgramWiseWorkouts'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { getAllWorkouts } from '../actions/workoutActions.js'

const AllWorkoutScreen = () => {
    const dispatch = useDispatch()
    const { getAllWorkouts: { allWorkouts } } = useSelector((state) => {
        return state
    })
    console.log('allWorkouts', allWorkouts);
    const [workout, setWorkout] = useState([])
    // const getAllWokouts = async () => {
    //     const { data } = await axios.get('/workout')
    //     console.log("daataat", data);
    //     setWorkout(data)
    // }
    useEffect(() => {
        dispatch(getAllWorkouts())
        // getAllWokouts()
    }, [])
    useEffect(() => {
        console.log("useEffect");
    }, [allWorkouts])
    return (
        <>
            <Header />
            <Container>
                {allWorkouts.map((smp) =>
                    <ProgramWiseWorkouts data={smp} />)
                }
            </Container >
        </>
    )
}

export default AllWorkoutScreen
