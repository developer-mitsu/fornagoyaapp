import React from 'react'
import styled from "styled-components"

const MessageItem = ({
    user,
    message
}) => {
    return (
        <Wrap>
            <UserIcon/>
            <span>{`${user}: `}</span>
            <span>{message}</span>
        </Wrap>
    )
}

const Wrap = styled.li`
    display: flex;
    align-items: center;
    padding: 1em;
`

const UserIcon = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 50%;
`

export default MessageItem