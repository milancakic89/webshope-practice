const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoConnect = require('./utils/database').mongoConnect;

//const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const app = express();
// setovanje ejsa
app.set('view engine', 'ejs');
app.set('views', 'views');

//setovanje body parsera

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(shopRoutes);
app.use(adminRoutes);
app.use((req, res, next)=>{
    res.status(404).render('404',{pageTitle: 'Not found', cartCount: 0});
})



mongoConnect((client)=>{
    app.listen(3000);
})
