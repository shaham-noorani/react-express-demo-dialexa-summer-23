import express from "express";
import cors from "cors";

import { router } from "./router";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("french fry");
});

app.use("/api", router);

app.listen(3001, () => {
  console.log("Example app listening on port http://localhost:3001!");
});
