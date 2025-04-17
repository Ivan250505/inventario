import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js"; 

const  router = Router();

/*get */
router.get("/",categoriaController.getCategorias); /*read*/ 
router.post("/",categoriaController.postCategorias);/*create */
/*ruta que recibe un parametro */
router.get("/:id",categoriaController.getCategory);/*create */
/*Ruta que recibe como parametro el cuerpo del id a actualizar */
router.put("/:id",categoriaController.updateCategorias);/*create */

/*hacemos disponible el router en otda la app */
export default router;