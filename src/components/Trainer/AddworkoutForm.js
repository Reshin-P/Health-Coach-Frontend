import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import axios from '../../util/axios';
import './AddworkoutForm.css';

const programs = ['yoga', 'gym', 'zumba', 'cardio', 'homeworkouts', 'meditation']

const AddworkoutForm = () => {
    const a = true
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        console.log(data);
        console.log("-----------------------");
        const formData = new FormData()
        formData.set('workout', data.workout)
        formData.set('video', data.video[0])
        formData.set('price',data.price)
        formData.set('description',data.description)
        formData.set('diet1',data.diet1)
        formData.set('diet2',data.diet2)
        formData.set('dietimage',data.dietimage[0])
        formData.set('preview',data.preview[0])
        formData.set('program',data.program)



        // formData.append('preview',data.preview)

        console.log(formData);
        const response = await axios.post('/workout', formData, config)
        console.log("eeeeee");
    }
    return (

        <Container className="FormContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                {a && <><Row className="inputRows mt-5">
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                        <TextField label='Enter the name' fullWidth name='workout' {...register("workout", {
                            required: 'Name Required', pattern: {
                                value: /^[a-zA-Z]+$/g,
                                message: "Only Characters"
                            }
                        })} />
                        {errors.workout && <p className='text-danger'>{errors.workout.message}</p>}
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                        <TextField label="Enter the price" type={'number'} fullWidth name='price' {...register('price', {
                            required: "Price required", maxLength: {
                                value: 5,
                                message: "Price range is high"
                            }
                        })} />
                        {errors.price && <p className="text-danger">{errors.price.message}</p>}
                    </Col>
                </Row>
                    <Row className="inputRows mt-1">
                        <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                            <Autocomplete fullWidth
                                disablePortal
                                id="combo-box-demo"
                                options={programs}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField fullWidth {...params} label="program" name="program" {...register('program', { required: "Choose program" })} />}
                            />
                            {errors.program && <p className='text-danger'>{errors.program.message}</p>}

                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                            <TextField label='Enter the description' fullWidth name='description' {...register("description", {
                                required: 'Description Required', pattern: {
                                    value: /^[a-zA-Z]+$/g,
                                    message: "Only Characters"
                                },
                                minLength: {
                                    value: 10,
                                    message: "description length is short"
                                }
                            })} />
                            {errors.description && <p className='text-danger'>{errors.description.message}</p>}
                        </Col>
                    </Row></>}
                <Row className="inputRows mt-1" >
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >
                        <TextField id="outlined-basic" type={'file'} fullWidth label='Select video' variant="standard" name="video" {...register('video', { required: "Choose Video" })} />
                        {errors.video && <p className='text-danger'>{errors.video.message}</p>}
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                        <TextField id="outlined-basic" type={'file'} fullWidth label="Select preview" variant="standard" name="preview" {...register('preview', { required: "Choose preview" })} />
                        {errors.preview && <p className='text-danger'>{errors.preview.message}</p>}
                    </Col>
                </Row>
                <Row className="inputRows mt-1" >
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >
                        <TextField id="outlined-basic" fullWidth label="Diet paragraph 1" variant="outlined" name="diet1" {...register('diet1', {
                            required: "Enter the Diet", minLength: {
                                minLength: 10,
                                message: 'Minimum 10 Words',
                            }
                        })} />
                        {errors.diet1 && <p className='text-danger'>{errors.diet1.message}</p>}
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >
                        <TextField id="outlined-basic" fullWidth label="Diet paragraph 2" variant="outlined" name="diet2" {...register('diet2', { required: "Enter the Diet" })} />
                        {errors.diet1 && <p className='text-danger'>{errors.diet1.message}</p>}
                    </Col>
                </Row>
                <Row className="inputRows mt-1" >
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >
                        <TextField id="outlined-basic" fullWidth label="Diet Image" type={'file'} variant="outlined" name="dietimage" {...register('dietimage', {
                            required: "Enter the Diet"
                        })} />
                        {errors.dietimage && <p className='text-danger'>{errors.dietimage.message}</p>}
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >

                    </Col>
                </Row>
                <Button type="submit" variant="contained">Submit</Button>

            </form>
        </Container>
    )
}

export default AddworkoutForm