Projeto API de Blogs!

  Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog. 

  O desenvolvimento da aplicação foi feito utilizando `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Foram desenvolvidos diferentes endpoints conectados ao banco de dados seguindo os princípios do REST;

  2. Foi desenvolvido um endpoint para login no qual o usuário insere um email e senha para geração de um token JWT que foi utilizado para autenticação da pessoa usuária para acesso a diferentes endpoints;

  3. Foram exploradas diferentes relações entre as entidades do banco de dados por meio de associations.



  - ✨ **OBS**:  Arquivos de configuração do ambiente de desenvolvimento do projeto foram feitos pela equipe da Trybe. A configuração das variáveis de ambiente são autorais. 


# Requisitos Obrigatórios

## 1 - Crie migrations para as entidades Users, Categories, BlogPosts, PostCategories

## 2 - Crie o modelo 'User' em 'src/database/models/user.js' com as propriedades corretas

## 3 - Sua aplicação deve ter o endpoint POST `/login`

## 4 - Sua aplicação deve ter o endpoint POST `/user`

## 5 - Sua aplicação deve ter o endpoint GET `/user`

## 6 - Sua aplicação deve ter o endpoint GET `/user/:id`

## 7 - Crie o modelo 'Category' em 'src/database/models/category.js' com as propriedades corretas

## 8 - Sua aplicação deve ter o endpoint POST `/categories`

## 9 - Sua aplicação deve ter o endpoint GET `/categories`

## 10 - Crie o modelo 'BlogPost' em 'src/database/models/blogPost.js' com as propriedades e associações corretas

## 11 - Crie o modelo 'PostCategory' em 'src/database/models/postCategory.js' com as propriedades e associações corretas

## 12 - Sua aplicação deve ter o endpoint POST `/post`

## 13 - Sua aplicação deve ter o endpoint GET `/post`

## 14 - Sua aplicação deve ter o endpoint GET `/post/:id`

## 15 - Sua aplicação deve ter o endpoint PUT `/post/:id`

## 16 - Sua aplicação deve ter o endpoint DELETE `/post/:id`

## 17 - Sua aplicação deve ter o endpoint DELETE `/user/me`

## 18 - Sua aplicação deve ter o endpoint GET `/post/search?q=:searchTerm`


