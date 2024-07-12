# JavaScript CRUD API with Express, SQL Server, and Prisma ORM

This project is a CRUD API built using JavaScript, Express, SQL Server, and Prisma ORM. It provides endpoints to create, read, update, and delete data from a SQL Server database.

## Folder Structure
```yaml
  - node_modules
  - prisma
    - schema.prisma
    - seed.js
  - src
    - api
      - default.js
      - userController.js
    - lib
      - config
        - db.js
    - routes
      - main.js
    - server.js
  - .env
  - .gitignore
  - env.sample
  - package-lock.json
  - package.json
  - README.md
```

## API Endpoints
```yaml
- GET /user - Retrieve all users
- GET /user/:id - Get user by id
- POST /user/create - Create a new user
- POST /user/update/:id - Update user by id
- POST /user/delete/:id - Delete user by id
```

## Prerequisites
- Node.js
- npm
- SQL Server

### Create Environment File
```
.env //Please see env.sample and fill it up for your local values
```

### Install Dependencies
```js
npm install
```  

### Setup Prisma
```js
npx prisma init
``` 

### Generate Database
```js
npm run prisma:migrate
``` 

### Seed Database
```js
npm run prisma:seed
``` 

### Running the Server
```
npm run start
```  
