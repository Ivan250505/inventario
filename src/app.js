import express from "express";
/*Ïmportamos al framework exprres*/

const app=express();
/*asignamos a pp toda la funcionalidad para mi sever web*/

/*seterar un puerto a mi web server */
app.set("port",5000)

/*hacemos dispobinle a mis erver app para toda la aplicación */
export default app;
