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

Antes de iniciar o projeto, é necessário instalar as dependências dele com o comando
```
npm install
```

Para rodar o projeto, é necessário executar o comando
```
docker-compose up -d
```
na raíz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível. Esse comando deve ser executado via terminal dentro do diretório onde está o arquivo **docker-compose.yml**. Após os containers estarem funcionando, você pode realizar as requisições do CRUD através de algum cliente HTTP, como o Insomnia, o Postman, o HTTPie ou até mesmo extensões como o Thunder Client, do VS Code.

O projeto trata-se de um desafio para consolidar o aprendizado inicial de TypeScript e construir uma API utilizando o conceito de camadas MSC dentro do MySQL. Nesse projeto utilizei queries no MySQL, TypeScript e JWT para geração de tokens de login e validação de usuário, conferindo maior segurança nas transações da API.

Também utilizei o conceito de middlewares para validação das requisições; ao tentar submeter uma requisição com dados inválidos ou qualquer informação que possa gerar um erro, essa submissão é levada até o middleware que retorna um sinal de erro para o usuário, informando-o o tipo de erro para que ele corrija e realize a requisição novamente.

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
