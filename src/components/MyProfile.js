import { TextField } from '@mui/material'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import './MyProfile.css'
import Button from '@mui/material/Button'
import { UPDATE } from '../constances/ButtonConstants'
import { useForm } from "react-hook-form";


const MyProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onsubmit = async (data) => {
        console.log(data);
    }

    return (
        <Container className='profile_contaier  mt-5'>

            <Row >
                <Col xl={4} lg={4} md={4} sm={12} className='profile_col1' >
                    <div className='photo_box'>
                        <img className='profile_photo' alt='' src='/images/profile/sam.png'></img>
                    </div>
                    <h3 className='mt-4'>Reshin Suresh</h3>
                    <h6 className='text-danger'>reshin_suresh</h6>

                    <form>
                        <div className='input_H mt-4'>
                            <div>

                                <TextField style={{ width: '80%' }} id="outlined-basic" label='Enter weight' variant="outlined" />
                            </div>
                            <div className='mt-4'>

                                <Button className='weight-btn' variant="contained">{UPDATE}</Button>
                            </div>
                        </div>
                    </form>

                </Col>
                <Col xl={8} lg={8} md={8} sm={12} className='profile_col'>
                    <div className='outer'>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className='label-container'>
                                <label className='label' >Name  :</label>
                                <TextField className='inputF' label='Enter the name' sx={{ width: '90%' }} name='name' {...register("name", {
                                    required: 'Name Required', pattern: {
                                        value: /^[a-zA-Z]+$/g,
                                        message: "Only Characters"
                                    }
                                })} />
                            </div>
                            {errors.name && <p className='text-danger'>{errors.name.message}</p>}

                            <div className='label-container '>
                                <label className='label' >Mob  :</label>
                                <TextField className='inputF' label='Enter the MobNo' sx={{ width: '90%' }} {...register('phone', {
                                    required: "Mobile number required", minLength: {
                                        value: 10,
                                        message: "Enter 10 digit number"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Enter 10 digit number"
                                    }
                                })} />

                            </div>
                            {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                            <div className='label-container'>
                                <label className='label' >Email  :</label>
                                <TextField className='inputF' label='Enter the Email' sx={{ width: '90%' }} {...register('email', {
                                    required: "Email Required", patter: {
                                        value: /^\S+@\S+$/i,
                                        message: "Enter the Correct Email"
                                    }
                                })} />
                            </div>
                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}

                            <div className='label-container'>
                                <label className='label' >Email  :</label>
                            <TextField className='inputF' label='Enter the Age' name='age'  sx={{width:'90%'}} {...register('age',{required:'Age is Required',patter:{
        value:/\b([0-9]|10)\b /,
        message:"Enter the Correct Email"
      }})} />
      </div>
      {errors.age && <p className='text-danger'>{errors.age.message}</p>}    
      <div className='label-container'>
                                <label className='label' >Height  :</label>
                                <TextField className='inputF' label='Enter the Height' name='height'  sx={{width:'90%'}} {...register('height',{required:'height is Required',patter:{
        value:/\b([0-9]|10)\b /,
        message:"Enter the Correct Email"
      },
        maxLength:{
          value:3,
          message:'Maximum 3 Digit '
        }
      })} />
      </div>
      {errors.height && <p className='text-danger'>{errors.height.message}</p>}   
      <div className='label-container'>
                                <label className='label' >Health Condition  :</label>
                                <TextField className='inputF' label='Enter the Health Condition' type={'password'} name='password'  sx={{width:'90%'}} {...register('healthcondition'
      )} />
       {errors.password && <p className='text-danger'>{errors.password.message}</p>}   
      </div>
      {errors.height && <p className='text-danger'>{errors.height.message}</p>}   

      <Button type='submit' className='mt-4' variant="contained">{ UPDATE }</Button>


                        </form>
                    </div>
                </Col>
            </Row>

        </Container>

    )
}

export default MyProfile
