const express = require("express");
const db = require("../models");
const router = express.Router();
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
// Needed to for column comparison
const { Op } = require("sequelize");

// // Gear Routes
// GET route for displaying all items in Gear (and their associated values)
router.get("/api/gear", isAuthenticated, (req, res) => {
  console.log("Entering GET method");
  // Add an "include" property to our options in our displayAllItems query
  db.Gear.findAll({
    where: {
      Userid: req.user.id
    }
  }).then(gear => {
    res.json(gear);
  });
  // Set the value to an array of the models we want to include in a left outer join
});

// GET route for filtering for packing list items (entire row), in other words if the itemQuantityInPackingList value is greater than zero
router.get("/api/gear/packed", isAuthenticated, (req, res) => {
  console.log("Entering GET packed method");
  // Add an "include" property to our options in our displayPackingList query
  db.Gear.findAll({
    where: {
      UserId: req.user.id,
      itemQuantityInPackingList: {
        [Op.gt]: 0
      }
    }
  }).then(gear => {
    res.json(gear);
  });
  // Set the value to an array of the models we want to include in a left outer join
});

// POST route for adding new item (row) to Gear
router.post("/api/gear", isAuthenticated, (req, res) => {
  db.Gear.create({
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescription,
    itemWeight: req.body.itemWeight,
    itemStorageLocation: req.body.itemStorageLocation,
    itemQuantityInStorage: req.body.itemQuantityInStorage,
    itemQuantityInPackingList: req.body.itemQuantityInPackingList,
    UserId: req.user.id
  }).then(gear => {
    res.json(gear);
  });
});

// DELETE route for deleting items (entire row) from Gear
router.delete("/api/gear/:id", (req, res) => {
  db.Gear.destroy({
    where: {
      id: req.params.id,
      UserId: req.user.id
    }
  }).then(Gear => {
    res.json(Gear);
  });
});

// Update route for editing item values in the Gear
router.put("/api/gear/:id", isAuthenticated, (req, res) => {
  db.Gear.update(req.body, {
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescription,
    itemWeight: req.body.itemWeight,
    itemStorageLocation: req.body.itemStorageLocation,
    itemQuantityInStorage: req.body.itemQuantityInStorage,
    itemQuantityInPackingList: req.body.itemQuantityInPackingList,
    where: {
      id: req.params.id,
      UserId: req.user.id
    }
  }).then(Gear => {
    res.json(Gear);
  });
});

module.exports = router;
