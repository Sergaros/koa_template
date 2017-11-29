const Koa = require('koa');
const config = require('config');
const app = new Koa();

// trust proxy
app.proxy = true

//middlewares
require('./handlers/favicon')(app);
require('./handlers/static')(app);
require('./handlers/logger')(app);
require('./handlers/error')(app);
require('./handlers/body_parser')(app);
require('./handlers/session')(app);

// routes
const fs    = require('fs');
const Router = require('koa-router');
const router = new Router();

require('./routes/error')(router);
require('./routes/content')(router);

app.use(router.routes());

// start server
const port = process.env.PORT || config.get('port');

if(require.main === module)
    app.listen(port, () => console.log('Server listening on', port))
else
    module.exports = app;
