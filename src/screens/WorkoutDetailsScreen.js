import React, { useEffect, useState } from "react";
import { Container, } from "react-bootstrap";
import WorkoutVideo from "../components/WorkoutVideo";
import Header from '../components/Header'
import WorkoutDescription from "../components/WorkoutDescription";
import Footer from "../components/Footer";
import axios from "../util/axios";
import { useParams } from "react-router-dom";



const WorkoutDetailsScreen = () => {
    const params=useParams()
   const[workout,setWorkout]=useState({})
    useEffect(()=>{
        console.log("ddddd");
  const fetch=async()=>{
    const {data}= await axios.get(`/workout/${params.id}`)
    console.log("oooooooooooooooooo{data}oooooooooooooooooooooo");
    console.log(data);
    console.log("oooooooooooooooooo{data}ooooooooooooooooo");

    setWorkout(data)
    console.log(";;;;;;;;;;;;;;;;;rrrrr;;;;;;;;;;;;;;;;;;;;;;;;");

    console.log(workout);
    console.log(";;;;;;;;;;;;;;;;;;;rrrrrr;;;;;;;;;;;;;;;;;;;;;;");
  }
      
       fetch()
        
    },[])
    return (
        <>
            <Header />
            <Container  className="border  shadow mt-5"   >
                <div className="m-5">
                <WorkoutVideo workout={workout}/>
                <WorkoutDescription  workout={workout}/>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default WorkoutDetailsScreen



