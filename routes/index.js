var express = require("express");
var router = express.Router();
var images = require("../helpers/product_helper");
const products = require("../helpers/product_helper");

router.get("/", function (req, res, next) {
  res.render("user/home", {title: "Home", home_active:true})
});

router.get("/men", function (req, res, next) {
  res.render("user/men", {title: "Men's", men_active:true}, products)
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

router.get("/product-detail", function (req, res, next) {
  res.render("user/single-product", {title: "Product"})
});

router.get("/contact", function (req, res, next) {
  res.render("user/contact", {title: "Contact"})
});

router.post("/", (req, res) => {

});

module.exports = router;
