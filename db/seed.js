require("dotenv").config();

import { User } from "../models";

const userSeeds = [
  {
    name: "Bob",
    email: "bob@gmail.com",
    password: "password"
  }
];

const seed = () => {
  return User.bulkCreate(userSeeds);
};

seed().then(result => {
  console.log(result);
  process.exit();
});