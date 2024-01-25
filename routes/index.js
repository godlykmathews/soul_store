var express = require("express");
var router = express.Router();
var images = require("../helpers/gallery_helper");

router.get("/", function (req, res, next) {
  res.render("user/home", {title: "Home", home_active:true})
});

router.get("/men", function (req, res, next) {
  res.render("user/men", {title: "Men's", men_active:true})
});

router.get("/women", function (req, res, next) {
  res.render("user/women",{title: "Women's", women_active:true})
});

router.get("/kids", function (req, res, next) {
  res.render("user/kids", {title: "kid's", kids_active:true})
});

router.get("/about", function (req, res, next) {
  res.render("user/about", {title: "About"})
});

router.post("/", (req, res) => {

});

module.exports = router;
