import React from 'react'
import { InputContainer } from './styles'
import { IInput } from './types'

const Input = ({ value }: IInput) => {
    return(
    <InputContainer>
        <input disabled value={value} />
    </InputContainer>
)
}

export {Input} 
