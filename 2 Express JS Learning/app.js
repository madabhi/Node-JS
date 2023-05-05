const express = require('express');
const bodyparser = require('body-parser');
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views'); 


app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})



app.listen(3000);