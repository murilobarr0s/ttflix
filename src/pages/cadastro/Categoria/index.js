import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// ANOTAÇÕES (AULA 3)
// State: Quando vc tem muita coisa em sua aplicação, ele guarda os dados dos estados das ações
// ele tem um valor, e uma função
// target no console.log = é o alvo do que a gente ta mudando...

// O React sempre recebe primeiro a informação que vc está querendo processar, e depois "renderiza" p/ a sua tela!


function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome:'value'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  //

  // http://localhost:8080/categorias
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://ttflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Add Category:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias, // não sobrescrever, aproveitar a lista
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Name"
          type="text"
          name="nome"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          + Add
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        <br />
        {' '}
        <br />
        {' '}
        Go to home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
