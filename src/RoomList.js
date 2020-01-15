import React from 'react'

const RoomList = ({
    rooms,
    changeRoom
}) => {
    return (
        <ul>
            {rooms.map((room) => (
                <li onClick={() => changeRoom(room.id)}>{room.name}</li>
            ))}
        </ul>
    )
}

export default RoomList