import React, { useState, useEffect } from 'react'

//Styled components
import styled from 'styled-components';

//React Router Dom
import { Link, json } from 'react-router-dom';

//Components
import FormField from '../../components/FormFiled';
import Button from '../../components/Button';

//Hooks
import useForm from '../../hooks/useForm';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const CadastroCategoria = () => {

  // UseState
  const [categorias, setCategorias] = useState([])

  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#e50914",
  }  

  const { handleChange, values, clearForm } = useForm(valoresIniciais);


  const handleSubmit = (e) => {
    e.preventDefault()
    setCategorias([...categorias, values])
    clearForm()
    console.log(categorias)
  }

  useEffect(() => {
    const URL = "https://jhon-flix-db.onrender.com/categorias"

    fetch(URL).then(async (res) => {
      const resposta = await res.json()
      console.log(resposta)
      setCategorias([
        ...resposta,
      ])
    })


  }, [])

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

        <Button>
          Cadastrar
        </Button>
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