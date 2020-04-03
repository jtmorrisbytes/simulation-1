require("dotenv").config();
const express = require("express");
const massive = require("massive");
const PC = require("./controllers/product");
const app = express();

app.use(express.json());
app.get("/api/products", PC.getAll);
app.get("/api/products/:id", PC.getOne);
app.post("/api/products", PC.create);
app.put("/api/products", PC.update), app.delete("/api/products/:id", PC.delete);

app.use(require("morgan")("tiny"));
massive(process.env.DATABASE_URL).then(db => {
  app.set("db", db);
  app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(
      `server listenening on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
    );
  });
});
