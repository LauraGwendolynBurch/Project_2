// Requiring path to so we can use relative routes to our HTML files

const router = require("express").Router();
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  // If the user already has an account send them to the gear page

  res.render("index");
});

router.get("/login", (req, res) => {
  // If the user already has an account send them to the gear page
  if (req.user) {
    return res.redirect("/gear");
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user already has an account send them to the gear page
  if (req.user) {
    return res.redirect("/gear");
  }
  res.render("signup");
});

router.get("/gear", isAuthenticated, (req, res) => {
  db.Gear.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(gearResults => {
    console.log(req.user.id);
    const hbsObject = {
      gearData: gearResults
    };
    res.render("gear", hbsObject);
  });
});

module.exports = router;
