import express from "express";
import passport from "passport";
import {
  signup,
  login,
  userExist,
  logout,
  fetchMusicData,
} from "../Controllers/authController.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.get("/", (req, res) => console.log(req.user));
router.post("/signup", signup);
router.post("/login", passport.authenticate("local"), login);
router.get("/userExist", isAuthenticated, userExist);
router.get("/logout", isAuthenticated, logout);
router.get("/fetchData", isAuthenticated, fetchMusicData);

export default router;
