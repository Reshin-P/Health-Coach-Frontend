import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProgramWiseWorkouts from '../components/ProgramWiseWorkouts'
import { Container } from 'react-bootstrap'
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom'
import axios from '../util/axios'
import Alert from '@mui/material/Alert';




const CategoryWiseProgramScreen = () => {

  const params = useParams()
  const [nodata, setNodata] = useState()
  const [workout, setWorkout] = useState([])
  useEffect(() => {

    const fetchworkout = async () => {
      try {
        const { data } = await axios.get(`/program/program/${params.id}`)
        setWorkout(data)
      }
      catch (error) {

        setNodata(error)
      }
    }
    fetchworkout()
  }, [])
  return (
    <div>
      <Header />
      <Container className='border shadow ' style={{ minHeight: "900px" }}>
        {nodata && <Alert severity="info">This is an info alert — check it out!</Alert>}
        {workout.map((smp) =>
          <ProgramWiseWorkouts data={smp} />)}
      </Container>
      <Footer />


      {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Container className=' paymentcontainer '>
                        <Row className='mainrow'>
                            <Col className='col1' xl={12} lg={12} md={12} sm={12}>
                                <div className='workout'>                           <table width={'100%'} className="maintable" >
                                    <thead>
                                        <tr>
                                            <th width={'70%'}>Workout</th>
                                            <th width={'30%'}>price</th>

                                        </tr>
                                    </thead>
                                    <tbody className='tbody'>
                                        <td >
                                            <h5>90 days workout programs</h5>
                                            <h6>Trainers</h6>
                                        </td>
                                        <td>fdfddf</td>

                                    </tbody>
                                    <tbody>
                                        <td >
                                            <h5>Total</h5>
                                        </td>
                                        <td >5678</td>
                                    </tbody>
                                </table>

                                </div>

                                <div className='btn-div'>
                                    <div className='btn-inn'>
                                        <Button style={{ background: "white" }} fullWidth variant="">
                                            <img width={'100%'} src='/images/pay.png'></img>
                                        </Button>

                                    </div>


                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            </Modal> */}

    </div>
  )
}

export default CategoryWiseProgramScreen
