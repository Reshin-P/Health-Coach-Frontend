import { TextField } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'; import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { UPDATE } from '../../constances/ButtonConstants.js'
import { Alert } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import CircularProgress from '@mui/material/CircularProgress';
import './TrainerProfileScreen.css'
const MyProfile = () => {
    const Input = styled('input')({
        display: 'none',
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [weight, setWeight] = useState('')
    const [photo, setPhoto] = useState(null)
    const [preview, setPreview] = useState('/images/profile/profile.jpg')


    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user: { userInfo } } = useSelector((state) => {
        return state
    })
    const { profilePhoto: { userprofilePhoto, loadingphoto, photosucess } } = useSelector((state) => { return state })

    const { loading, error, success, message } = useSelector((state) => state.updateuser)


    useEffect(() => {
        console.log("useeffect");
        if (!userInfo) {
            navigate('/login')
        }
        console.log(userInfo);
        if (userInfo.profilephoto) {
            console.log("profile unde");
            setPreview(userInfo.profilephoto)
        }

        if (photo) {
            const objectUrl = URL.createObjectURL(photo)
            setPreview(objectUrl)
        }
    }, [photo, userInfo])

    const onsubmit = async (data) => {

    }

    const uploadPhoto = async (e) => {
        e.preventDefault()
        console.log("dfdfd");
        console.log(photo);

        const formData = new FormData()
        formData.append('photo', photo)


    }

    return (
        <Container className='profile_contaier  mt-5'>

            <Row >
                <Col xl={4} lg={4} md={4} sm={12} className='profile_col1' >
                    <div className='photo_box'>
                        <img className='profile_photo' alt='' src={preview} ></img>
                    </div>
                    <form onSubmit={uploadPhoto}>
                        <label className='mt-3' htmlFor="icon-button-file">
                            <Input accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                        {photo && <button type='submit' style={{ border: 'none', backgroundColor: "white" }}>
                            <Fab
                                color="secondary"
                                size="small"
                                component="span"
                                aria-label="add"
                                variant="extended"
                            >
                                Upload photo
                            </Fab>
                        </button>}

                    </form>
                    {loadingphoto && <CircularProgress className='mt-3' />}
                    {photosucess && <Alert className='mt-5' severity="success">Photo updated!</Alert>}

                    <h3 className='mt-4'>{userInfo.name}</h3>
                    <h6 className='text-danger'>{userInfo.username}</h6>


                </Col>
                <Col xl={8} lg={8} md={8} sm={12} className='profile_col'>
                    <div className='outer'>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className='label-container'>
                                <label className='label' >Name  :</label>
                                <TextField className='inputF' label={userInfo.name} sx={{ width: '90%' }} name='name' {...register("name", {
                                    required: 'Name Required', pattern: {
                                        value: /^[a-zA-Z]+$/g,
                                        message: "Only Characters"
                                    }
                                })} />
                            </div>
                            {errors.name && <p className='text-danger'>{errors.name.message}</p>}

                            <div className='label-container '>
                                <label className='label' >Mob  :</label>
                                <TextField className='inputF' label={userInfo.phone} sx={{ width: '90%' }} {...register('phone', {
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
                                <TextField className='inputF' label={userInfo.email} sx={{ width: '90%' }} {...register('email', {
                                    required: "Email Required", patter: {
                                        value: /^\S+@\S+$/i,
                                        message: "Enter the Correct Email"
                                    }
                                })} />
                            </div>
                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}

                            <div className='label-container'>
                                <label className='label' >Age  :</label>
                                <TextField className='inputF' label={userInfo.age} name='age' sx={{ width: '90%' }} {...register('age', {
                                    required: 'Age is Required', patter: {
                                        value: /\b([0-9]|10)\b /,
                                        message: "Enter the Correct Email"
                                    }
                                })} />
                            </div>
                            {errors.age && <p className='text-danger'>{errors.age.message}</p>}
                            <div className='label-container'>
                                <label className='label' >Height  :</label>
                                <TextField className='inputF' label={userInfo.height} name='height' sx={{ width: '90%' }} {...register('height', {
                                    required: 'height is Required', patter: {
                                        value: /\b([0-9]|10)\b /,
                                        message: "Enter the Correct Email"
                                    },
                                    maxLength: {
                                        value: 3,
                                        message: 'Maximum 3 Digit '
                                    }
                                })} />
                            </div>
                            {errors.height && <p className='text-danger'>{errors.height.message}</p>}
                            <div className='label-container'>
                                <label className='label' >Health Condition  :</label>
                                <TextField className='inputF' label={userInfo.healthcondition} type={'password'} name='password' sx={{ width: '90%' }} {...register('healthcondition'
                                )} />
                                {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                            </div>
                            {errors.height && <p className='text-danger'>{errors.height.message}</p>}

                            <Button type='submit' className='my-4' variant="contained">
                                {UPDATE}

                            </Button>
                            {loading && <LinearProgress />}
                            {success && <Alert severity="success">Profile Updated</Alert>}
                            {error && <Alert severity="error">{error}</Alert>}


                        </form>
                    </div>
                </Col>
            </Row>

        </Container>

    )
}

export default MyProfile
































// import { TextField } from '@mui/material'
// import LinearProgress from '@mui/material/LinearProgress'; import Button from '@mui/material/Button'
// import React, { useEffect, useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import { useForm } from "react-hook-form"
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { styled } from '@mui/material/styles';
// import { UPDATE } from '../constances/ButtonConstants'
// import { userUpdate, updateWeight } from '../actions/userActions'
// import { Alert } from '@mui/material';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import IconButton from '@mui/material/IconButton';
// import Fab from '@mui/material/Fab';
// import { uploadProfilePhoto } from '../actions/userActions'
// import CircularProgress from '@mui/material/CircularProgress';
// import './TrainerProfileScreen.css'

// const TrainerProfileScreen = () => {


//     const Input = styled('input')({
//         display: 'none',
//     });
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const [photo, setPhoto] = useState(null)
//     const [preview, setPreview] = useState('/images/profile/profile.jpg')
//     const uploadPhoto = async (e) => {
//         e.preventDefault()

//     }
//     const onsubmit = async () => {

//     }

//     useEffect(() => {


//     }, [])
//     return (
//         <Container className='profile_contaier  mt-5'>

//             <Row >
//                 <Col xl={4} lg={4} md={4} sm={12} className='profile_col1' >
//                     <div className='photo_box'>
//                         <img className='profile_photo' alt='' src={preview} ></img>
//                     </div>
//                     <form onSubmit={uploadPhoto}>
//                         <label className='mt-3' htmlFor="icon-button-file">
//                             <Input accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} id="icon-button-file" type="file" />
//                             <IconButton color="primary" aria-label="upload picture" component="span">
//                                 <PhotoCamera />
//                             </IconButton>
//                         </label>
//                         {photo && <button type='submit' style={{ border: 'none', backgroundColor: "white" }}>
//                             <Fab
//                                 color="secondary"
//                                 size="small"
//                                 component="span"
//                                 aria-label="add"
//                                 variant="extended"
//                             >
//                                 Upload photo
//                             </Fab>
//                         </button>}

//                     </form>
//                     {/* {loadingphoto && <CircularProgress className='mt-3' />}
//                     {photosucess && <Alert className='mt-5' severity="success">Photo updated!</Alert>} */}

//                     <h3 className='mt-4'>fdfd</h3>
//                     <h6 className='text-danger'>fdfd</h6>



//                 </Col>
//                 <Col xl={8} lg={8} md={8} sm={12} className='profile_col'>
//                     <div className='outer'>
//                         <form >
//                             <div className='label-container'>
//                                 <label className='label' >Name  :</label>
//                                 <TextField className='inputF' label="fdf" sx={{ width: '90%' }} name='name' {...register("name", {
//                                     required: 'Name Required', pattern: {
//                                         value: /^[a-zA-Z]+$/g,
//                                         message: "Only Characters"
//                                     }
//                                 })} />
//                             </div>
//                             {errors.name && <p className='text-danger'>{errors.name.message}</p>}

//                             <div className='label-container '>
//                                 <label className='label' >Mob  :</label>
//                                 <TextField className='inputF' sx={{ width: '90%' }} {...register('phone', {
//                                     required: "Mobile number required", minLength: {
//                                         value: 10,
//                                         message: "Enter 10 digit number"
//                                     },
//                                     maxLength: {
//                                         value: 10,
//                                         message: "Enter 10 digit number"
//                                     }
//                                 })} />

//                             </div>
//                             {/* {errors.phone && <p className='text-danger'>{errors.phone.message}</p>} */}
//                             <div className='label-container'>
//                                 <label className='label' >Email  :</label>
//                                 <TextField className='inputF' sx={{ width: '90%' }} {...register('email', {
//                                     required: "Email Required", patter: {
//                                         value: /^\S+@\S+$/i,
//                                         message: "Enter the Correct Email"
//                                     }
//                                 })} />
//                             </div>
//                             {errors.email && <p className='text-danger'>{errors.email.message}</p>}

//                             <div className='label-container'>
//                                 <label className='label' >Age  :</label>
//                                 <TextField className='inputF' name='age' sx={{ width: '90%' }} {...register('age', {
//                                     required: 'Age is Required', patter: {
//                                         value: /\b([0-9]|10)\b /,
//                                         message: "Enter the Correct Email"
//                                     }
//                                 })} />
//                             </div>
//                             {/* {errors.age && <p className='text-danger'>{errors.age.message}</p>} */}
//                             <div className='label-container'>
//                                 <label className='label' >Height  :</label>
//                                 {/* <TextField className='inputF' label={userInfo.height} name='height' sx={{ width: '90%' }} {...register('height', {
//                                     required: 'height is Required', patter: {
//                                         value: /\b([0-9]|10)\b /,
//                                         message: "Enter the Correct Email"
//                                     },
//                                     maxLength: {
//                                         value: 3,
//                                         message: 'Maximum 3 Digit '
//                                     }
//                                 })} /> */}
//                             </div>
//                             {/* {errors.height && <p className='text-danger'>{errors.height.message}</p>} */}
//                             <div className='label-container'>
//                                 <label className='label' >Health Condition  :</label>
//                                 <TextField className='inputF' label={userInfo.healthcondition} type={'password'} name='password' sx={{ width: '90%' }} {...register('healthcondition'
//                                 )} />
//                                 {errors.password && <p className='text-danger'>{errors.password.message}</p>}
//                             </div>
//                             {/* {errors.height && <p className='text-danger'>{errors.height.message}</p>} */}

//                             <Button type='submit' className='my-4' variant="contained">
//                                 {UPDATE}

//                             </Button>
//                             {/* {loading && <LinearProgress />}
//                             {success && <Alert severity="success">Profile Updated</Alert>}
//                             {error && <Alert severity="error">{error}</Alert>} */}


//                         </form>
//                     </div>
//                 </Col>
//             </Row>

//         </Container>

//     )
// }

// export default TrainerProfileScreen
