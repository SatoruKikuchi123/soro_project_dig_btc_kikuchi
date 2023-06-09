const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3333;
const knex = require("./src/db/index");
const path = require("path");

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./build")));

app.get("/lists", async (req, res) => {
  const getData = await knex.select("*").from("lists");
  res.status(200).send(getData);
});

app.get("/shops", async (req, res) => {
  const getData = await knex.select("*").from("shop");
  res.status(200).send(getData);
});

app.get("/items", async (req, res) => {
  const getData = await knex.select("*").from("items");
  res.status(200).send(getData);
});

app.post("/shops", async (req, res) => {
  await knex("shop").insert(req.body);
  const getData = await knex.select("*").from("shop");
  res.status(200).send(getData);
});
app.post("/lists", async (req, res) => {
  await knex("lists").insert(req.body);
  res.status(200).send("OK");
});
app.get("/lists/del/:uniquKey", async (req, res) => {
  const key = String(req.params.uniquKey);
  await knex("lists").where({ uniquKey: key }).del();
  res.status(200).send("OK");
});

app.post("/lists/put", async (req, res) => {
  console.log("***********", req.body);
  for (const e of req.body) {
    await knex("lists").where({ uniquKey: e.uniquKey }).update(e);
  }
  res.status(200).send("OK");
});
