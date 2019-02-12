const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next) => {
    next();
});

app.get('/', (req,res) => {
    //res.send('<h1>Hello Express!</h1>');
    // res.send({
    //     name: 'somwrita',
    //     like : ['cooking','icecream']
    // });

    res.render('home.hbs',{
        title : 'Home Page',
        welcomemessage : 'Welcome To Our Website',
        copyright: 'Copyright @' + new Date().getFullYear()
    });
});

app.get('/about', (req,res) => {
  //  res.send('<h1>about page</h1>');
  res.render('about.hbs',{
      title : 'About Page',
      copyright: 'Copyright @' + new Date().getFullYear()
  });
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage : 'Unable to handle request'
    });
});


app.listen(3000, () => {
    console.log('server is up on port 3000');
});