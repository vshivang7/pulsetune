import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import localStrategy from "passport-local";
import cookieParser from "cookie-parser";

import { connectDB } from "./connectDB.js";
import User from './Models/userSchema.js';
import playlistRoute from "./Routes/playlist.js";
import homeRoutes from "./Routes/authRoutes.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
const port = 8080;

const sessionOptions = {
  secret: "SUPERSECRETCODE",
  resave: false,
  saveUninitialized: false,
};

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};

// Middlewares
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(session(sessionOptions));

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use("/playlist", playlistRoute);
app.use("/", homeRoutes);

app.use(errorMiddleware);

// DB + Server Start
connectDB()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
