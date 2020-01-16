import React, { useState } from 'react'
import styled from "styled-components"

import MessageItem from './MessageItem'

const ChatView = ({
    messages,
    activeRoom,
    activeUser
}) => {
    return (
        <Container>
            <h2>{activeRoom}</h2>
            {
                messages
                    .map(message => (
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
    padding: 0 50px;
    box-sizing: border-box;
`

export default ChatView