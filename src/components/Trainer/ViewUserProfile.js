import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './ViewUserProfile.css'
import { CONNECT_TRAINER, DIET_INSTRUCTION, DIET_PLAN, MESSAGE, VIDEO_CALL, WHATSAPP } from '../../constances/SubscribedWorkout';
import { Button } from 'react-bootstrap'

const ViewUserProfile = () => {
    return (
        <Row className='row-profile' >
            <Col sm={12} lg={7} md={12} xl={7} className='Col1' >
                <div className='details'>
                    <div className='text'>
                        <div className='key'>
                            <p>Name </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>Reshi</p>
                        </div>
                    </div>

                    <div className='text'>
                        <div className='key'>
                            <p>Email </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>Reshfddfdfdfi</p>
                        </div>
                    </div>

                    <div className='text'>
                        <div className='key'>
                            <p>Mob NO </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>Reshi</p>
                        </div>
                    </div>
                    <div className='text'>
                        <div className='key'>
                            <p>Age </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>55</p>
                        </div>
                    </div>


                    <div className='text'>
                        <div className='key'>
                            <p>Height </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>44</p>
                        </div>
                    </div>



                    <div className='text'>
                        <div className='key'>
                            <p>Weight </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>Reshi</p>
                        </div>
                    </div>

                    <div className='text'>
                        <div className='key'>
                            <p>Health Condition </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>Reshi</p>
                        </div>
                    </div>



                </div>

            </Col>
            <Col sm={12} lg={4} md={12} xl={4} className='Col1 border shadow ' >
                <div className="connect ">
                    <h2>{CONNECT_TRAINER}</h2>
                    <Button className="mt-5 btn1" variant="contained">{VIDEO_CALL}</Button>
                    <Button className="mt-5 btn2" variant="contained">{MESSAGE}</Button>
                    <Button className="mt-5 btn3" variant="contained">{WHATSAPP}</Button>
                </div>
            </Col>

        </Row>
    )
}

export default ViewUserProfile
