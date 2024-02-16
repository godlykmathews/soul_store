var express = require("express");
const { response } = require("../app");
var router = express.Router();
var productHelper = require("../helpers/product-helper");
var userHelper = require("../helpers/user-helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("user/home");
});
router.get("/men", function (req, res, next) {
  res.render("user/men");
});
router.get("/women", function (req, res, next) {
  res.render("user/women");
});
router.get("/kids", function (req, res, next) {
  res.render("user/kids");
});

module.exports = router;
