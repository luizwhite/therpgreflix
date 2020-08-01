import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);

    // clearValue();
  }
  function clearValues() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearValues,
  };
}

export default useForm;
