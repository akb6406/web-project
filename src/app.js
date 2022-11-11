const express = require("express");
const  path = require("path");
const hbs= require("hbs");
const app= express();
const port =  process.env.PORT || 8000;
const static_path = path.join(__dirname , "../public")  
const tamplate_path = path.join(__dirname , "../tamplates/views")  
const partials_path = path.join(__dirname , "../tamplates/partials")  

app.set('view engine', 'hbs');
app.set('views' , tamplate_path);
hbs.registerPartials(partials_path);

// public static path
app.use(express.static(static_path));


// routing -------
app.get("" , (req, res) => {
    res.render('index');
});
app.get("/about" , (req, res) => {
    res.render('about');
});
app.get("/weather" , (req, res) => {
    res.render('weather');
});
app.get("*" , (req, res) => {
    res.render('404error', {
        errorMsg: 'Oops page not found and go back'
    });
});
app.listen(port, () =>{
    console.log(`listening the port at ${port}`);
});

