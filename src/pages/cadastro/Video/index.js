import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hocks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg',
    categoria: 'Tribute',
  });

  return (
    <PageDefault>
      <h1>Add Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
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
