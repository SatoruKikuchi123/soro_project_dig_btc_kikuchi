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

// app.get("/posted", async (req, res) => {
//   const data = await knex
//     .from("posted")
//     .leftJoin("good", "posted.id", "good.g-id")
//     .leftJoin("user", "posted.p-user-id", "user.user-id")
//     .select([
//       "id",
//       "title",
//       "post-date",
//       "zamas",
//       "tag",
//       "url",
//       "pict",
//       "p-user-id",
//       "zamas",
//       "first-name",
//       "last-name",
//     ])
//     .then((e) => e);
//   const review = await knex
//     .from("posted")
//     .rightJoin("review", "posted.id", "review.r-id")
//     .select(["id", "comment"])
//     .then((e) => e);
//   const response = data.map((e) => ({
//     ...e,
//     review: review.filter((i) => i.id === e.id).map((e) => e.comment),
//   }));
//   response.sort((a, b) => (a.id < b.id ? -1 : 1));
//   res.status(200).send(response);
// });

// app.post("/posted", async (req, res) => {
//   const id = await knex("posted")
//     .max("id")
//     .then((e) => e[0].max + 1);
//   const revid = await knex("review")
//     .max("rev-id")
//     .then((e) => e[0].max + 1);
//   await knex("posted").insert({ ...req.body.posted, id });
//   await knex("good").insert({ "g-id": id, zamas: 0 });
//   await knex("review").insert({
//     comment: req.body.comment,
//     "r-id": id,
//     "rev-id": revid,
//   });
//   const data = await knex
//     .from("posted")
//     .leftJoin("good", "posted.id", "good.g-id")
//     .leftJoin("user", "posted.p-user-id", "user.user-id")
//     .select([
//       "id",
//       "title",
//       "post-date",
//       "zamas",
//       "tag",
//       "url",
//       "pict",
//       "p-user-id",
//       "zamas",
//       "first-name",
//       "last-name",
//     ])
//     .then((e) => e);
//   const review = await knex
//     .from("posted")
//     .rightJoin("review", "posted.id", "review.r-id")
//     .select(["id", "comment"])
//     .then((e) => e);
//   const response = data.map((e) => ({
//     ...e,
//     review: review.filter((i) => i.id === e.id).map((e) => e.comment),
//   }));
//   response.sort((a, b) => (a.id < b.id ? -1 : 1));
//   res.status(200).send(response);
// });

// app.post("/good", async (req, res) => {
//   const zamas = await knex
//     .from("good")
//     .where("g-id", "=", req.body["g-id"])
//     .select("zamas");
//   await knex
//     .from("good")
//     .where("g-id", "=", req.body["g-id"])
//     .update({ zamas: zamas[0].zamas + 1 }, ["g-id", "zamas"]);
//   const data = await knex
//     .from("posted")
//     .leftJoin("good", "posted.id", "good.g-id")
//     .leftJoin("user", "posted.p-user-id", "user.user-id")
//     .select([
//       "id",
//       "title",
//       "post-date",
//       "zamas",
//       "tag",
//       "url",
//       "pict",
//       "p-user-id",
//       "zamas",
//       "first-name",
//       "last-name",
//     ])
//     .then((e) => e);
//   const review = await knex
//     .from("posted")
//     .rightJoin("review", "posted.id", "review.r-id")
//     .select(["id", "comment"])
//     .then((e) => e);
//   const response = data.map((e) => ({
//     ...e,
//     review: review.filter((i) => i.id === e.id).map((e) => e.comment),
//   }));
//   response.sort((a, b) => (a.id < b.id ? -1 : 1));
//   res.status(200).send(response);
// });

// app.post("/user", async (req, res) => {
//   const record = await knex
//     .from("record")
//     .select("*")
//     .then((e) =>
//       e
//         .filter((e) => e["r-user-id"] === Number(req.body["user-id"]))
//         .map((e) => e["rr-id"])
//     );
//   const userData = await knex
//     .from("user")
//     .where("user-id", "=", req.body["user-id"])
//     .where("password", "=", req.body.password)
//     .select(["user-id", "first-name", "last-name"]);
//   userData.length > 0
//     ? res.status(200).send([{ ...userData[0], record }])
//     : res.status(200).send(false);
// });

// app.post("/singnup", async (req, res) => {
//   const check = await knex
//     .from("user")
//     .where("user-id", "=", req.body["user-id"]);
//   if (check.length > 0) {
//     res.status(200).send("1");
//   } else {
//     await knex("user").insert(req.body);
//     res.status(200).send("2");
//   }
// });
