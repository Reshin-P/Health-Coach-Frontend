import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderTrainer from '../../components/Trainer/HeaderTrainer'
import ViewUserPhoto from '../../components/Trainer/ViewUserPhoto'
import ViewUserProfile from '../../components/Trainer/ViewUserProfile'

const ViewUserScreen = () => {
    return (
        <>
            <HeaderTrainer />
            <Container style={{ height: "800px" }} >
                <ViewUserPhoto />
                <ViewUserProfile />

            </Container>
        </>
    )
}

export default ViewUserScreen
