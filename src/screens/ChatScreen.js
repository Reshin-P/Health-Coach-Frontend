import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ChatScreen.css'
import Message from '../components/Chat/Message/Message'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from '../util/axios'
import { io } from "socket.io-client"

const ChatScreen = () => {

    const params = useParams()
    const [inpuText, setInputText] = useState("")
    const [conversation, setConversation] = useState(null)
    const [message, setMessage] = useState([])
    const [arrivalMessage, setArrivalMessage] = useState(null)

    // const [Socket, setSoket] = useState(null)
    const Socket = useRef();
    const { user: { userInfo } } = useSelector((state) => {
        return state
    })

    useEffect(() => {
        Socket.current = io("http://localhost:5000")
        Socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now

            })

        })
    })
    // useEffect(()=>{
    // },[arrivalMessage])


    useEffect(() => {
        Socket.current.emit("addUser", userInfo._id)
        Socket.current.on("getUsers", user => {
            console.log(user);
        })
    }, [userInfo])




    const createconversation = async () => {
        const chat = {
            user: params.user,
            trainer: params.trainer
        }
        try {
            const { data } = await axios.post('/conversation', chat)
            setConversation(data)
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = async () => {
        let details = {
            text: inpuText,
            sender: userInfo._id,
            conversationId: conversation._id
        }
        Socket.current.emit("sendMessage"), {
            senderId: userInfo._id,
            reciverId: params.trainer,
            text: inpuText

        }
        try {
            const { data } = await axios.post('/message', details)
            setMessage([...message, data])
        } catch (error) {
        }
    }

    const getMessages = async () => {
        const { data } = await axios.get(`/message/${conversation._id}`)
        setMessage(data)
    }



    useEffect(() => {
        if (conversation) {
            getMessages()
        }
        else {
            createconversation()
        }
    }, [conversation])

    return (
        <Container className='msg-main-container'>
            <Row className='mainrow'>
                <Col xs={12}>
                    {message.map((msg) => (

                        <Message message={msg} own={msg.sender === userInfo._id} />

                    ))
                    }
                    <div className='chatboxBottom'>
                        <textarea className='chatmessageinput' onChange={(e) => setInputText(e.target.value)} placeholder='write something'></textarea>
                        <button onClick={sendMessage} className='send-btn'>Send</button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default ChatScreen 
