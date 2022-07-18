require('dotenv').config();
const express = require('express');
const loginRoute = require('./Routes/loginRoute');
const userRoutes = require('./Routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoutes);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
