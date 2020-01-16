import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

import RoomList from './RoomList'
import ChatView from './ChatView'
import Form from './Form'

// 責任: レイアウト
const App = () => {
    const [rooms, setRooms] = useState([
        {
            id: 0,
            name: 'roomA'
        },
        {
            id: 1,
            name: 'roomB'
        }
    ])
    const [activeRoomId, setActiveRoomId] = useState(0)
    const [activeUser, setActiveUser] = useState('Takemitsu')
    const [messages, setMessages] = useState([
        {
            roomId: 0,
            user: 'Takemitsu',
            content: 'oooooooooooo'
        },
        {
            roomId: 1,
            user: 'Nagoya',
            content: 'lllllllllllllll'
        }
    ]);

    const activeRoom = rooms[activeRoomId].name
    const activeMessages = messages.filter(message => message.roomId === activeRoomId )

    const changeRoom = (id) => {
        setActiveRoomId(id)
    }

    const speak = (value) => {
        setMessages(messages.concat({
            roomId: activeRoomId,
            user: activeUser,
            content: value
        }))
    }


    return (
        <>
            <GlobalStyle />
            <MainWrap>
                <RoomList rooms={rooms} changeRoom={changeRoom} />
                <ChatView 
                    messages={activeMessages} 
                    activeRoom={activeRoom}
                    activeUser={activeUser} 
                />
            </MainWrap>
            <Form speak={speak} />
        </>
    )
}

// const AppContainer = styled.div`
//     width: 800px;
//     margin: 0 auto;
// `

const MainWrap = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 90vh;
    padding: 2em;
`

export default App