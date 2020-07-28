import React from 'react';
// import './styles';

import Template from '../../../components/TemplateBase';
import { Link } from 'react-router-dom';

function Video() {
  return (
    <Template>
        <h1>Cadastro de video</h1>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
    </Template>
  );
}

export default Video;