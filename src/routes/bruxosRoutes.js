import { Router } from "express";
import * as BruxoController from './../controllers/bruxosController.js'

const router = Router();

router.get("/", BruxoController.ListarTodos);




export default router;