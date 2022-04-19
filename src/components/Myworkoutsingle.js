import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from '@mui/material'

const Myworkoutsingle = (props) => {
    let trainer = props.data;
    return (

        <Row className='SingleProgram mt-5 border  shadow'>
            <Col lg={3} md={3} className='programLeft'>
                <div className='ProgramVideo'>
                    <img alt='' width={'100%'} height={'100%'} src='/images/youtube.png'></img>
                </div>
                <Link to={'/workout/id'}> <h3 className='programName text-danger'> {trainer.programname}</h3></Link>
            </Col>
            <Col md={7} sm={12} className='Program-Description'>
                <div>
                    <p>{trainer.about}</p>
                    <h4>Trainer : <LinkContainer style={{ color: 'blue' }} to={'/'}><span >{trainer.trainer}</span></LinkContainer></h4>
                </div>
            </Col>
            <Col md={1} sm={12} className='program-Right'>
                <div className='ml-4'>
                    <h1>₹{trainer.price}</h1>
                    <Button style={{ background: 'green' }} variant="contained">Start</Button>
                </div>
            </Col>
        </Row>
    )
}

export default Myworkoutsingle
