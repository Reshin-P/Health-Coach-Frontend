import React from 'react'
import HeaderTrainer from '../../components/Trainer/HeaderTrainer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
      TrainerHomepageScreen
    </div>
  )
}

export default TrainerHomepageScreen
