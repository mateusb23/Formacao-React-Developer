import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo() {
  return (
    <div>
      <ItemContainer>
        <h3>Mateus</h3>
        <p>It Suport Techinician | Software Developer</p>
        <a href="#">Ver repositório</a><br />
        <a href="#" className="remover">Remover</a>
        <hr />
      </ItemContainer>
    </div>
  )
}

export default ItemRepo