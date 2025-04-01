/*Ïmportamos al framework exprres*/
import express from "express";
import categoriaRouter from "./routes/categorias.routes.js"

const app=express();
/*asignamos a pp toda la funcionalidad para mi sever web*/

/*seterar un puerto a mi web server */
app.set("port",5000)

/*routes */
app.use("/api/categorias",categoriaRouter);

/*hacemos dispobinle a mis erver app para toda la aplicación */
export default app;

