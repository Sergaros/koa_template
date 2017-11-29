## KOA2 Tempalte application
This app cam be used as start point of any koa2 application.

Don't forget install all needed dependencies before run/test application:

```
 project_folder> npm install
```
***
#### Start application:

```
 project_folder> npm start
```
***
#### Start application tests:

```
 project_folder> npm test
```
***
#### Project Structure:
```
    [project_folder]
                    |___[client]    //folder contains all client
                    |___[config]    //this folder used by config package
                    |          |___default.json     //default properties configuration
                    |          |___test.json        //test properties configuration
                    |___[handlers]  //middlewares modules
                    |            |___body_parser.js //koa-bodyparser - www.npmjs.com/package/koa-bodyparser
                    |            |___error.js       //koa error handler
                    |            |___favicon.js     //koa-favicon www.npmjs.com/package/koa-favicon
                    |            |___logger.js      //koa-logger www.npmjs.com/package/koa-logger
                    |            |___session.js     //koa-session www.npmjs.com/package/koa-session
                    |            |___static.js      //koa-static www.npmjs.com/package/koa-static
                    |___[routes]    //routes modules
                    |___[tests]     //bdd tests files
                    |___server.js   //main app file
```
***
#### Main points

* Create koa app:
    ```javascript
    const Koa = require('koa');
    const app = new Koa();
    ```
* Use middlewares:
    Middleware module structure:
    ```javascript
    'use strict'
    ...
    module.exports = app => {app.use(...)};
    ```
    So middlewares connect looks like:
    ```javascript
    require('./handlers/favicon')(app);
    require('./handlers/static')(app);
    require('./handlers/logger')(app);
    require('./handlers/error')(app);
    require('./handlers/body_parser')(app);
    require('./handlers/session')(app);
    ```
* Use routes:
    Create router:
    ```javascript
    const Router = require('koa-router');
    const router = new Router();
    ```

    Routes modules structure:
    ```javascript     
    module.exports = (router)=>{
        router.get('/api/path', async function(ctx) {
            ...
            ctx.body = result;
        })
        .post('/api/path', async function(ctx) {
            ...
            ctx.body = content;
        })
        ...
    })
    ```
    Routes Connect:
    ```javascript
    require('./routes/error')(router);
    require('./routes/content')(router);
    ```
