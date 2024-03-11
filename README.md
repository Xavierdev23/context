# Contexto React com TypeScript: Ativar/Desativar Estado

Este projeto é um exemplo simples de como criar e usar um contexto no React com TypeScript para controlar o estado de ativação/desativação.

## Objetivo

O objetivo deste aplicativo é demonstrar como criar um contexto no React usando TypeScript para gerenciar o estado de ativação/desativação em um aplicativo.

## Funcionalidades

- Ativar e desativar um estado usando um contexto React.
- Mostrar como encapsular o estado e as funções relacionadas em um contexto para compartilhá-lo entre componentes.

## Como usar

1. Clone este repositório em sua máquina local:

``` https://github.com/Xavierdev23/context.git ```

2. Navegue até o diretório do projeto:
``` cd useContext ```

3. Instale as dependências:
```npm i ``` ou ```npm install ```

4. Inicie o servidor de desenvolvimento:
```npm run dev ```

5. Abra o navegador e vá para [http://localhost:5173](http://localhost:5173) para ver o aplicativo em ação.

## Estrutura do Projeto

O projeto segue uma estrutura de diretórios padrão do React:

- `src/`: Contém todo o código-fonte do aplicativo.
  - `Produto/index.tsx`: Componente React do aplicativo Produto.
  - `contexts/index.tsx`: Definições e lógica relacionadas aos contextos do aplicativo.
  - `App.tsx`: Componente que chama o Produto para renderização.
  - `main.tsx`: Componente principal da aplicação.

## Como criar um contexto

Este aplicativo demonstra como criar um contexto no React usando TypeScript.

1. Defina o tipo de dados para o contexto.
2. Crie um contexto usando `createContext` do React.
3. Crie um provedor de contexto para encapsular os dados e fornecê-los aos componentes filho.
4. Use o provedor de contexto em torno dos componentes que precisam acessar os dados do contexto.
5. Consuma o contexto nos componentes filho usando o hook `useContext`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
