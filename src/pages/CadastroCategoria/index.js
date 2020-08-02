import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import {
  TitleH1, Container, Form, HrBreak, BottomContainer, ButtonForm,
} from './style';
import useForm from '../../hooks/useForm';
import categsRepository from '../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    link_extra: {
      text: '',
      url: '',
    },
    cor: '#000000',
  };
  // const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const { handleChange, values, clearValues } = useForm(valoresIniciais);

  // function setValue(chave, valor) {
  //   setValues({
  //     ...values,
  //     [chave]: valor,
  //   });
  //
  //   clearValue();
  // }
  //
  // function handleChange(e) {
  //   setValue(e.target.getAttribute('name'), e.target.value);
  // }
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

    categsRepository.create({
      titulo: values.titulo,
      descricao: values.descricao,
      link_extra: {
        text: values.descricao,
        url: '',
      },
      cor: values.cor,
    })
      .then(() => {
        history.push('/cadastro/categoria');
      });
    setCategorias([...categorias, values]);
    clearValues();
  }

  return (
    <PageDefault>
      <TitleH1>
        Cadastro de Categoria:&nbsp;
        {values.titulo}
      </TitleH1>

      <Container>
        <Form onSubmit={handleSubmit}>
          <FormField
            label="Título da Categoria: "
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
        </TitleH1>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            listStyleType: 'none',
            padding: '1rem 0',
          }}
        >
          {categorias.map((categoria, index) => (
            <li
              style={{
                padding: '.5rem',
                marginBottom: '4px',
                borderRadius: '10px',
                borderBottom: '1px solid',
                backgroundImage: 'linear-gradient(to top, #6c737a 0%, #5a6066 2%, #4d5256 5%, #404447 8%, #2e3033 15%, var(--grayDark) 25%)',
                textShadow: '1px 1px black',
              }}
              key={`${categoria}:${index}`}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
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
                    width: '40%',
                    overflow: 'auto',
                    wordWrap: 'break-word',
                    color: `${categoria.cor}`,
                    fontSize: '12px',
                  }}
                >
                  {categoria.descricao}
                </span>
                <span
                  style={{
                    overflow: 'auto',
                    wordWrap: 'break-word',
                    color: 'white',
                    fontSize: '16px',
                    backgroundColor: `${categoria.cor}`,
                    fontWeight: 'bold',
                    padding: '3px',
                    borderRadius: '6px',
                  }}
                >
                  {categoria.cor}
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
