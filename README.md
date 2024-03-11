# Desafio - Facilita Jurídico [Frontend]

## Descrição do Projeto

A empresa de limpeza residencial busca uma solução eficiente para o gerenciamento de clientes e a otimização de rotas de atendimento. O sistema consiste em um frontend em React que se integra ao backend desenvolvido em Node.js com PostgreSQL como banco de dados.

### Funcionalidades

#### Gerenciamento de Clientes:

- Listagem de clientes com opção de filtro por nome, e-mail ou telefone.
- Cadastro de novos clientes com informações como nome, e-mail, telefone.

#### Otimização de Rotas:

- Utiliza um mapa bidimensional onde cada cliente possui coordenadas X e Y.
- Calcula a rota mais eficiente partindo da empresa (0,0) passando por todos os clientes e retornando à empresa.

### Tecnologias Utilizadas

- Frontend:
  - React
  - React Router
  - Axios
  - React Toast Notifications

## Instalação e Execução

1. Certifique-se de que o backend está em execução e configurado corretamente.
2. Acesse o diretório frontend: `cd facilita-frontend`
3. Instale as dependências:

```bash
yarn add
```
4. Rode:
```bash
yarn dev
```

