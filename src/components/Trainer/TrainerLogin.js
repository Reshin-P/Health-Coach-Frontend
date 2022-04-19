import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid, Paper, Avatar } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../util/axios'
import Alert from '@mui/material/Alert';
import './TrainerLogin.css'
import {useEffect} from 'react'

 

function TrainerLogin() {
    const navigate = useNavigate() 
       useEffect(() => {
console.log("fdfdd");
        const trainer=localStorage.getItem('trainer')
        if(trainer){
            navigate('/trainer')
        }
     
       }, [])


   
    const [mailError, setMailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginerror, setLoginerror] = useState()
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const { username, password } = login
    const { register, handleSubmit, formState: { errors } } = useForm();
    const FormSubmit = async (input) => {
        console.log(input);
        try {
            const response = await axios.post('/trainers/trainerlogin', { username, password })
            console.log(response);
            if (response.data) {
                localStorage.setItem('trainer', JSON.stringify(response.data))
               navigate('/trainer')
            }
        } catch (err) {
            console.log(err.response.data.message);
            setLoginerror(err.response.data.message)
        }
    }
    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '25px 0' }
    const paperStyle = { padding: 20, height: '40vh', width: 380, margin: '20px auto' }

    return (
        <div style={{ marginTop: '200px' }} >
            <Grid >

                <Paper elevation={10} style={paperStyle}>
                    <Grid><center>

                        <h2> Sign In</h2>
                        <p>{mailError}</p>
                        <p>{passwordError}</p>
                    </center>
                    </Grid>
                    {loginerror && <Alert severity="error">{loginerror}</Alert>}
                    <form onSubmit={handleSubmit(FormSubmit)}>
                        <TextField id="standard-basic" label="username" variant="standard" value={login.username} name="username" {...register('username', { required: "username is required" })} onChange={(event) => setLogin({ ...login, username: event.target.value })} fullWidth />
                        {errors?.email && errors.email.message}
                        <TextField id="standard-basic" label="Password" type='password' name='password' {...register('password', { required: "password is required" })} variant="standard" value={login.password} onChange={(event) => setLogin({ ...login, password: event.target.value })} fullWidth />
                        {errors?.password && errors.password.message}
                        <Button type="submit" variant="contained" style={btnStyle} color="primary" fullWidth>Submit</Button>
                    </form>
                    Need a Registration? <Link to={'/trainersignup'}>Click Here</Link>
                    <Button type="submit" variant="outlined" className="mt-5" style={btnStyle} color="primary" fullWidth>  <img className="googleIcon" alt="" src="/images/google.png "></img> Login With Google</Button>
                </Paper>
            </Grid>
        </div>
    )
}
export default TrainerLogin