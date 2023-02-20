// this is the first file

const dotEnv = require('dotenv');

dotEnv.config({
  path: './config.env',
});

const app = require('./app');
// console.log(process.env);
// console.log(app.get('env'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('server is running at port' + port);
});
