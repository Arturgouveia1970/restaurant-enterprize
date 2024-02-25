import express from "express";
import MyUserController from "../controllers/MyUserController";
// import { jwtCheck, jwtParse } from "../middleware/auth";
// import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user
router.post("/", MyUserController.createCurrentUser); // Create a new user (log in)


export default router;