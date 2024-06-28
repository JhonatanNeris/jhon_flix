import React, { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

//Styled components
import styled from 'styled-components';

//Components
import FormField from '../../components/FormFiled';
import Button from '../../components/Button';

//Hooks
import useForm from '../../hooks/useForm';

//Videos
import videosRepository from '../../repositories/videos'
import categoriesRepository from '../../repositories/categories'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const valoresIniciais = {
  titulo: "",
  url: "",
  categoria: "",
}

const CadastroVideo = () => {

  //Redirecionar página
  const navigate = useNavigate();  
  
  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  
  const valoresIniciais = {
    titulo: "",
    url: "",
    categoria: "",
  }

  useEffect(()=>{
    categoriesRepository
      .getAll()
      .then((categories) => {
        setCategorias(categories)

      })

  },[])

  console.log(categorias)

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  console.log("adsadasdas",categoryTitles)


  const handleSubmit = (e) => {
    e.preventDefault()

    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === values.categoria;
    })

    console.log(categoriaEscolhida)

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    }).then(() => {
      console.log('Cadastro de vídeo com sucesso!')
      navigate("/")

    })

  }


  return (
    <Main>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          value={values.titulo}
          onChange={handleChange}
          // type="text"
          name="titulo"
          label="Título do vídeo"
        />
        <FormField
          value={values.url}
          onChange={handleChange}
          // type="text"
          name="url"
          label="URL"
        />
        <FormField
          value={values.categoria}
          onChange={handleChange}
          name="categoria"
          label="Categoria"
          suggestions={categoryTitles}
        />

        <Button type='submit'>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Nova Categoria
      </Link>
    </Main>
  )
}

export default CadastroVideo