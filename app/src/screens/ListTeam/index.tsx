import { useEffect, useState } from 'react';
import apiMarvel from '../../services/apiMarvel';
import { Container } from './styles';

//base do retorno do console.log, selecionei somente os campos que eu queria
interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const ListTeam = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    apiMarvel
      .get('/characters')
      .then(res => {
        console.log(res.data.data.results);
        setCharacters(res.data.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <h1>Herois</h1>
      {/* TODO: gerar lista de herois e permitir acessar 1 a 1 em outra janela */}
      <ul>
        {characters.map(character => {
          return (
            <li key={character.id}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={`Foto do ${character.name}`}
              />
              <span className="name">{character.name}</span>
              <span className="description">{character.description}</span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ListTeam;
