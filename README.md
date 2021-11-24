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

```
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

```
{
  "semi": true,
  "trailingComma":"all",
  "singleQuote":true,
  "printWidth":80,
  "arrowParens":"avoid"
}
```



#### settings.json

```
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```



----

