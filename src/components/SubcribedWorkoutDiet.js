import React from "react";
import { Row, Col } from "react-bootstrap";
import './SubcribedWorkoutDiet.css'
import Button from '@mui/material/Button'
import {DIET_PLAN,DIET_INSTRUCTION,CONNECT_TRAINER,PREFERED_FOOD,VIDEO_CALL,MESSAGE,WHATSAPP} from '../constances/SubscribedWorkout'

const SubcribedWorkoutDiet = () => {
    return (
        <div className="mt-2">
            <Row className="diet_row" >
                <Col className="Diet1 gl-1 mt-4 " xl={6} lg={6} md={11} sm={11} xs={11}>
                    <div className="diet_description  ">
                        <h1 className="text-center"><u>{DIET_PLAN}</u></h1>
                        <p className="text-danger text-center">{DIET_INSTRUCTION}</p>
                        <div className="imagebox">
                            <img src="/images/diet.jpg" alt='' width={'80%'} height={'250px'}></img >
                        </div>
                        <div className="border mt-5 " >
                            <div className="mx-3">
                            <p className="mt-5 " width={'80%'}>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                            </div>
                            <div className="mt-5 mx-2">
                            <p className="mt-5" width={'80%'}>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                            </div>


                            <h4>{PREFERED_FOOD}<span>:Salads banana</span></h4>
                        </div>

                    </div>
                </Col>
                <Col className="Diet2 gl-1 mt-4 " xl={4} lg={4} md={11} sm={11} xs={11}>
                    <div className="connect ">
                        <h2>{CONNECT_TRAINER}</h2>
                        <Button className="mt-5 btn1" variant="contained">{VIDEO_CALL}</Button>
                        <Button className="mt-5 btn2" variant="contained">{MESSAGE}</Button>
                        <Button className="mt-5 btn3" variant="contained">{WHATSAPP}</Button>
                    </div>



                </Col>
            </Row>
        </div>

    )
}

export default SubcribedWorkoutDiet


