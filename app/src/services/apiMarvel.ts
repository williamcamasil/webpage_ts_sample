import axios from 'axios';
import md5 from 'md5';

const publicKey = '235783f282b532cd5baa039f755ca573';
const privateKey = '12f72ff90048d7d130606da7593da09d562cce63';
const ts = Number(new Date()); //timestamp
const hash = md5(ts + privateKey + publicKey); //Criando um hash

const apiMarvel = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default apiMarvel;
