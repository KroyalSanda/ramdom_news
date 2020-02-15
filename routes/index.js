var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
// const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("news", "root", "", {
//   host: "localhost",
//   dialect: "mysql"
// });

// try {
//   sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Hello my api");
});

router.get("/bai-viet", async (req, res) => {
  let list = fs.readFileSync(path.join(__dirname) + "/list.txt");
  let dataList = list.toString().split("\n");
  let id = Math.floor(Math.random() * 69);
  try {
    let post = fs.readFileSync(
      path.join(__dirname) + "/data/" + dataList[id] + ".txt"
    );
    res.json({ post: post.toString() });
  } catch (error) {
    let post = fs.readFileSync(
      path.join(__dirname) + "/data/" + dataList[69] + ".txt"
    );
    res.json({ post: post.toString() });
  }
});

module.exports = router;
