import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import { ButtonForm } from './style.js';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([{
    nome: 'Teste',
    descricao: 'Descrição-Teste',
    cor: '#333',
  }]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#642',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  // function handleChange(e) {
  //   const { getAttribute, value } = e.target;
  //   setValue(
  //     getAttribute('name'),
  //     value
  //   );
  // }

  function handleChange(e) {
    console.log(e.target);
    console.log(e.target.getAttribute('name'));
    console.log(e.target.value);
    setValue(e.target.getAttribute('name'),e.target.value);
  }

  return (

    <PageDefault>
      <h1 style={{
        textShadow: '1px 1px 2px rgb(230,230,230,.7)'
      }}>Cadastro de Categoria: {values.nome}</h1>

      <div style={{
        display: 'flex',
        marginBottom: '2rem'
      }}>
        <form style={{
          width: '60%',
          minWidth: '60%'
        }} onSubmit={function handleSubmit(e){
          e.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);
        }}>

          <FormField
            label="Nome da Categoria: "
            name="nome"
            value={values.nome}
            inputType="input"
            type="text"
            placeholder="Nomeie a nova categoria"
            onChange={handleChange}
          />
          <br/>
          <FormField
            label="Descrição: "
            name="descricao"
            value={values.descricao}
            inputType="textarea"
            placeholder="Descreva sobre sua categoria"
            onChange={handleChange}
          />
          <br/>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <FormField
              label="Cor: "
              name="cor"
              value={values.cor}
              inputType="input"
              type="color"
              placeholder=""
              onChange={handleChange}
            />
            <ButtonForm>
              Cadastrar
            </ButtonForm>
          </div>
        </form>
        <ul style={{
          margin: '0 auto',
          width: '40%'
        }}>
          {categorias.map((categoria, index) => {
            return (
              <li style={{
                marginBottom: '1rem'
              }} key={`${categoria}:${index}`}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{
                    width: '50%',
                    overflow: 'auto',
                    wordWrap: 'break-word',
                    fontWeight: 'bold',
                    color: `${categoria.cor}`
                  }}>{categoria.nome}</span>
                  <span style={{
                    width: '50%',
                    overflow: 'auto',
                    wordWrap: 'break-word',
                    color: `${categoria.cor}`,
                    fontSize: '10px'
                  }}>{categoria.descricao}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <Link to="/">
          Ir para home
         </Link>
      */}
    </PageDefault>
  );
}

export default CadastroCategoria;
