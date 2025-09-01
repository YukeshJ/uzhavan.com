import express from "express";
import { getUsers, createUser, loginUser } from "../controller/user.controller.js";

const router = express.Router();

// GET all users
router.get("/", getUsers);

// POST new user (register)
router.post("/", createUser);

// POST login
router.post("/login", loginUser);

export default router;
