import React, { useState, useEffect } from 'react'

//Styled components
import styled from 'styled-components';

//React Router Dom
import { Link, json } from 'react-router-dom';

//Components
import FormField from '../../components/FormFiled';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const CadastroCategoria = () => {

  const valoresIniciais = {
    nome: "",
    descricao:"",
    cor: "#e50914",
  }

  // UseState
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,

    })
  }

  const handleChange = (info) => {
    
    setValue(
      info.target.getAttribute('name'),
      info.target.value
    )
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setCategorias([...categorias, values])
    setValues(valoresIniciais)
    console.log(categorias)
  }

  useEffect(() => {
    const URL = "https://jhon-flix-db.onrender.com/categorias"
    
    fetch(URL).then( async (res)=> {
      const resposta = await res.json()
      console.log(resposta)
      setCategorias([
        ...resposta,
      ])
    })


  },[])

  return (
    <Main>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        
        <FormField
          value={values.nome}
          onChange={handleChange}
          type="text"
          name="nome"
          label="Nome da categoria"
        />
        <FormField
          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
          label="Descrição"
        />
        <FormField
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
          label="Cor"
        />
        
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria}${index}`}>
              <p>{categoria.titulo}</p>
              {/* <p>{categoria.descricao}</p> */}
            </li>
          )

        })}
      </ul>

      <Link to="/">
        Voltar para a Home
      </Link>
    </Main>
  )
}

export default CadastroCategoria