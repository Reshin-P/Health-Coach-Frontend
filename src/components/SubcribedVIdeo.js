import React from 'react'
import './SubcribedVideo.css'
import {Row,Col} from 'react-bootstrap'

const SubcribedVIdeo = () => {
  return (
      <>
    <Row className='subcribed_video'>
        <Col xl={7} lg={7} md={7} className='sub_video'>
            <img width={'100%'} height={'100%'} alt='' src='/images/youtube.png'></img>
        </Col>
      
    </Row>
    <Row className='sub_title'>
        <Col xl={7} lg={7} md={7}>
            <h1>90 days workout programs</h1>
        </Col>
        </Row>
    </>
  )
}

export default SubcribedVIdeo
