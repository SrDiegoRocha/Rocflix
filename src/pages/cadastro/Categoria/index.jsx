import React from 'react';

import Template from '../../../components/TemplateBase';
import { Link } from 'react-router-dom';

function Categoria() {
  return (
    <Template>
        <h1>Cadastro de \Ctegoiras</h1>

        <form>
            <label>
                Category Name:
                <input type="text"/>
            </label>

            <button>Register</button>
        </form>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
    </Template>
  );
}

export default Categoria;