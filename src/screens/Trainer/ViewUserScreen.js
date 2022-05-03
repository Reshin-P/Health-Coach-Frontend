import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import HeaderTrainer from '../../components/Trainer/HeaderTrainer'
import ViewUserPhoto from '../../components/Trainer/ViewUserPhoto'
import ViewUserProfile from '../../components/Trainer/ViewUserProfile'
import SingleworkoutUserScreen from '../../components/Trainer/SingleworkoutUserScreen'
import { SINGLE_USER } from '../../util/Api'
import { useParams } from 'react-router-dom'
import axios from '../../util/axios'
import { height } from '@mui/system'

const ViewUserScreen = () => {
    const params = useParams()

    const singleUser = async () => {
        console.log("reache api call");
        try {
            const { data } = axios.get(SINGLE_USER, params.id)
        } catch (error) {

        }

    }
    useEffect(() => {
        singleUser()
    }, [])

    return (
        <>
            <HeaderTrainer />
            <Container style={{ minHeight: "800px", height: "auto" }} className='border shadow' >
                <ViewUserPhoto />
                <ViewUserProfile />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "93%" }}>


                        <SingleworkoutUserScreen />
                        <SingleworkoutUserScreen />

                    </div>
                </div>

            </Container>
        </>
    )
}

export default ViewUserScreen
