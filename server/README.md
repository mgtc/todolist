## REST API Server

```
.
├── index.js            // The entry point for running the project application
├── config
│   ├── connection.js   // The configuration for mysql
│   └── todo_list.sql   // Mysql table structure
├── models
│   └── todo.js         // Represents data and handles logic for interacting with mysql     
└── routes
    └── api.js          // Handles all routes
```
    

run server

```bash
$ cd server
$ npm install
$ npm start
```