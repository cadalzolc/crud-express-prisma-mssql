## Node.JS Api with Microsft SQL Server

###### This is a node.js project that simply describe how to use [express.js](https://expressjs.com/) and connect Microsoft SQL Database.
###### Using two kind of sql node packages [node-mssql](https://www.npmjs.com/package/mssql) for sql authentication & [msnodesqlv8](https://www.npmjs.com/package/msnodesqlv8) for windows authentication.
  
* list node packages used in project.
  * express (npm install --save express)
  * body-parser (npm install --save body-parser)
  * mssql (npm install --save mssql)
  * msnodesqlv8 (npm install --save msnodesqlv8)
  
## Folder Structure
  - node_modules
  - sql _(Sample table schema)_
  - src
    - api
      - default.js
      - doctor.js
    - config
      - mssql_sqlauth.js
      - mssql_winauth.js
    - lib
      - server.js
    - routes
      - main.js
  - package-lock.json
  - package.json
  
## Switching to SQL Authenthication & Windows
###### In your api folder. Change the import reference of your controller file.

```javascript
//const { poolPromise } = require('../config/mssql_sqlauth');
const { poolPromise } = require('../config/mssql_winauth');
```javascript

