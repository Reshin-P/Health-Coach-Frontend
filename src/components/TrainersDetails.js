import React from 'react'
import { Container } from 'react-bootstrap'
import './TrainersDetails.css'
import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import sample from '../screens/sample.js'
import ProgramWiseWorkouts from './ProgramWiseWorkouts'


const TrainersDetails = () => {


  
  return (
    <Container className="trainer-container border shadow   vh-100 mt-5">
      <Row className='trainer_details_header mt-5'>
        <Col className='' sm={12} lg={3} xl={3}>
          <img src='/images/profile/mariya.png' className='Trainer_S_image'></img>
        </Col >
        <Col className='Traiener_Name  ' sm={12} lg={3} xl={3}>
          <h1 className='text-danger'>John</h1>
          <h4 className='text-secondary'>Yoga trainer Gym Trainers</h4>
        </Col>
      
      </Row>
      <Row>
         <div className='Trainer_Innner_Box'>
         <div className='Trainer_About'>
           <h1>About</h1>
           <p>
           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
           </p>
         
           {sample.map((smp)=> 
   
   <ProgramWiseWorkouts  data={smp}/>)
   }
         </div>
 

       </div>
      </Row>

     

    </Container>
  )
}

export default TrainersDetails
