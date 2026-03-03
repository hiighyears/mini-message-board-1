const express = require('express');
const app = express();
app.set("view engine", "ejs");
const routes = require('./routes/routes')
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/',routes);
app.listen(3000,'localhost',()=> {
    console.log('server listening on 3000')
});