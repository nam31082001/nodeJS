const express = require('express')
const path = require('path');
const handlebars = require('express-handlebars')
const urlencoded = require('express');
const route=require('./router/index')
const db=require('./config/db')
const methodOverride = require('method-override')
const app = express()
const port = 3000


db.connect();
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine(
  {
    defaultLayout: 'main',
    extname: '.hbs'
  }));
app.set('views', path.join(__dirname, 'resources/views'))

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})