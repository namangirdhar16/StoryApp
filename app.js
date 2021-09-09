const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const exphbs = require("express-handlebars");

// loading dotenv file
dotenv.config({path: "./config/config.env"});

const app = express();

// handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
}
connectDB();

app.listen(PORT, () => {
    console.log(`server is up and running in ${process.env.NODE_ENV} mode on port: ${PORT}`);
})