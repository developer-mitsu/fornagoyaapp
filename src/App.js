import React, { useState } from 'react'
import styled from 'styled-components'

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
    const [chatHistories, setChatHistories] = useState([
        {
            roomId: 0,
            messages: [
                {
                    user: 'Takemitsu',
                    content: 'oooooooooooo'
                },
                {
                    user: 'Nagoya',
                    content: 'lllllllllllllll'
                }
            ]
        },
        {
            roomId: 1,
            messages: [
                {
                    user: 'fdafsfd',
                    content: 'gadgdag'
                },
                {
                    user: 'fbbdfb',
                    content: 'vsdvdsvsd'
                }
            ]
        }
    ]);

    const chatHistory = chatHistories[activeRoomId]
    const activeRoom = rooms[activeRoomId].name

    const changeRoom = (id) => {
        setActiveRoomId(id)
    }

    const speak = (value) => {
        const chatHisto
        const newMessages = chatHistory.messages.concat(
            {
                user: activeUser,
                content: value
            }
        )

    }


    return (
        <>
            <MainWrap>
                <RoomList rooms={rooms} changeRoom={changeRoom} />
                <ChatView 
                    chatHistory={chatHistory} 
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
    height: 90vh;
`

export default App