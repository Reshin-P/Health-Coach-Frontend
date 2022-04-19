import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './WorkoutDescription.css'

const WorkoutDescription = () => {
  return (
  <Row className='workout_des_row'>
<Col className='workout_des_col1' lg={6} md={12} xl={6}>
    <h1 className='mt-4'><u>Course Description</u></h1>
    <div>
        <h6 className='des_text mt-4'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </h6>
    </div>
</Col>

<Col className='workout_des_col2' lg={6} md={12} xl={6}>
    <div className='m-5'>
        <h2 className='mt-5'>Course Contents</h2>
        <li className='des_list'>Diet Plans</li>
        <li  className='des_list'>30 hrs video</li>

        <li  className='des_list'>scheduled workouts</li>

        <li  className='des_list'>prerecorded workout</li>
        <li  className='des_list'>online support</li>

    </div>
</Col>
  </Row>
  )
}

export default WorkoutDescription
