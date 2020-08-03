import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/404';

import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';

ReactDOM.render(
  <>
    <Helmet title="The RPG Reflix" />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} exact />
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
        {/* }<Route component={ Pagina404 } />{ */}
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root'),
);
