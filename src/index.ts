import express from "express";
import * as home from "./controllers/home";

const app = express();
const port = 8080;

app.get("/", home.index);
app.get("/json", home.json);

// app.get("/", (req, res) => {
//   res.send("Olá mundo...");
// });

app.listen(port, () => {
 // tslint:disable-next-line:no-console
 console.log(`Servidor iniciado em http://localhost:${port}`);
});
