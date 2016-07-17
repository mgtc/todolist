# Todo List

#### Built HTML

```bash
$ cd server
$ npm install
$ npm start
```

brower ./client/index.html

```
.
├── index.html          // The main container for the client todo list
├── dist                // Webpack output 
│   ├── bundle.js
│   └── bundle.js.map   
│   ├── components      // React components
│   │   ├── App.js      // The main container for the todo list
│   │   ├── TodoAdd.js  // The container for add todo
│   │   ├── TodoItem.js // The container for every todo
│   │   └── TodoMain.js 
└── webpack.config.js   // The configuration for webpack
```
