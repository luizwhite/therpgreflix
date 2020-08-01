import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  // return fetch(`${URL_CATEGORIES}?_embed=videos`)
  //   .then(async (respostaDoServidor) => {
  //     if (respostaDoServidor.ok) {
  //       const resposta = await respostaDoServidor.json();
  //       return resposta;
  //     }
  //
  //     throw new Error('Não foi possível pegar os dados :(');
  //   });
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
};
