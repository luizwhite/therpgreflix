import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import {
  TitleH1,
  Container,
  Form,
  HrBreak,
  BottomContainer,
  ButtonForm,
  InputContainer,
  CategorySelectInput,
  CategoryTitleEditInput,
  EditCategorySection,
  DivButtons,
  ButtonShowCategoryEdit,
  ButtonModifyCategoryTitle,
  ButtonDeleteCategory,
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
  const [categoryToEdit, setCategoryToEdit] = useState('');
  const [categoryTitleNewValueToEdit, setCategoryTitleNewValueToEdit] = useState('');
  const [categorySubtitleNewValueToEdit, setCategorySubtitleNewValueToEdit] = useState('');
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values, clearValues } = useForm(valoresIniciais);

  useEffect(() => {
    categsRepository
      .getAll()
      .then((categs) => {
        setCategorias(categs);
      });
    // eslint-disable-next-line
  }, []);

  function handleCategoryToEdit(e) {
    setCategoryToEdit(e.target.value);
  }

  function handleCategoryTitleNewValueToEdit(e) {
    setCategoryTitleNewValueToEdit(e.target.value);
  }

  function handleCategorySubtitleNewValueToEdit(e) {
    setCategorySubtitleNewValueToEdit(e.target.value);
  }

  function handleCategoryTitleEdit(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias.find(
      // eslint-disable-next-line
      (categ) => (categ.titulo === categoryToEdit)
    );
    const { id } = categoriaEscolhida;

    categsRepository.edit({
      titulo: categoryTitleNewValueToEdit,
      descricao: categorySubtitleNewValueToEdit,
      link_extra: {
        text: categorySubtitleNewValueToEdit,
      },
    }, id)
      .then(() => {
        history.push('/');
      });
  }

  function handleDelete(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias.find(
      // eslint-disable-next-line
      (categ) => (categ.titulo === categoryToEdit)
    );
    const { id } = categoriaEscolhida;

    if (id === 0) {
      return;
    }

    categsRepository.deleteCateg(id)
      .then(() => {
        history.push('/');
      });
  }

  function showCategoryEdit() {
    document.getElementById('editCategoryShowButton').classList.add('hidden');
    document.getElementById('editCategorySection').classList.add('show-flex');
  }

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
      <ButtonShowCategoryEdit
        id="editCategoryShowButton"
        type="button"
        onClick={showCategoryEdit}
      >
        Editar uma Categoria
      </ButtonShowCategoryEdit>
      <EditCategorySection
        id="editCategorySection"
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            marginBottom: '3rem',
          }}
        >
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
            Edite uma Categoria
          </span>
        </div>
        <InputContainer>
          <span
            style={{
              position: 'absolute',
              transform: 'translateY(-120%)',
              paddingRight: '5px',
              backgroundColor: 'var(--grayDark)',
              fontSize: '16px',
            }}
          >
            Selecione a Categoria
          </span>
          <CategorySelectInput
            type="text"
            id="editCategoryField"
            value={categoryToEdit}
            placeholder="Título da Categoria"
            onChange={handleCategoryToEdit}
            autoComplete="off"
            list="suggestionsFor_editCategoryField"
          />
          <datalist id="suggestionsFor_editCategoryField">
            {
              categoryTitles.map((suggestion) => (
                <option value={suggestion} key={`suggestionsFor_editCategoryField__option_${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
          </datalist>
        </InputContainer>
        <InputContainer>
          <span
            style={{
              position: 'absolute',
              transform: 'translateY(-120%)',
              paddingRight: '5px',
              backgroundColor: 'var(--grayDark)',
              fontSize: '16px',
            }}
          >
            Novo Título da Categoria
          </span>
          <CategoryTitleEditInput
            type="text"
            value={categoryTitleNewValueToEdit}
            placeholder="Novo Título da Categoria"
            onChange={handleCategoryTitleNewValueToEdit}
            autoComplete="off"
          />
        </InputContainer>
        <InputContainer>
          <span
            style={{
              position: 'absolute',
              transform: 'translateY(-120%)',
              paddingRight: '5px',
              backgroundColor: 'var(--grayDark)',
              fontSize: '16px',
            }}
          >
            Novo Subtítulo da Categoria
          </span>
          <CategoryTitleEditInput
            type="text"
            value={categorySubtitleNewValueToEdit}
            placeholder="Novo Título da Categoria"
            onChange={handleCategorySubtitleNewValueToEdit}
            autoComplete="off"
          />
        </InputContainer>
        <DivButtons>
          <ButtonModifyCategoryTitle
            type="button"
            onClick={handleCategoryTitleEdit}
          >
            Modificar Categoria
          </ButtonModifyCategoryTitle>
          <ButtonDeleteCategory
            type="button"
            onClick={handleDelete}
          >
            <span style={{ fontWeight: 'bold' }}>Apague</span>
            &nbsp;a Categoria selecionada
          </ButtonDeleteCategory>
        </DivButtons>
      </EditCategorySection>
      {/*
      </div>
      */}

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
