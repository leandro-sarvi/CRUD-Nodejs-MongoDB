import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
const app = express();
//Cross-platform absolute path
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", ".hbs");
//Routes
app.use(indexRoutes);
app.use(express.static(path.join(__dirname, "public")));
export default app;
