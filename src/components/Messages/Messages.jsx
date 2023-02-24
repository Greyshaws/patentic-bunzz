import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import ContractContext from '../../context/contract-context';
import MessagesContext from '../../context/messages-context'
import Loading from "../UI/Loading"
import Message from './Message';
import classes from "./Messages.module.css"
import MessagesFilter from './MessagesFilter';
import Box from "@mui/material/Box"
import {sortMessagesByTimestamp } from "../../utils/contractUtils"

const Messages = () => {
    const messagesCtx = useContext(MessagesContext);
    const contractCtx = useContext(ContractContext);
    const [loadingMessages, setLoadingMessages] = useState(false)
    const [filter, setFilter] = useState("")

    const {messages, getMessagesOnAddress } = messagesCtx
    const {connected, currentAccount} = contractCtx

    useEffect(() => {
        const getMessagesOnAddressHandler = async () => {
            getMessagesOnAddress()
            setLoadingMessages(false)

        }
        if (connected) {
            setLoadingMessages(true)
            getMessagesOnAddressHandler()
        }
    }, [connected])

    if(loadingMessages) {
        return (

            <Loading />

        )
    }

    if ((messages.length === 0) && !loadingMessages) {
        return (
            <Box sx={{
                py: 4,
                fontWeight: 500,
                textAlign: "center"
            }}>
                Got no messages!
            </Box>
        )
    }


    const changeFilterHandler = (value) => {
        setFilter(value)
    }

    let filteredMessages = [...messages]

    if (filter === "sent") {
        filteredMessages = filteredMessages.filter(message => message.from === currentAccount);
    }

    if (filter === "received") {
        filteredMessages = filteredMessages.filter(message => message.to === currentAccount);
    }

    let sortedMessages = sortMessagesByTimestamp(filteredMessages);


  return (
    <>
    <div className={classes.filter}>
        <MessagesFilter value={filter} onChangeFilter={changeFilterHandler} />
    </div>
    <ul className={classes["messages"]}>
        {sortedMessages.map((message, index )=> {
            // console.log("message TIME: ", message.timestamp)
            return (
                <Message
                    key={index}
                    text={message.text}
                    timestamp={message.timestamp}
                    from={currentAccount}
                    to={message.to}
                    patent={message.patent}
                />
            )
        })}
    </ul>
    </>
    
  )
}

export default Messages