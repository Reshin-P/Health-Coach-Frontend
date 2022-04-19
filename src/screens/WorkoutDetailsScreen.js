import React from "react";
import { Container, } from "react-bootstrap";
import WorkoutVideo from "../components/WorkoutVideo";
import Header from '../components/Header'
import WorkoutDescription from "../components/WorkoutDescription";
import Footer from "../components/Footer";



const WorkoutDetails = () => {
    return (
        <>
            <Header />
            <Container  className="border  shadow mt-5"   >
                <div className="m-5">
                <WorkoutVideo/>
                <WorkoutDescription/>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default WorkoutDetails



