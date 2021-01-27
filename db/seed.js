/* eslint-disable no-unused-vars */
console.log("Running the seed function...");

require("dotenv").config();

const User = require("../models").User;

const Gear = require("../models").Gear;

const userSeeds = [
  {
    id: 1,
    // name: "Bob",
    email: "bob@gmail.com",
    password: "password"
  },
  {
    id: 2,
    // name: "John",
    email: "john@gmail.com",
    password: "password"
  }
];

const gearSeeds = [
  {
    itemName: "Cammenga Tritium Compass 3H",
    itemDescription: "Day/Night navigation aide",
    itemWeight: 4,
    itemStorageLocation: "garage",
    itemQuantityInStorage: "1",
    itemQuantityInPackingList: "0",
    UserId: 1
  },
  {
    itemName: "Cammenga Tritium Compass 3H",
    itemDescription: "Day/Night navigation aide",
    itemWeight: 4,
    itemStorageLocation: "garage",
    itemQuantityInStorage: "1",
    itemQuantityInPackingList: "0",
    UserId: 2
  }
];

const dropEverything = () => {
  return Gear.destroy({
    where: {}
  }).then(() => {
    User.destroy({
      where: {}
    });
  });
};

const seed = () => {
  return User.bulkCreate(userSeeds).then(
    result => {
      return Gear.bulkCreate(gearSeeds).then(
        result => {
          console.log("We created the gear!");
          console.log(result);
        },
        error => {
          console.log("Error creating gear");
          console.log(error);
        }
      );
    },
    error => {
      console.log("There was an error!");
      console.log(error);
    }
  );
};

console.log("Creating seeds...");

dropEverything().then(result => {
  seed().then(result => {
    console.log(result);
    process.exit();
  });
});
