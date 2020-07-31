import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import {
  TitleH1, Container, Form, HrBreak, BottomContainer, ButtonForm,
} from './style';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([
    {
      titulo: 'TESTE',
      descricao: 'Descrição-Teste',
      link_extra: {
        text: 'Descrição-Teste',
        url: '',
      },
      cor: '#333',
    },
  ]);
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    link_extra: {
      text: '',
      url: '',
    },
    cor: '#642',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  // function handleChange(e) {
  //   const { getAttribute, value } = e.target;
  //   setValue(
  //     getAttribute('name'),
  //     value
  //   );
  // }

  function handleChange(e) {
    /*
    console.log(e.target);
    console.log(e.target.getAttribute('name'));
    console.log(e.target.value);
    */
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://therpgreflix.herokuapp.com/categorias';
    // setCategorias([...categorias]);
    fetch(URL)
      .then((response) => response.json())
      .then((responseParsed) => {
        setCategorias([...categorias, ...responseParsed]);
      });
  }, []);

  // setTimeout(() => {
  //     {
  //       id: 1,
  //       titulo: 'Front-End',
  //       descricao: 'Uma categoria bacanadussa',
  //       cor: '#6bd1ff',
  //     },
  // }, 3 * 1000);

  return (
    <PageDefault>
      <TitleH1>
        Cadastro de Categoria:&nbsp;
        {values.titulo}
      </TitleH1>

      <Container>
        <Form onSubmit={handleSubmit}>
          <FormField
            label="Nome da Categoria: "
            name="titulo"
            value={values.titulo}
            type="text"
            placeholder="Nomeie a nova categoria"
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Descrição: "
            name="descricao"
            type="textarea"
            value={values.descricao}
            placeholder="Descreva sobre sua categoria"
            onChange={handleChange}
          />
          <br />
          <br />
          <BottomContainer>
            <FormField
              label="Cor: "
              name="cor"
              value={values.cor}
              type="color"
              placeholder=""
              onChange={handleChange}
            />
            <ButtonForm>Cadastrar Categoria</ButtonForm>
          </BottomContainer>
          <HrBreak />
        </Form>
        <TitleH1 style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          Categorias Cadastradas:&nbsp;
          {values.titulo}
        </TitleH1>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto',
            width: '80%',
            listStyleType: 'none',
            padding: '1rem',
            borderRadius: '4px',
            backgroundColor: '#484d51',
          }}
        >
          {categorias.map((categoria, index) => (
            <li
              style={{
                width: '100%',
                padding: '.5rem',
                marginBottom: '4px',
                borderRadius: '4px',
                border: '1px solid',
                backgroundColor: '#6c737a',
                textShadow: '1px 1px black',
              }}
              key={`${categoria}:${index}`}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    width: '20%',
                    overflow: 'auto',
                    wordWrap: 'break-word',
                    fontWeight: 'bold',
                    color: `${categoria.cor}`,
                  }}
                >
                  {categoria.titulo}
                </span>
                <span
                  style={{
                    overflow: 'auto',
                    wordWrap: 'break-word',
                    color: `${categoria.cor}`,
                    fontSize: '12px',
                  }}
                >
                  {categoria.descricao}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </PageDefault>
  );
}

export default CadastroCategoria;
