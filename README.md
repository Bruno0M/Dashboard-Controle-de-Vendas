<h1 align="center" style="font-weight: bold;">Dashboard de Controle de Vendas 💻</h1>

<p align="center">
 <a href="#technologies">Tecnologias</a> • 
 <a href="#started">Vamos Começar!</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#contribute">Como Contribuir?!</a>
</p>

<p align="center">
    <b>Projeto desenvolvido como um protótipo para um possível futuro serviço e também como forma de atender os requisitos como um Projeto de Extensão. </b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

#### Front-End:

- HTML, Css e JavaScript
- Vite
- ChartJs

#### Back-End:

- C#
- ASP.NET 8
- JWT (Json Web Token)
- Fluent Validation
- Entity Framework
- Swagger
- PostgreSQL

#### Devops
- Docker
- Docker Compose

<h2 id="started">🚀 Vamos Começar!</h2>

Here you describe how to run your project locally

<h3>Pré-Requisitos</h3>

Para rodar o projeto, é necessário que tenha:

- Docker
- Node

<h3>Clonando o Projeto</h3>

```bash
git clone https://github.com/Bruno0M/Dashboard-Controle-de-Vendas.git
```

<h3>Rodando o Projeto</h3>

Para rodar nosso FrontEnd, basta seguir o seguinte:
```bash
cd Dashboard-Controle-de-Vendas/DashboardUi/
npm i
npm run dev
```
Com isso, o Front-End estará disponível localmente em `http://localhost:5173`

</br>

E para rodar a Api do Projeto:
```bash
cd Dashboard-Controle-de-Vendas/DashboardAPI/
docker-compose up -d
```
Em seguida, você vai ter a API Rodando em na porta `4652`, e caso queira ver a documentação da API, basta acessar com o Swagger `http://localhost:4652/swagger/index.html`.

A porta `8002` é onde está rodando o banco de dados, e caso queira administrar esse banco, basta acessar o `pgadmin4` em `http://localhost:16543/login`

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
**Auth**
| <kbd>POST /api/Auth/Register</kbd>  Registrar um usuário no sistema [da]
| <kbd>POST /api/Auth/Login</kbd>        Logar o usuário no sistema
**History**
| <kbd>GET /api/History</kbd>     Retorna o histórico de vendas
**Product**
| <kbd>POST /api/Product</kbd>     Cria um novo produto
| <kbd>GET /api/Product</kbd>     Pega todos os produtos do usuario autenticado
| <kbd>DELETE /api/Product</kbd>     Deleta um produto
| <kbd>POST /api/Product/ReportSale</kbd>     Reporta uma venda e cria o histórico dessa venda
**User**
| <kbd>GET /api/User</kbd>     Retorna algumas informações do usuário



<h2 id="contribute">📫 Como Contribuir?!</h2>

Para contribuir para o projeto, siga essas instruções:

1. Faça um Fork do projeto e clone ele.
2. Para implementar uma nova feature, crie uma nova branch seguindo esse padrão: `git checkout -b feature/NAME`
3. Siga o [Conventional Commits Pattern](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)
4. Após feita as alterações, abra um `Pull Request` e aguarde o review! :)

<h3>Artigos que podem ajudar</h3>

[📝 Contribuindo para um projeto](https://docs.github.com/pt/get-started/exploring-projects-on-github/contributing-to-a-project)

[💾 Conventional Commits Pattern](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)