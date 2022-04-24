import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './WorkoutVideo.css'

import ReactPlayer from 'react-player'

const WorkoutVideo = ({ workout }) => {
  const { _id, program, price, description, video, diet1, diet2, dietimage, preview } = workout
  return (
    <div className="workout_outer">
      <Row className='Workout_video' >
        <Col className='workout_video1' lg={6} md={12} xl={6} >
          <div className='workout_inner'  >
            <ReactPlayer url={preview} controls />          </div>
        </Col>
        <Col className='workout_video2' lg={6} md={12} xl={6}>
          <div className='workout_inner_Right '>
            <h2> kjb</h2>
            <h4 className='mt-5'>Video Length:2hrs </h4>
            <h4 className='mt-5'>Trainer : John </h4>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default WorkoutVideo
