import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../components/FormField';
import {
  TitleH1, Container, Form, HrBreak, BottomContainer, ButtonForm,
} from '../CadastroCategoria/style';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import videosRepository from '../../repositories/videos';
import categsRepository from '../../repositories/categorias';

function CadastroVideo() {
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    id: '',
    categoriaId: '',
    titulo: 'Novo Vídeo',
    url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
    categoria: 'MMORPG',
  });

  useEffect(() => {
    categsRepository
      .getAll()
      .then((categs) => {
        setCategorias(categs);
      });
    // eslint-disable-next-line
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias.find(
      // eslint-disable-next-line
      (categoria) => (categoria.titulo === values.categoria)
    );

    videosRepository.create({
      categoriaId: categoriaEscolhida.id,
      titulo: values.titulo,
      url: values.url,
    })
      .then(() => {
        history.push('/');
      });
    // setCategorias([...categorias, values]);
    // clearValues();
  }

  return (
    <PageDefault>
      <Link to="/cadastro/categoria" style={{
        textDecoration: 'none',
        padding: '1rem',
        border: '1px solid var(--primary)',
        borderRadius: '4px',
      }}>
        Cadastrar Categoria
      </Link>
      <TitleH1 style={{
        marginTop: '4rem',
      }}>
        Cadastro de Vídeo:&nbsp;
        {values.titulo}
      </TitleH1>

      <Container>
        <Form onSubmit={handleSubmit}>
          <FormField
            label="Título do Vídeo: "
            name="titulo"
            value={values.titulo}
            type="text"
            placeholder="Nomeie seu novo vídeo"
            onChange={handleChange}
          />
          <FormField
            label="URL: "
            name="url"
            value={values.url}
            type="text"
            placeholder="Digite a URL do vídeo"
            onChange={handleChange}
          />
          <FormField
            label="Categoria: "
            name="categoria"
            value={values.categoria}
            type="text"
            placeholder="Qual é a categoria do vídeo?"
            onChange={handleChange}
            suggestions={categoryTitles}
          />
          {/*
          <br />
          <FormField
            label="Descrição: "
            name="descricao"
            type="textarea"
            value={values.descricao}
            placeholder="Descreva sobre sua categoria"
            onChange={handleChange}
          />
          */}
          <br />
          <br />
          <BottomContainer style={{ justifyContent: 'flex-end' }}>
            <ButtonForm>Cadastrar Vídeo</ButtonForm>
          </BottomContainer>
          <HrBreak />
        </Form>
      </Container>
    </PageDefault>
  );
}

export default CadastroVideo;
