import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './ViewUserPhoto.css'

const ViewUserPhoto = () => {
    return (
        <>
            <Row className='photoRow'>
                <Col className='photoCol1' xl={3} lg={3} md={312} sm={12}>
                    <img className='profilePhoto' src='/images/profile/mariya.png'></img>
                </Col>

                <Col className='photoCol2' xl={4} lg={4} md={12} sm={12}>
                    <h1 className='user-name'>Reshin Suresh</h1>
                </Col>

            </Row>
        </>
    )
}

export default ViewUserPhoto
