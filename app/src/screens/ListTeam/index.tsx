import { useCallback, useEffect, useState } from 'react';
import apiMarvel from '../../services/apiMarvel';
import Button from '../../components/Button';
import { Container, CardList, Card } from './styles';

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

  const handMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await apiMarvel.get('characters', {
        params: {
          offset,
        },
      });
      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

  return (
    <Container>
      <h1>Herois</h1>
      <CardList>
        {characters.map(character => {
          return (
            //passando thumbnail para o Styled Components
            <Card key={character.id} thumbnail={character.thumbnail}>
              <div id="img" />
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </Card>
          );
        })}
      </CardList>

      <Button textButton={'Mais'} click={() => handMore} />

      {/* TODO: gerar lista de herois e permitir acessar 1 a 1 em outra janela */}
      {/* <ul>
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
      </ul> */}
    </Container>
  );
};

export default ListTeam;
