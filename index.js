require('dotenv').config();

const Koa = require('koa');
const app = new Koa();
const port = process.env.PORT || 3000;

app.use(require('koa-static')(__dirname + '/static'));

app.listen(port);

console.log("Server started on " + port);