const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(routes);

app.listen(PORT, () => console.log('ok'));
