import { Router } from "express";
import * as BruxoController from './../controllers/bruxosController.js'

const router = Router();

router.get("/", BruxoController.ListarTodos);
router.get("/:id", BruxoController.listarUm)




export default router;