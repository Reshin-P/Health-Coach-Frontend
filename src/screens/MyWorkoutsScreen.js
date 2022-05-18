import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import Myworkoutsingle from '../components/Myworkoutsingle'
import Wsample from './Wsample.js'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { getSubcribedWorkouts } from '../actions/userActions'
const MyWorkoutsScreen = () => {
  const dispatch = useDispatch()
  const { subcribedworkouts } = useSelector((state) => state.subcribe)
  console.log("subcribedworkouts");
  console.log(subcribedworkouts);
  console.log("subcribedworkouts");
  useEffect(() => {
    dispatch(getSubcribedWorkouts())
  }, [])


  return (
    <>
      <Header />
      <Container className='min-vh-100'>
        {subcribedworkouts.map((smp) =>
          <Myworkoutsingle data={smp} />)}
      </Container>
      <Footer />
    </>

  )
}

export default MyWorkoutsScreen
