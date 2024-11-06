const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
const connectdb = require('./connectDb');
const homeRoutes  = require('./Routes/home.js');
const session = require('express-session')
 
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
app.use("/", homeRoutes);
app.use(session(sessionOptions));

connectdb().then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
})


app.listen(port, () => {
    console.log("Server started......");
})