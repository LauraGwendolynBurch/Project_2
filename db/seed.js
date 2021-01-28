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
    password: "$2a$10$WttW6zQLdoUe8leQ5C.lgeBBw5CFUHjOvA9bXGB5tVQdaYFgw3qoG"
  },
  {
    id: 2,
    // name: "John",
    email: "john@gmail.com",
    password: "$2a$10$WttW6zQLdoUe8leQ5C.lgeBBw5CFUHjOvA9bXGB5tVQdaYFgw3qoG"
  }
];

const gearSeeds = [
  {
    itemName: "Bob's Compass",
    itemDescription: "Cammenga Tritium Compass 3H",
    itemWeight: 4,
    itemStorageLocation: "garage",
    itemQuantityInStorage: "1",
    itemQuantityInPackingList: "0",
    UserId: 1
  },
  {
    itemName: "Bob's Map",
    itemDescription: "1:20,0000 Lat-Long of Mt. St. Helens",
    itemWeight: 1,
    itemStorageLocation: "garage",
    itemQuantityInStorage: "1",
    itemQuantityInPackingList: "0",
    UserId: 1
  },
  {
    itemName: "Bob's Backpack",
    itemDescription: "Mountain Hardwear Grotto 35L",
    itemWeight: 42,
    itemStorageLocation: "garage",
    itemQuantityInStorage: "1",
    itemQuantityInPackingList: "0",
    UserId: 1
  },
  {
    itemName: "John's Compass",
    itemDescription: "Cammenga Tritium Compass 3H",
    itemWeight: 4,
    itemStorageLocation: "garage",
    itemQuantityInStorage: "1",
    itemQuantityInPackingList: "0",
    UserId: 2
  },
  {
    itemName: "John's Map",
    itemDescription: "1:50,000 MGRS WGS84 of Mt. Rainier",
    itemWeight: 1,
    itemStorageLocation: "garage",
    itemQuantityInStorage: "1",
    itemQuantityInPackingList: "0",
    UserId: 2
  },
  {
    itemName: "John's Backpack",
    itemDescription: "Camp 4 28 Backpack",
    itemWeight: 42,
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
