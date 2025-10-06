import express from "express";
import { createUser, loginUser } from "../controller/user.controller.js";

const router = express.Router();

// Register route
router.post("/register", createUser);

// Login route
router.post("/login", loginUser);

export default router;
