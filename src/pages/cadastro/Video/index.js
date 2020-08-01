import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hocks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg',
    categoria: 'Tribute',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []); // [] -> para nao mandar várias requisições p/ o servidor

  console.log(categorias);
  return (
    <PageDefault>
      <h1>Add Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

       const categoriaEscolhida = categorias.find((categoria)=>{
          return categoria.titulo === values.categoria;
       });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId : categoriaEscolhida.id,
        })

          .then(() => {
            console.log('cadastrou com sucesso!');
            history.push('/');
          });

        history.push('/'); // empurrar a url da página inicial, ao cadastrar um novo vídeo
      }}
      >
        <FormField
          label="Title"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Category"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          + Add
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        <br />
        Add Category
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
