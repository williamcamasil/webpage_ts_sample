import { useEffect, useState } from 'react';
import canditadesMock from '../../../mock/candidates.json';

type CanditadesApproved = {
  nome: string;
  idade: number;
};

type CanditadesDisapproved = {
  nome: string;
  idade: number;
};

const MockList = () => {
  const [canditadeApproved, setCanditadeApproved] =
    useState<CanditadesApproved[]>();
  const [canditadeDisapproved, setCanditadeDisapproved] =
    useState<CanditadesDisapproved[]>();

  useEffect(() => {
    // Simulando dados vindo de uma API e sendo inseridos no useState
    setCanditadeApproved(canditadesMock.aprovados);
    setCanditadeDisapproved(canditadesMock.desaprovados);
  }, []);

  return (
    <>
      <h1>Lista de Candidatos</h1>
      <div className="list-approved">
        <p>Aprovados</p>

        <table>
          <thead>
            <th>Nome</th>
            <th>Idade</th>
          </thead>

          {canditadeApproved?.map(c => {
            return (
              // TODO: passar por props e permitir selecionar 1 para trazer mais informacoes em outra pagina
              //key nao e o certo
              <tbody key={c.nome}>
                <td>{c.nome}</td>
                <td>{c.idade}</td>
              </tbody>
            );
          })}
        </table>
      </div>

      <div className="list-disapproved">
        <p>Reprovados</p>

        <table>
          <thead>
            <th>Nome</th>
            <th>Idade</th>
          </thead>

          {canditadeDisapproved?.map(c => {
            return (
              // TODO: passar por props e permitir selecionar 1 para trazer mais informacoes em outra pagina
              //key nao e o certo
              <tbody key={c.nome}>
                <td>{c.nome}</td>
                <td>{c.idade}</td>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default MockList;
