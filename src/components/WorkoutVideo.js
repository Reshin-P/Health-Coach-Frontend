import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleWorkout } from '../actions/workoutActions';
import { SINGLE_WORKOUT_RESET } from '../constances/workoutConstants'
import { updateProductReset } from '../actions/workoutActions'
import './WorkoutVideo.css';
const WorkoutVideo = () => {
  const params = useParams()
  const dispatch = useDispatch()
  let workoutdata = useSelector((state) => {
    return state.singleWorkout
  })
  useEffect(() => {
    dispatch(singleWorkout(params.id))
    return () => {
      dispatch(updateProductReset())
    }
  }, [dispatch])

  const { price, workout, preview } = workoutdata.workout

  return (
    <div className="workout_outer">
      <Row className='Workout_video' >
        <Col className='workout_video1' lg={6} md={12} xl={6} >
          <div className='workout_inner'  >
            <ReactPlayer url={preview} controls />          </div>
        </Col>
        <Col className='workout_video2' lg={6} md={12} xl={6}>
          <div className='workout_inner_Right '>
            <h2> {workout}</h2>
            <h4 className='mt-5'>Video Length:2hrs </h4>
            <h4 className='mt-5'>Trainer : John </h4>
            <div className='price'>
              <h3 className='mt-5'>Price : {price}</h3>

              <Button className='Buy-btn' variant="contained">Buy</Button>
            </div>
            <div>

            </div>
          </div>

        </Col>
      </Row>
    </div>
  )
}

export default WorkoutVideo
