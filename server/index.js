require("dotenv").config();
const express = require("express");
const massive = require("massive");
const PC = require("./controllers/product");
const app = express();
const cors = require("cors");
if (process.env.NODE_ENV !== "production") {
  app.use("*", cors());
}

app.use(require("morgan")("dev"));
app.use(express.json());
app.get("/api/products", PC.getAll);
app.get("/api/products/:id", PC.getOne);
app.post("/api/products", PC.create);
app.put("/api/products", PC.update), app.delete("/api/products/:id", PC.delete);

massive(process.env.DATABASE_URL).then((db) => {
  app.set("db", db);
  app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(
      `server listenening on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
    );
  });
});
