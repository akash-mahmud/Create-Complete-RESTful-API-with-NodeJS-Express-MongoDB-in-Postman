const express = require("express");
require("../src/db/conn")
const app = express();


const MensRanking = require("../src/models/mens")
const router = require("./routers/men")

const port = process.env.PORT || 3000


app.use(express.json());
app.use(router)



app.listen(port, () => {

  console.log(`Connection is running at ${port}.`);
})