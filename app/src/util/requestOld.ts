import axios from 'axios';
import md5 from 'md5';

export const baseURL = 'http://gateway.marvel.com/v1/public';
export const publicKey = '235783f282b532cd5baa039f755ca573';
export const privateKey = '12f72ff90048d7d130606da7593da09d562cce63';

export const requestMarvel = () => {
  const time = Number(new Date()); //timestamp
  const hash = md5(time + privateKey + publicKey); //Criando um hash

  return axios
    .get(`${baseURL}/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
    .then(res => console.log('Retorno >>> ', res))
    .catch(err => console.log(err));
};
