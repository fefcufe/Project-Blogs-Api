require('dotenv').config();
const express = require('express');
const loginRoute = require('./Routes/loginRoute');
const userRoutes = require('./Routes/userRoutes');
const categoriesRoutes = require('./Routes/categoriesRoutes');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoutes);

app.use('/categories', categoriesRoutes);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
