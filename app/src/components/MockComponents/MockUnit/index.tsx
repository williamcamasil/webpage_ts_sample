import { useEffect, useState } from 'react';
import personMock from '../../../mock/pessoa.json';

type Pessoa = {
  nome: string;
  idade: number;
};

const MockUnit = () => {
  const [person, setPerson] = useState<Pessoa>();

  useEffect(() => {
    setPerson(personMock);
  }, []);

  return (
    <>
      <hr />
      <h1>Pessoa</h1>
      <p>{person?.nome}</p>
      <p>{person?.idade}</p>
    </>
  );
};

export default MockUnit;
