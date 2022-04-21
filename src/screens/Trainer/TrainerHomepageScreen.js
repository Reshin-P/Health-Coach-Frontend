import React from 'react'
import HeaderTrainer from '../../components/Trainer/HeaderTrainer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const TrainerHomepageScreen = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    const trainer=localStorage.getItem('trainer')
    if(!trainer){
navigate('/trainerlogin')
    }

  })
  return (
    <div>
      <HeaderTrainer/>
      <Container>
        <h1>TrainerHomepageScreen</h1>
      </Container>
    </div>
  )
}

export default TrainerHomepageScreen
