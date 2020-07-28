import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';

function CadastroCategoria(){
    return(
      <PageDefault>
        <h1>Add Category</h1>

        <label>
          Name: 
          <input type="text"/>
        </label>
        <button>
          Add
        </button>
        
      <Link to ="/">
        <br/> <br/> Go to home
      </Link>

      </PageDefault>
    )
}

export default CadastroCategoria;