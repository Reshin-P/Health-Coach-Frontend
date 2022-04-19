import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Currosal from "../components/Currosal";
import ProgramCards from "../components/ProgramCards";
import { Row, Col, Container } from "react-bootstrap";
import axios from '../util/axios.js'
import { useDispatch, useSelector } from 'react-redux'
import Trainers from "../components/Trainers";
import Footer from "../components/Footer";
import { listprograms } from '../actions/programActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { PROGRAM_HEADING } from '../constances/HomePageConstants'
import { TRAINER_HEADING } from '../constances/HomePageConstants'
const HomeScreen = () => {
  const dispatch = useDispatch()
  const programList = useSelector(state => state.programList)
  const { loading, error, programs } = programList
  const [trainers, setTrainers] = useState([])
  const [userData, setUserdata] = useState({})
  useEffect(() => {

    dispatch(listprograms())

  }, [dispatch])

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/trainers/trainers')
      setTrainers(data)
    }
    fetch()
  }, [])
  return (
    <div>
      <Header />
      <Currosal />
      <Container fluid className="" style={{ width: "80%" }}>
        <Container style={{ display: 'flex', justifyContent: "center" }}>
          <h1 >{PROGRAM_HEADING}</h1>
        </Container>
        {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) :
          <Row className="Category-card  d-flex justify-content-around">
            {programs.map((product) => (
              <Col className=" mt-4 " sm={12} md={6} lg={6} xl={4}>
                <ProgramCards product={product} />
              </Col>
            ))}
          </Row>
        }
      </Container>
      <Container className="mt-5" style={{ display: 'flex', justifyContent: "center" }}>
        <h1>{TRAINER_HEADING}</h1>
      </Container>
      <Container fluid className="" style={{ width: "90%" }} >
        <Row>
          {trainers.map((trainers) => (
            <Col className="" sm={12} md={6} lg={6} xl={3}>
              <Trainers trainers={trainers} />
            </Col>
          ))
          }
        </Row>
      </Container>
      <Footer />


    </div>
  );
};

export default HomeScreen;
