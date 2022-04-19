import React from 'react'
import Header from '../components/Header'
import ProgramWiseWorkouts from '../components/ProgramWiseWorkouts'
import {Container} from 'react-bootstrap'
import sample from './sample.js'
import Footer from "../components/Footer";



const CategoryWiseProgramScreen = () => {
  return (
    <div>
      <Header/>


      <Container  className='border shadow'>

     
  

     {sample.map((smp)=> 
   
     <ProgramWiseWorkouts  data={smp}/>)}
      
      </Container>
      <Footer/>
     

    </div>
  )
}

export default CategoryWiseProgramScreen
