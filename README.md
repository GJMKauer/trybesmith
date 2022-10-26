# Boas vindas ao repositório do projeto <b>Trybesmith</b>!

Esse projeto foi desenvolvido durante o módulo de Backend na Trybe! #vqv 

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos técnicos necessários para a entrega do desafio.

---

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
- Utilizar Express por meio do TypeScript;
- Construir uma API com algumas funções de CRUD utilizando TypeScript e MYSQL. 
   
---

# CRUD

CRUD é um acrônimo para **C**reate, **R**ead, **U**pdate and **D**elete. Em português seria **Criar**, **Ler**, **Atualizar** e **Deletar** registros. Nesse projeto ainda não trabalhamos diretamente com um banco de dados para realizar estas operações do CRUD, mas utilizamos um arquivo JSON através da manipulação com o módulo fs do Node.js, para consolidar melhor os conhecimentos.

---

# MSC

MSC é um acrônimo para **M**odel, **S**ervices e **C**ontroller. A utilização dessas camadas facilita a manutenção e legibilidade no código, uma vez que cada camada é responsável por apenas uma função. A camada Controller é responsável por retornar as requisições e respostas de nossa API para o usuário, enquanto que a camada Model faz as queries necessárias diretamente ao banco de dados. Já o Service é responsável por fazer a intermediação entre as duas camadas, podendo agir como regulador das regras de negócio da aplicação e lançar erros em caso de algum problema na requisição ou query.

---

# Funcionamento da aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o projeto em seu computador, para iniciá-lo é necessário executar o comando
```
docker-compose up -d && docker exec -it trybesmith bash
```
e na sequência execute esses comandos, um por vez
```
npm install
npm run dev
```

na pasta raíz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível.

Após isso, você pode realizar as requisições de CRUD através de algum cliente HTTP, como o `Insomnia`, o `Postman`, o `HTTPie` ou até mesmo extensões do VSCode como o `Thunder Client` através dos enpoints listados abaixo.

O projeto trata-se de um desafio para consolidar o aprendizado inicial de TypeScript e construir uma API utilizando o conceito de camadas MSC dentro do MySQL. Nesse projeto utilizei queries no MySQL, TypeScript e JWT para geração de tokens de login e validação de usuário, conferindo maior segurança nas transações da API.

Também utilizei o conceito de middlewares para validação das requisições; ao tentar submeter uma requisição com dados inválidos ou qualquer informação que possa gerar um erro, essa submissão é levada até o middleware que retorna um sinal de erro para o usuário, informando-o o tipo de erro para que ele corrija e realize a requisição novamente.

---

## 📚 Documentação (endpoints)

### 🔑 Login
| Método | Funcionalidade           | URL                         |
| ------ | ------------------------ | --------------------------- |
| `POST` | Realiza login no backend | http://localhost:3000/login |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "username": "string",
  "password": "string"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"username" is required</code> caso o campo username não seja informado no body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"password" is required</code> caso o campo password não seja informado no body da requisição;<br>
  - A rota retorna o código <code>401</code>, com a mensagem <code>Username or password invalid</code> caso o username e/ou a senha forem inválidos no body da requisição.
</details>
<br>

### 👨🏻‍🦱 Users

| Método | Funcionalidade                             | URL                         |
| ------ | ------------------------------------------ | --------------------------- |
| `POST` | Adiciona um novo usuário no banco de dados | http://localhost:3000/users |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"username" is required</code> caso o campo username não seja informado no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"username" must be a string</code> caso o campo username não seja uma string no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"username" length must be at least 3 characters long</code> caso o campo username tenha menos de 3 caracteres no body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"classe" is required</code> caso o campo classe não seja informado no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"classe" must be a string</code> caso o campo classe não seja uma string no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"classe" length must be at least 3 characters long</code> caso o campo classe tenha menos de 3 caracteres no body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"level" is required</code> caso o campo level não seja informado no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"level" must be a number</code> caso o campo level não seja um number no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"level" must be greater than or equal to 1</code> caso o campo level inferior a 1 no body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"password" is required</code> caso o campo password não seja informado no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"password" must be a string</code> caso o campo password não seja uma string no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"password" length must be at least 8 characters long</code> caso o campo password tenha menos de 8 caracteres no body da requisição.<br>
</details>
<br>

### 🛒 Products
| Método | Funcionalidade                            | URL                            |
| ------ | ----------------------------------------- | ------------------------------ |
| `GET`  | Retorna uma lista de produtos cadastrados | http://localhost:3000/products |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
  {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
    "orderId": null
  },
  {
    "id": 2,
    "name": "Escudo do Herói",
    "amount": "100 diamond",
    "orderId": 1
  }
]
```

</details>
<br>
<br>

| Método | Funcionalidade                           | URL                            |
| ------ | ---------------------------------------- | ------------------------------ |
| `POST` | Insere um novo produto no banco de dados | http://localhost:3000/products |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "name": "Espada longa",
  "amount": "30 peças de ouro"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "id": 1,
  "name": "Poção de cura",
  "amount": "20 gold",
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"name" is required</code> caso o campo name não seja informado no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"name" must be a string</code> caso o campo name não seja uma string no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"name" length must be at least 3 characters long</code> caso o campo name tenha menos de 3 caracteres no body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"amount" is required</code> caso o campo amount não seja informado no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"amount" must be a string</code> caso o campo amount não seja uma string no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"amount" length must be at least 3 characters long</code> caso o campo amount tenha menos de 3 caracteres no body da requisição.<br>
</details>
<br>

### 🛒 Orders
| Método | Funcionalidade                          | URL                          |
| ------ | --------------------------------------- | ---------------------------- |
| `GET`  | Retorna uma lista de pedidos realizados | http://localhost:3000/orders |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
  {
    "id": 1,
    "userId": 2,
    "productsIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 2,
    "productsIds": [3, 4]
  }
]
```

</details>
<br>
<br>

| Método | Funcionalidade                          | URL                          |
| ------ | --------------------------------------- | ---------------------------- |
| `POST` | Insere um novo pedido no banco de dados | http://localhost:3000/orders |

Essa requisição deve, obrigatoriamente, ter um `token de autenticação` nos headers, no campo `authorization` (obtido após realizar o login).

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "productsIds": [1, 2]
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "userId": 1,
  "productsIds": [1, 2]
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>401</code>, com a mensagem <code>Token not found</code> caso o campo authorization nos headers não contenha nenhuma informação de token;<br>
  - A rota retorna o código <code>401</code>, com a mensagem <code>Invalid token</code> caso o campo authorization nos headers contenha um token inválido;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"productsIds" is required</code> caso o campo productsIds não seja informado no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"productsIds" must be an array</code> caso o campo productsIds não seja um array no body da requisição;<br>
  - A rota retorna o código <code>422</code>, com a mensagem <code>"productsIds" must include only numbers</code> caso algum item do campo productsIds não seja um número no body da requisição (ou se o campo for um array vazio);<br>
</details>
<br>

---

# Histórico de Commits

É possível verificar todo o histórico de commits do projeto, de modo a visualizar passo-a-passo como foi desenvolvido o meu raciocínio até a finalização do projeto.

---

# Requisitos técnicos do desafio:

- ✅ 1. Crie um endpoint para o cadastro de produtos.

- ✅ 2. Crie um endpoint para a listagem de produtos.

- ✅ 3. Crie um endpoint para o cadastro de pessoas usuárias.

- ✅ 4. Crie um endpoint para listar todos os pedidos.

# REQUISITOS BÔNUS

- ✅ 5. Crie um endpoint para o login de pessoas usuárias.

- ✅ 6. Crie as validações dos produtos.

- ✅ 7. Crie as validações para as pessoas usuárias.

- ✅ 8. Crie um endpoint para o cadastro de um pedido.
