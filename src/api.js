require('dotenv').config();
const express = require('express');
const loginRoute = require('./Routes/loginRoute');
const userRoutes = require('./Routes/userRoutes');
const categoriesRoutes = require('./Routes/categoriesRoutes');
const blogPostRoutes = require('./Routes/blogPostRoutes');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoutes);

app.use('/categories', categoriesRoutes);

app.use('/post', blogPostRoutes);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
