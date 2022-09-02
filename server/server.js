require("dotenv").config();
const { SERVER_PORT } = process.env;
const { data } = require("./data");

const express = require("express");
const cors = require("cors");
const app = express();

console.log("here is data", data);

app.post("/data", data);

app.use(cors());
app.use(express.json());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get("https://api.football-data.org/v4/competitions/PL", (req, res) => {
//   res.send(res.data);
// });

///////////////////////////////////Different/////////////////////////////

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });
app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));
