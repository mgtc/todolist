## Todo List

FrontEnd: React,Webpack

BackEnd: NodeJS,Express,Mysql 

## How To Start

#### RESTful API Server

import .sql to mysql

```bash
$ mysqladmin -u[mysql_user] -p[mysql_password] create todo
$ mysql -u[mysql_user] -p[mysql_password] todo < ./server/config/todo_list.sql
```


Run Server

```bash
$ cd server
$ npm install
$ npm start
```

#### Build HTML

```bash
$ cd client
$ npm install
$ npm start
```

browser ./client/index.html

#### RESTful API Context

- GET /todo  
[get all todos]

- POST /todo 
[create new todo]

- PUT /todo
[update todo status]

- DELETE /todo/:id/
[delete todo]



