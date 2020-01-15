import React, { useState } from 'react'
import styled from "styled-components"

import MessageItem from './MessageItem'

const ChatView = ({
    chatHistory,
    activeRoom,
    activeUser
}) => {
    return (
        <Container>
            <h2>{activeRoom}</h2>
            {
                chatHistory.messages.map(message => (
                    <MessageItem
                        user={message.user}
                        message={message.content}
                    />
                ))
            }
        </Container>
    )
}

const Container = styled.ul`
    width: 100%;
    list-style: none;
`

export default ChatView