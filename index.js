const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const app = express();
const port = 3001;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use('/user', userRoute);
app.use('/auth', authRoute);

app.use(express.static('public'));

// Setting for package Pug template engine
app.set('view engine', 'pug');
app.set('views', './views');

/** ********************************** GET RQ ****************************************** */
// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/user', function (req, res) {
//     res.send('Chao tat ca, toi dang hoc NODE + EXPRESS!!');
// });
// Call route test
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});
// app.get('/delete/:id', function (req, res) {
//     let id = req.params.id;
//     // const user = db.get('users').find({id:id}).value();
//     db.get('users').remove({id:id}).write();
//     res.render('users/index', {
//         users: db.get('users').value()
//     });
// });
// app.get('/edit/:id', function (req, res) {    
//     res.render('users/edit', {
//         user: db.get('users').find({id:req.params.id}).value()
//     });
// });
// app.post('/edit/:id', function (req, res) {
//     let id = req.params.id;    
//     db.get('users').find({id:id}).assign({name:req.body.name}).write();
//     res.render('users/index', {
//         users: db.get('users').value()
//     });
// });

/** Sussecc App **/
app.listen(port, () => console.log(`Example app listening on port ${port}!`));