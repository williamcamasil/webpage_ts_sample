# webpage_ts_sample

Page with helpful content

### Create app

```typescript
npx create-react-app app --template typescript
```



### Comandos ESLint e Prettier [video](https://www.youtube.com/watch?v=duKqKhtZmPA&ab_channel=JorgeAluizio)

Antes foi utilizados o editorconfig

```
npm install -D eslint
npx eslint --init
npm install -D eslint-plugin-react

npm install -D eslint-plugin-react-hooks

npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json

npm install -D eslint-plugin-prettier eslint-config-prettier
```

Além de instalações foi feito configurações durantes as instalações e por fim criamos uma pasta .vscode/settings.json para atribuir as configurações finais.

#### .editorconfig

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = crlf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```



#### .eslintignore

```
node_modules
dist
build
```



#### .eslintrc.json

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
}
```



#### .prettierignore

```
node_modules
build
dist
```



#### .prettierrc.json

```json
{
  "semi": true,
  "trailingComma":"all",
  "singleQuote":true,
  "printWidth":80,
  "arrowParens":"avoid"
}
```



#### settings.json

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```



----

### [Styled Components](https://styled-components.com/docs/basics)

```
npm install --save styled-components
OU
yarn add styled-components

npm i --save-dev @types/styled-components
```

Exemplo: 

##### styles.ts

```typescript
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export { ButtonStyled };
```

##### index.tsx (Button)

```tsx
import { ButtonStyled } from './style';

const Button = () => {
  return (
    <div>
      <ButtonStyled>
        <p>Button Component</p>
      </ButtonStyled>
    </div>
  );
};

export default Button;
```

OBS: Fazer exemplos mais avançados usando condições, estado global e passagem de pros

----

### Mock

##### JSON sample

```json
{
  "aprovados": [
    {
      "nome": "Fernanda Paulina de Souza",
      "idade": 38,
      "trabalho": "Tech Lead",
      "renda": 5920.21,
      "casado": true,
      "veiculo": [
        {
          "tipo": "carro",
          "modelo": "chefrolet",
          "ano": 2004
        },

        {
          "tipo": "moto",
          "modelo": "honda",
          "ano": 2021
        }
      ]
    },

    {
      "nome": "William Camargo",
      "idade": 27,
      "trabalho": "Programador",
      "renda": 350.40,
      "casado": false,
      "veiculo": [
        {
          "tipo": "moto",
          "modelo": "yamaha",
          "ano": 2017
        }
      ]
    }
  ],

  "desaprovados": [
    {
      "nome": "Ruan Miguel",
      "idade": 23,
      "trabalho": "Eletricista",
      "renda": 1890.33,
      "casado": true,
      "veiculo": [
        {
          "tipo": "carro",
          "modelo": "honda",
          "ano": 2019
        }
      ]
    },

    {
      "nome": "Larissa Fonseca",
      "idade": 33,
      "trabalho": "Coordenadora de Gestão",
      "renda": 3450.89,
      "casado": false,
      "veiculo": []
    }
  ]
}
```

##### Exemplo de uso

````tsx
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

````



---

### Método Button e Props

##### Ivocando (handleClick / button / Button)

```tsx
import Button from '../../components/Button';
import MockList from '../../components/MockComponents/MockList';
import MockUnit from '../../components/MockComponents/MockUnit';

const Home = () => {
  const handleClick = () => {
    console.log('Clicou aqui');
  };

  return (
    <div>
      <p>Home Screen</p>

      <MockList />
      <MockUnit />

      {/* <button onClick={handleClick}>Clicou!</button> */}
      <Button textButton={'Clique aqui'} click={() => handleClick} />
    </div>
  );
};

export default Home;
```

##### Componente Button (Props / Button / onClick)

```tsx
import { ButtonStyled } from './styles';

type Props = {
  textButton: string;
  click: Function;
};

const Button = ({ textButton, click }: Props) => {
  return (
    <div>
      <ButtonStyled onClick={click()}>
        <p>{textButton}</p>
      </ButtonStyled>
    </div>
  );
};

export default Button;

```





