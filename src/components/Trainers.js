import React from 'react'
import './Trainers.css'
import {Link} from '@mui/material'
import { LinkContainer } from 'react-router-bootstrap'

const Trainers = ({trainers}) => {
  
    return (
        <div className='mt-5 align-items-center mx-auto  trainer-card' >
            
<img  className='trainer-img'  src={trainers.image}></img>
          <div className='trainer  border shadow'   >
          
      <LinkContainer style={{marginTop:"100px", marginLeft:"90px"}}  to={'/trainers'}><h3  className="ml-5 text-danger" >{trainers.name}</h3></LinkContainer>
         
          <div className='m-3' >
          <p className='h5`'>{trainers.about}</p>
          </div>
          


          </div>
            


        </div>
    )
}

export default Trainers
