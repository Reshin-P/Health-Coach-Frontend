import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './CategorywiseProgram.css'
import { Button } from '@mui/material'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'


const ProgramWiseWorkouts = (props) => {
    console.log(props);

    let{_id,workout,price,description}=props.data
    return (
        <Row className='SingleProgram mt-5 border  shadow'>
            <Col lg={3} md={3} className='programLeft'>
                <div className='ProgramVideo'>
                    <img alt='' width={'100%'} height={'100%'} src='/images/youtube.png'></img>
                </div>
                <Link to={`/workout/${_id}`}> <h3 className='programName text-danger'> {workout}</h3></Link>
            </Col>
            <Col md={7} sm={12} className='Program-Description'>
                <div>
                    <p>{description}</p>
                    <h4>Trainer : <LinkContainer style={{ color: 'blue' }} to={'/'}><span >rrtr</span></LinkContainer></h4>
                </div>
            </Col>
            <Col md={1} sm={12} className='program-Right'>
                <div className='ml-4'>
                    <h1>₹{price}</h1>
                    <Button variant="contained">Buy</Button>
                </div>
            </Col>
        </Row>
    )
}

export default ProgramWiseWorkouts
