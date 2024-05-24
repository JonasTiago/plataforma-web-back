
# Projeto de desenvolvimento web - back-end

Uma api de cadastro de Usuário ultilizando node e mongodb como base.

## Apêndice

Link para o front do projeto: 


## Instalação

Clone o projeto:

```bash
  git clone https://github.com/JonasTiago/plataforma-web-back.git
```

Instale my-project com npm:

```bash
  cd plataforma-web-back
  npm install
```

iniciar o my-project (Configure o dotEnv) :

```bash
  npm run dev
```
    
## Documentação da API

#### Retorna todos os usuários

```http
  GET /users
```

#### Cria um usuário

```http
  POST /users
```
##### body:
```body
    {
      "name": string,
      "email": string,
      "password": string
    }
```

#### Retorna um usuário do id enviado

```http
  GET /users/:user_id
```
#### Deletar um usuário do id enviado

```http
  GET /users/:user_id
```

#### Atualizar um usuário do id enviado

```http
  GET /users/:user_id
```
##### body: (? campos não obrigatorios)
```body
    {
      "name": string,
      "email": string,
    }
```

#### Logar com um usuário

```http
  POST /users/sign-in
```
##### body:
```body
    {
      "email": string,
      "password": string
    }
```




## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MONGO_URI`


## Stack utilizada

**Back-end:** Nodejs, Express

**Banco:** MongoDb

