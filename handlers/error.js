'use strict'

module.exports = app => app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
      console.log('Error: ', e);
      ctx.status = 500;
      ctx.body = 'Internal server error!';
  }
});
