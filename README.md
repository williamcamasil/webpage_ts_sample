# webpage_ts_sample

### Create app

```typescript
npx create-react-app app --template typescript
```



### Comandos ESLint e Prettier [video](https://www.youtube.com/watch?v=duKqKhtZmPA&ab_channel=JorgeAluizio) - NPM

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



**OU**



### YARN

[Eslint](https://eslint.org/docs/user-guide/getting-started), [Prettier](https://prettier.io/docs/en/install.html) e [video](https://www.youtube.com/watch?v=duKqKhtZmPA&ab_channel=JorgeAluizio) de apoio para configuração. 

```
yarn add eslint --dev
yarn run eslint --init

yarn add eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest	
yarn add eslint-plugin-react --dev
yarn add eslint-plugin-react-hooks --dev

yarn add --dev --exact prettier
echo {}> .prettierrc.json

yarn add --dev eslint-plugin-prettier eslint-config-prettier
```



---



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
OU
yarn add -D @types/styled-components
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



##### GlobalStyle

Crie uma pasta style dentro de src e dentro da pasta crie um arquivo global.ts com o seguinte código :

```typescript
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    font-family: 'Marvel', sans-serif;
  }
`;
```

Para usa-lo: (import GlobalStyle)

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

// import Home from './screens/Home';
import ListTeam from './screens/ListTeam';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <ListTeam />
    <GlobalStyle />
  </React.StrictMode>,

  document.getElementById('root'),
);
```

Dessa forma ele será aplicado em toda a aplicação.



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

----

### Declarando Util

##### Declaração 

```typescript
export const sumValues = (num1: number, num2: number) => {
  return num1 + num2;
};

export const multValues = (num1: number, num2: number) => {
  return num1 * num2;
};
```

##### Usando (ExUtil)

````tsx
import { sumValues, multValues } from '../../../util/mathValues';
import { formatPrice } from '../../../util/formatters';

const ExUtil = () => {
  return (
    <div>
      <p>{sumValues(5, 3)}</p>
      <p>{multValues(2, 7)}</p>
      <p>{formatPrice(230.453)}</p>
    </div>
  );
};

export default ExUtil;

````



---

### Rest API ([API Marvel](https://www.youtube.com/watch?v=jlqgqSFIKPU&ab_channel=luizsilva))

```
yarn add axios
yarn add md5
yarn add -D @types/md5
```

##### Como consumir

````tsx
import axios from 'axios';
import md5 from 'md5';
import { useEffect } from 'react';

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
}, []);
````

##### Links usados (**obs:** depois de autenticado no site)

- https://developer.marvel.com/documentation/authorization
- https://developer.marvel.com/docs
- https://developer.marvel.com/account



##### Google Fonts

[font marvel](https://fonts.google.com/specimen/Marvel)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

Copie o codigo e colo em public/index.html dentro do head.

[Aula consumindo API Marvel e renderizando na tela](https://www.youtube.com/watch?v=hyX2BZBbbPc&ab_channel=luizsilva)

- Styled Component
- Estilização global
- Verificando o que api esta trazendo no console log (campos)
- Criando interface com os campos a partir do conteúdo retornado
- Usando google fonts
- Renderizando na tela

---

### Navigation

Essa instalação de dependência possui a dependência em primeiro e depois o types para ser usado no TS

```
yarn add react-router-dom@5.2.0 @types/react-router-dom
```

Tem que instalar o types e a dependencia

Checar a versão na maior parte das vezes isso ocorre por conta da versão atualizada não ter mais a funcionalidade, ex. (na v6 do react-router-dom não tem mais a funcionalidade Switch, eu tive que instalar a v5 para conseguir usar essa funcionalidade)

[Exemplos](https://v5.reactrouter.com/web/guides/quick-start)



-----



### Fazer

- Emitir mensagem de erro quando a api retornar com erro
- Criar estudo separado com autenticação de páginas (forcar somente na autenticação)

