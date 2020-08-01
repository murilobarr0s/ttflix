import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;
function create(objdoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers:{
        'Content-type': 'application/json',
    },
    body: JSON.stringify(objdoVideo)
  })
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  create,
};

//POST = VAI ENVIAR OS VIDEOS PARA O SERVIDOR (DADOS)