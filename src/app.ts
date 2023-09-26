import express from "express";
import { atualizarUsuarios, cadastrarUsuario, deletarUsuarios, listarUsuarios } from "./controlers/user";
const app=express();

app.use(express.json());

//rotas
app.post ("/users",cadastrarUsuario);
app.get("/users",listarUsuarios);
app.patch("/users/:user_id",atualizarUsuarios);
app.delete("/users/:user_id",deletarUsuarios);

export default app;