var express = require("express");
const { response } = require("../app");
var router = express.Router();
var productHelper = require("../helpers/product-helper");
var userHelper = require("../helpers/user-helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("user/home", {title: 'U cart', home_active:true});
});
router.get("/men", function (req, res, next) {
  res.render("user/men", {title: 'Men U cart', men_active:true});
});
router.get("/women", function (req, res, next) {
  res.render("user/women", {title: 'Women U cart', women_active:true});
});
router.get("/accessories", function (req, res, next) {
  res.render("user/accessories", {title: 'Accessories U cart', accessories_active:true});
});
router.get("/about", function (req, res, next) {
  res.render("user/about", {title: 'About U cart'});
});
router.get("/contact", function (req, res, next) {
  res.render("user/contact", {title: 'Contact U cart'});
});

module.exports = router;
