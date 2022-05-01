import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './CategorywiseProgram.css'
import { Button } from '@mui/material'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'


const ProgramWiseWorkouts = (props) => {

    console.log(props);
    let { _id, workout, price, description, trainer, video, preview } = props.data
    return (
        <Row key={_id} className='SingleProgram mt-5 border  shadow'>
            <Col lg={3} md={3} className='programLeft'>
                <div className='ProgramVideo mb-2'>
                    <ReactPlayer width={'100%'} height={'200px'} url={preview} muted controls ></ReactPlayer>
                    {/* <img alt='' width={'100%'} height={'100%'} src='/images/youtube.png'></img> */}
                </div>
                <Link style={{ textDecorationLine: 'none' }} to={`/workout/${_id}`}> <h3 className='programName text-danger'> {workout}</h3></Link>
            </Col>
            <Col md={7} sm={12} className='Program-Description'>
                <div>
                    <p>{description}</p>
                    <h4>Trainer : <LinkContainer style={{ color: 'orange' }} to={'/'}><span >{trainer}</span></LinkContainer></h4>
                </div>
            </Col>
            <Col md={1} sm={12} className='program-Right'>
                <div className='ml-4'>
                    <h1>₹{price}</h1>
                    <Link to={'/payment'}><Button variant="contained">Buy</Button></Link>
                </div>
            </Col>
        </Row>
    )
}

export default ProgramWiseWorkouts
