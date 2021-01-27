const express = require("express");
const db = require("../models");
const router = express.Router();

// // Gear Routes
// GET route for displaying all items in Gear (and their associated values)
router.get("/api/gear", (req, res) => {
  const query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  // Add an "include" property to our options in our displayAllItems query
  db.Gear.findAll({
    where: query,
    include: [db.User]
  }).then(dbGear => {
    console.log(dbGear);
    res.json(dbGear);
  });
  // Set the value to an array of the models we want to include in a left outer join
});

// GET route for filtering for packing list items (entire row), in other words if the itemQuantityInPackingList value is greater than zero
router.get("/api/gear/packed", (req, res) => {
  const query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  // Add an "include" property to our options in our displayPackingList query
  db.Gear.findAll({
    where: {
      query,
      include: [db.User],
      itemQuantityInPackingList: {
        [db.gt]: 0
      }
    }
  }).then(dbGear => {
    res.join(dbGear);
  });
  // Set the value to an array of the models we want to include in a left outer join
});

// POST route for adding new item (row) to Gear
router.post("/api/gear", (req, res) => {
  db.Gear.create(req.body).then(dbGear => {
    res.json(dbGear);
  });
});

// DELETE route for deleting items (entire row) from Gear
router.delete("/api/gear/:id", (req, res) => {
  db.Gear.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbGear => {
    res.json(dbGear);
  });
});

// Update route for editing item values in the Gear
router.put("/api/gear", (req, res) => {
  db.Gear.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbGear => {
    res.json(dbGear);
  });
});

module.exports = router;
