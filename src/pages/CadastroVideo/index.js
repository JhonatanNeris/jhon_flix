import React from 'react'
import { Link } from 'react-router-dom'

const CadastroVideo = () => {
  return (
    <div>
      <h1>Cadastro de vídeo</h1>
      <Link to="/cadastro/categoria">
        Nova Categoria
      </Link>
    </div>
  )
}

export default CadastroVideo