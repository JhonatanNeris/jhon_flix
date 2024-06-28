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

//URL
import config from '../../config'

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
    titulo: "",
    descricao: "",
    cor: "#e50914",
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("valores", values)
    setCategorias([...categorias, values,])
    addCategory(values)
    clearForm()
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : "https://jhon-flix-db.onrender.com/categorias"

    fetch(URL).then(async (res) => {
      const resposta = await res.json()
      console.log(resposta)
      setCategorias([
        ...resposta,
      ])
    })


  }, [])

  useEffect(() => {
    console.log('Categorias updated:', categorias);
  }, [categorias]);

  const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

  function addCategory(categoryObject) {
    return fetch(`${URL_CATEGORIAS}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(categoryObject),
    })
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }

        throw new Error('Não foi possível cadastrar os dados :(');
      });
  }


  return (
    <Main>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          value={values.titulo}
          onChange={handleChange}
          type="text"
          name="titulo"
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

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

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