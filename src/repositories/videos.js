import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function getAll() {
  return fetch(`${URL_VIDEOS}`)
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
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

function deleteVideo(id) {
  return fetch(`${URL_VIDEOS}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    // body: JSON.stringify(objetoDoVideo),
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
  getAll,
  create,
  deleteVideo,
};
