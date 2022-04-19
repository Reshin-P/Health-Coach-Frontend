import React from 'react'
import { Container } from 'react-bootstrap'
import SubcribedVIdeo from '../components/SubcribedVIdeo'
import Header from '../components/Header'
import { Paper } from '@mui/material'
import SubcribedWorkoutDiet from '../components/SubcribedWorkoutDiet'
import Footer from "../components/Footer";


const SubcribedWorkouts = () => {
  return (
   <>
   <Header/>
       <Container  className='mt-5' >
         <Paper elevation={4}>
           <SubcribedVIdeo/>
           <SubcribedWorkoutDiet/>
           </Paper>
       </Container>
       <Footer/>
       </>

  )
}

export default SubcribedWorkouts
