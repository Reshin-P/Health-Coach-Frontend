import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import Myworkoutsingle from '../components/Myworkoutsingle'
import Wsample from './Wsample.js'
import Header from '../components/Header'
const MyWorkoutsScreen = () => {
  return (
    <>
      <Header />
      <Container className='min-vh-100'>
        {Wsample.map((smp) =>
          <Myworkoutsingle data={smp} />)}
      </Container>
      <Footer />
    </>

  )
}

export default MyWorkoutsScreen
