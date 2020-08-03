import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

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

function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
    // method: 'DELETE',
  })
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function edit(objetoModificado, id) {
  return fetch(`${URL_CATEGORIES}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoModificado),
  })
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function deleteCateg(id) {
  return fetch(`${URL_CATEGORIES}/${id}?_embed=videos`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    // body: JSON.stringify(objetoDaCategoria),
    // method: 'DELETE',
  })
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível apagar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  edit,
  deleteCateg,
};
