import React from 'react'
import { ButtonContainer } from './styles'

// Adicionamos a prop 'title' (ou 'label')
function Button({onClick, title}) {
  return (
    <ButtonContainer onClick={onClick}>
       {title}
    </ButtonContainer>
  )
}

export default Button
