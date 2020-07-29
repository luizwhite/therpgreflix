import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';


/* Desafio */
const PaginaE404 = styled.div`
  font-weight: bold;
  font-size: 5rem;
`;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      {/*}<Route component={ Pagina404 } />{*/}
      <Route component={() => (<PaginaE404>Página 404</PaginaE404>)} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
