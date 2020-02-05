const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const sequelize = require('./utils/database');

const app = express();
// setovanje ejsa
app.set('view engine', 'ejs');
app.set('views', 'views');

//setovanje body parsera

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use(adminRoutes);
app.use((req, res, next)=>{
    res.status(404).render('404',{pageTitle: 'Not found'});
})
sequelize.sync()
.then(result=>{
    app.listen(3000);
}).catch(error => console.log('error'));

