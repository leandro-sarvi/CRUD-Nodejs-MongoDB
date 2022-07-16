import { Router } from "express";
import {
  renderTasks,
  renderAbout,
  renderEditTask,
  addTask,
  editTask,
  deleteTask,
  toggleDone,
} from "../controllers/tasks.controllers";
//Creamos el enrutador
//Ruta inicial
const router = Router();
router.get("/", renderTasks);
router.get("/about", renderAbout);
router.get("/edit/:id", renderEditTask);
router.post("/tasks/add", addTask);
router.post("/edit/:id", editTask);
router.get("/delete/:id", deleteTask);
router.get("/toggleDone/:id", toggleDone);
export default router;
