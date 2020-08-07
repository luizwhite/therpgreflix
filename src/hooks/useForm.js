import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import categsRepository from '../repositories/categorias';

function useForm(valoresIniciais) {
  const errorConditions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '@', '#', '$', '%', '!', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', '.', ',', '|'];
  const [categorias, setCategorias] = useState([]);
  const [categoryToEdit, setCategoryToEdit] = useState('');
  const [categoryTitleNewValueToEdit, setCategoryTitleNewValueToEdit] = useState('');
  const [categorySubtitleNewValueToEdit, setCategorySubtitleNewValueToEdit] = useState('');
  const [values, setValues] = useState(valoresIniciais);
  const [errorsMessages, setErrorsMessages] = useState({});
  const [categoryEditErrorsMessages, setCategoryEditErrorsMessages] = useState({});
  const history = useHistory();

  useEffect(() => {
    categsRepository
      .getAll()
      .then((categs) => {
        setCategorias(categs);
      });
    // eslint-disable-next-line
  }, []);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }
  function clearValues() {
    setValues(valoresIniciais);
  }
  function clearErrors() {
    setErrorsMessages(() => ({}));
  }
  function handleCategoryToEdit(e) {
    setCategoryToEdit(e.target.value);
  }
  function handleCategoryTitleNewValueToEdit(e) {
    setCategoryTitleNewValueToEdit(e.target.value);
  }

  function handleCategorySubtitleNewValueToEdit(e) {
    setCategorySubtitleNewValueToEdit(e.target.value);
  }
  function handleCategoryDelete(e) {
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

  function validate(submitValues) {
    const hasSpecialCaracterTitle = errorConditions.some(
      (symbol) => submitValues.titulo.includes(symbol),
    );
    const hasSpecialCaracterSubtitle = errorConditions.some(
      (symbol) => submitValues.descricao.includes(symbol),
    );
    const isTitleLengthInvalid = submitValues.titulo.length < 4;
    const isSubtitleLengthInvalid = submitValues.descricao.length < 4;
    const isTitleInvalid = hasSpecialCaracterTitle || isTitleLengthInvalid;
    const isSubtitleInvalid = hasSpecialCaracterSubtitle || isSubtitleLengthInvalid;
    const invalidTitleMsg = 'Por favor, insira um título válido!';
    const invalidSubtitleMsg = 'Por favor, insira um subtítulo válido!';
    const endMsg = 'Apenas letras e espaços são permitidos, com um mínimo de 4 caracteres.';

    if (isTitleInvalid && isSubtitleInvalid) {
      setErrorsMessages({
        titulo: invalidTitleMsg,
        descricao: invalidSubtitleMsg,
        end: endMsg,
      });
      return false;
    }
    if (isTitleInvalid) {
      setErrorsMessages({
        titulo: invalidTitleMsg,
        end: endMsg,
      });
      return false;
    }
    if (isSubtitleInvalid) {
      setErrorsMessages({
        descricao: invalidSubtitleMsg,
        end: endMsg,
      });
      return false;
    }

    // Validar cor
    if (submitValues.cor.length < 4) {
      setErrorsMessages({
        cor: 'Please insert a valid color!',
        end: endMsg,
      });
      return false;
    }

    setErrorsMessages({});
    return true;
  }

  function validateCategoryEdit(editCategoryValues) {
    const hasSpecialCaracterTitle = errorConditions.some(
      (symbol) => editCategoryValues.titulo.includes(symbol),
    );
    const hasSpecialCaracterSubtitle = errorConditions.some(
      (symbol) => editCategoryValues.descricao.includes(symbol),
    );
    const isTitleLengthInvalid = editCategoryValues.titulo.length < 4;
    const isSubtitleLengthInvalid = editCategoryValues.descricao.length < 4;
    const isTitleInvalid = hasSpecialCaracterTitle || isTitleLengthInvalid;
    const isSubtitleInvalid = hasSpecialCaracterSubtitle || isSubtitleLengthInvalid;
    const invalidTitleMsg = 'Por favor, insira um título válido!';
    const invalidSubtitleMsg = 'Por favor, insira um subtítulo válido!';
    const endMsg = 'Apenas letras e espaços são permitidos, com um mínimo de 4 caracteres.';

    if (isTitleInvalid && isSubtitleInvalid) {
      setCategoryEditErrorsMessages({
        titulo: invalidTitleMsg,
        descricao: invalidSubtitleMsg,
        end: endMsg,
      });
      return false;
    }
    if (isTitleInvalid) {
      setCategoryEditErrorsMessages({
        titulo: invalidTitleMsg,
        end: endMsg,
      });
      return false;
    }
    if (isSubtitleInvalid) {
      setCategoryEditErrorsMessages({
        descricao: invalidSubtitleMsg,
        end: endMsg,
      });
      return false;
    }

    // Validar cor
    // if (editCategoryValues.cor.length < 4) {
    //   setCategoryEditErrorsMessages({
    //     cor: 'Please insert a valid color!',
    //     end: endMsg,
    //   });
    //   return false;
    // }

    setCategoryEditErrorsMessages({});
    return true;
  }

  function handleCategoryTitleEdit(e) {
    e.preventDefault();

    const isValid = validateCategoryEdit({
      titulo: categoryTitleNewValueToEdit,
      descricao: categorySubtitleNewValueToEdit,
    });
    if (!isValid) return;

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

  return {
    values,
    categoryToEdit,
    categoryTitles,
    categoryTitleNewValueToEdit,
    categorySubtitleNewValueToEdit,
    handleCategoryTitleNewValueToEdit,
    handleCategorySubtitleNewValueToEdit,
    handleCategoryTitleEdit,
    validate,
    handleChange,
    handleCategoryDelete,
    handleCategoryToEdit,
    clearValues,
    clearErrors,
    errorsMessages,
    categoryEditErrorsMessages,
  };
}

export default useForm;
