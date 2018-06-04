const Koa = require('koa');
const views = require('koa-views');

const app = new Koa();

app.use(views(__dirname, {
  map: {
    html: 'ejs',
  },
}));

app.use(ctx =>
  ctx.render('./index.html', {
    title: 'Your Name',
  }));

app.listen(8080);
