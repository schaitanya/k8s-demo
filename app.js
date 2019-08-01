const Koa  = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = {
    env: process.env,
    version: 2,
  }
});

app.listen(8000, () => {
  console.log('Listening on port 8000')
});
