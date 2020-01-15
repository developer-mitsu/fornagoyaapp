import React, { useState } from 'react'
import styled from "styled-components"

const Form = ({
    speak
}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        speak(value)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <SubmitBtn>投稿</SubmitBtn>
        </form>
    )
}

const Input = styled.input`
    width: 80%;
    height: 10vh;
    font-size: 1.5em;
`

const SubmitBtn = styled.button`

`

export default Form