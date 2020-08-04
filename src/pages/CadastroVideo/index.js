import React, { useEffect, useState } from 'react';
import { /* Link, */ useHistory } from 'react-router-dom';
import FormField from '../../components/FormField';
import {
  TitleH1, Container, Form, HrBreak, BottomContainer, ButtonForm,
} from '../CadastroCategoria/style';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import videosRepository from '../../repositories/videos';
import categsRepository from '../../repositories/categorias';
import {
  StyledLink,
  ContainerTop,
  InputContainerDeleteVideo,
  VideoDeleteInput,
  ButtonDeleteVideo,
} from './style';

function CadastroVideo() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoToDelete, setVideoToDelete] = useState('');
  const history = useHistory();
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const videoTitles = videos.map(({ titulo }) => titulo);
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
    videosRepository
      .getAll()
      .then((allVideos) => {
        setVideos(allVideos);
      });
    // eslint-disable-next-line
  }, []);

  function handleDelete(e) {
    e.preventDefault();

    const videoEscolhido = videos.find(
      // eslint-disable-next-line
      (video) => (video.titulo === videoToDelete)
    );
    const { id } = videoEscolhido;

    if (id === 0) {
      return;
    }

    videosRepository.deleteVideo(id)
      .then(() => {
        history.push('/');
      });
  }

  function handleVideoToDelete(e) {
    setVideoToDelete(e.target.value);
  }

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
      <ContainerTop>
        <StyledLink
          to="/cadastro/categoria"
        >
          Cadastrar Categoria
        </StyledLink>
        <InputContainerDeleteVideo>
          <span
            style={{
              position: 'absolute',
              top: 'calc(-1rem - 6px)',
              transform: 'translateY(25%)',
              paddingRight: '5px',
              backgroundColor: 'var(--grayDark)',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            Apagar um Vídeo
          </span>
          <VideoDeleteInput
            type="text"
            id="deleteVideoField"
            value={videoToDelete}
            placeholder="Título do Vídeo"
            onChange={handleVideoToDelete}
            autoComplete="off"
            list="suggestionsFor_deleteVideoField"
          />
          <datalist id="suggestionsFor_deleteVideoField">
            {
              videoTitles.map((suggestion) => (
                <option value={suggestion} key={`suggestionsFor_deleteVideoField__option_${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
          </datalist>
          <ButtonDeleteVideo
            type="button"
            onClick={handleDelete}
          >
            Apagar Vídeo
          </ButtonDeleteVideo>
        </InputContainerDeleteVideo>
      </ContainerTop>
      <TitleH1>
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
