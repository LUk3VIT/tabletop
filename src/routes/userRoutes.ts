import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController()

router.get("/", (req, res) => userController.login(req, res));
router.post("/", (req, res) => userController.create(req, res));
router.put("/:nomeLogin", (req, res) => userController.update(req, res));


export default router;