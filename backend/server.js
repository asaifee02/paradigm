const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5000;
const db = require("./db");
const router = require("./routes");

//database connection

db.connect();

//middle ware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.set("json spaces", 2);
//cors
app.use(cors({
  origin: ["https://3000-amitpareshm-hackathonsn-bfipn5q18xi.ws-us84.gitpod.io"],
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Authorization", "Content-Type"],
  maxAge: 86400,
}));

//routes

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
// app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.status(404).json("Not found")
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

//server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port no ${PORT}`);
});
