const express = require('express');
const app = express();
const routes = require('./src/routes');
const path = require('path');
const PORT = 8000;
const expressLayouts = require('express-ejs-layouts');
// const bodyParser = require('body-parser');
// const upload = require('express-fileupload');

// app.use(upload());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );
app.set('views', path.join(__dirname, './src/views'));
app.use(expressLayouts);
app.set('layout', 'layouts/index.ejs');
app.use(express.static(__dirname + '/src/public'));
// app.use((req, res) => {
//   let rawBody = '';
//   if (req.headers['content-type'] === 'application/json') {
//     req.setEncoding('utf8');

//     req.on('data', function (chunk) {
//       req.rawBody += chunk;
//     });
//   }

//   req.on('end', (req, res) => {
//     console.log('body', rawBody);
//     try {
//       req.body = JSON.parse(rawBody);
//     } catch (error) {
//       res.status(422).json({ error: true, message: 'Malformed JSON' });
//     }
//     next();
//   });
// });
app.use(express.json());
app.use(express.urlencoded());
app.get('/test', (_, res) => {
  res.send('<h1>Hello World..!</h1>');
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
