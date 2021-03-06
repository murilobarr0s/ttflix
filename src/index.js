import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import{ BrowserRouter, Switch, Route  } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';


const Pagina404 = () => (<div> <h1> ERROR 404</h1> </div>)

//BrowserRouter -> representa as rotas dos navegadores
//Switch -> suas entradas possíveis

ReactDOM.render(
  <BrowserRouter>  
    <Switch>
      <Route path="/" component={Home} exact />  
      <Route path="/cadastro/video" component={CadastroVideo}/> 
      <Route path="/cadastro/categoria" component={CadastroCategoria}/> 
      <Route component={Pagina404}/>  
    </Switch>   
  </BrowserRouter>,
  document.getElementById('root')
);

