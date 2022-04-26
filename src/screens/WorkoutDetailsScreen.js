import React, { useEffect, useState } from "react";
import { Container, } from "react-bootstrap";
import WorkoutVideo from "../components/WorkoutVideo";
import Header from '../components/Header'
import WorkoutDescription from "../components/WorkoutDescription";
import Footer from "../components/Footer";
import axios from "../util/axios";
import { useParams } from "react-router-dom";
import { useSelect } from "@mui/base";



const WorkoutDetailsScreen = () => {
    const params=useParams()
 
  
    return (
        <>
            <Header />
            <Container  className="border  shadow mt-5"   >
                <div className="m-5">
                <WorkoutVideo />
                <WorkoutDescription />
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default WorkoutDetailsScreen



