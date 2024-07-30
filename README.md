## 1 Comando para instalar as dependencias

npm install express nodemon cors mysql2 dotenv sequelize sequelize-cli jsonwebtoken bcryptjs

## 2 Comando para instalar a instancia do sequelize

npx sequelize-cli init

## 3 Comando para criar o banco de dados

npx sequelize-cli db:create

# 4 comando para criar os models e migrations

npx sequelize-cli model:generate --name Usuario --attributes nome:string,email:string,senha:string
npx sequelize-cli model:generate --name Livro --attributes titulo:string,autor:string
npx sequelize-cli model:generate --name Emprestimo --attributes dataEmprestimo:date,dataDevolucao:date,UsuarioId:integer,LivroId:integer


## 5 Realizar as alterações para dizer quem é relacionado com quem no migration

## 6 Logo após isso vamos rodar o comando para inserir a migrate no banco de dados

npx sequelize-cli db:migrate


## 7 Ajustar os relacionamentos nas models pois elas serão usadas nas controllers