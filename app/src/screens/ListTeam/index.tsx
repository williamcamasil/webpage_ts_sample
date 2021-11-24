import axios from 'axios';
import md5 from 'md5';
import { useEffect } from 'react';

const ListTeam = () => {
  const baseURL = 'http://gateway.marvel.com/v1/public';
  const publicKey = '235783f282b532cd5baa039f755ca573';
  const privateKey = '12f72ff90048d7d130606da7593da09d562cce63';
  const time = Number(new Date()); //timestamp
  const hash = md5(time + privateKey + publicKey); //Criando um hash

  useEffect(() => {
    axios
      .get(`${baseURL}/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      .then(res => console.log('Retorno >>> ', res))
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Herois</p>
    </div>
  );
};

export default ListTeam;
