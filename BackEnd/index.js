const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
const connectdb = require('./connectDb');
const homeRoutes  = require('./Routes/home.js');
const session = require('express-session')
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./Models/userSchema.js');
 
const sessionOptions = {
    secret: 'SUPERSECRETCODE',
    resave: false,
    saveUninitialized: true,
}
const corsOptions = {
    origin: 'http://localhost:3000',
    method: 'GET, POST, PUT, DELETE, PATCH',
    credentials: true
}


app.use(cors(corsOptions));
app.use(express.json());
app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", homeRoutes);

connectdb().then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
})


app.listen(port, () => {
    console.log("Server started......");
})