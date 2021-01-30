# Meili

![License Icon](https://img.shields.io/badge/license-GPL3.0-informational.svg)

An application that uses mySQL, Sequelize, Node.js and Handlebars to help you inventory and pack your outdoor gear.

(Last Updated 30 January 2021)

## Table of Contents

- [Locations](#locations)
- [Application Summary](#application-summary)
- [Usage Instructions](#usage-instructions)
- [Installation](#installation)
- [Testing](#testing)
- [Future Development](#future-development)
- [Contributors](#contributors)
- [Resources](#resources)
- [Point of Contact](#point-of-contact)
- [License](#license)

## Locations

Deployed Application Link: https://...

GitHub Repository Link: https://github.com/LauraGwendolynBurch/Project_2

## Application Summary

This application borrows it's name from Meili, the Norse God of Travel. The name "Meili" translates to "Mile Stepper" and this application was made with the needs of modern-day milesteppers in mind. Hiking, camping and wilderness activity in general all require a certain level of preplanning, organization and preparedness if they are to be enjoyable and safe. One crucial aspect of preparing for an outing is stocking one's pack with the gear and supplies you need to have a comfortable outing and make it home in one piece. This is where Meili comes in!

In it's current Minimal Viable Product iteration, Meili is a SQL database application which allows the user add their outdoor gear to a centralized inventory to track where there equipment is stored, the item's weight and quantity, and identify which items they are going to take with them on their next outing. 

![Landing Page Stillshot]()

## Usage Instructions

Account Creation and Login

1. Click the '[Deployed Application Link]()' provided in the '[Location](#location)' section.
2. Click 'create account'.
3. Enter your email and create a password.
4. Save your login info to your notes for future use!

![Account Creation Demo]()

Add and Delete Items to the Inventory

1. After logging in, you will be directed to your inventory page.
2. Click the 'add item' to initiate the item creation form.
3. Fill in all item information fields and click 'submit' to add it to your inventory.
4. The item and it's information will populate in the inventory table. 
5. To delete items from the inventory, click the 'delete' button.

![Add/Delete Demo]()

## Installation

No installation is required for running the deployed version of Meili. Simply click the '[Deployed Application Link]()' provided in the '[Location](#location)' section to get started.

When downloading and running the application locally, use the following steps:

1. Install mySQL and MySQL workbench using the directions outlined in the '[MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)'.
2. Open the '[Deployed Application Link]()' in the '[Location](#location)' section.
3. Clone the repository to your computer.
4. Open a new terminal instance in the Meili code file and run "npm init -y" to install the necessary node modules.
5. Create a .env file in the root of the directory with the following data:

        DB_USER=root
        DB_PASS=**Your Password Here**
        DB_DATABASE=gear_db

6. Log into your mySQL workbench, copy the contents of Meili's schema.sql file into your workbench and hit the lightning button to create your database.
7. In the Meili file code terminal, run "node server" to establish your connection.
8. A local host link will appear. Click the link and you're up and running!

## Testing

1. To test Meili's code, begin by completing the local installation process. 
2. After logging into mySQL Workbench and establishing your local server connection, using the CLI, run the command "npm run seed" in the Command Line Interface while the server connection to run the seed file.
3. If the seed file populates the tables in your Workbench you have a successful connection to your local database
4. Additional testing of api routes can be completed via Postman Application. Instructions for Postman installation and usage can be found at https://www.postman.com/.

## Future Development

Additional goals and application features for future devlopment include:
- More dynamic interface to edit existing item information in the inventory
- Ability to create multiple packing lists and separate storage location tables save thenm to the database
- Additional information fields for gear items to allow for item classification and filtering
- Outing Planner Page for storage of trip details, such as:
    - Outing Dates and Duration
    - Travel Itenaries 
    - Outing location(s) 
    - Environmental Conditions
    - Weather
    - Directions to Trailhead
    - GPS Land Navigation Data
    - Meal Plan
    - Communications Plan
    - Emergency/Medical Evacuation Plan
    - Signal Plan
    - Emergency Contacts
    - To-do Lists 
- API Intergration to query weather data of desired outing location and display on planning page
- Smart suggestions of gear from the inventory to take based on trip duration, environmental and weather data from the Outing Page 
- Interactive electronic packlist page to allow user to check off and move items from storage locations to packed status dynamically
- Ability to generate printable summaries of storage and backpack inventories to place in containers
- Button to email trip details summary to designated emergency contact(s) for accountability and safety

## Contributors

- Laura Gwendolyn Burch - https://github.com/LauraGwendolynBurch
- Gavin Calkins - https://github.com/Gavin867
- Ilya Libershteyn - https://github.com/ilya-libershteyn
- Meagan Sheehan-James - https://github.com/merikettapearl212
- Frederick Thomas - https://github.com/supercodingninja

## Resources

- Lessons from UW Full Stack Flex Boot Camp.
- Insights from instructor Anthony Brown.
- Conversations with Alex Landau (https://alexlandau.dev/, https://github.com/bal2ag)  
- "Setting Up a Database and Seed File" by Shannen Ye, [https://medium.com/@shann.ye/](https://medium.com/@shannen.ye/setting-up-a-database-and-seed-file-7e73fe2a9fe6), Jan 28 2018
- Background Image from [Pexels.com](https://www.pexels.com/)
- [Sequelize Documentation](https://sequelize.org/master/)
- [mySQL Documentation](https://dev.mysql.com/doc/)
- [Handlebars.js Documentation](https://handlebarsjs.com/)

## Point of Contact

Have questions? Contact Gavin Calkins at [gavin.calkins@gmail.com](mailto:gavin.calkins@gmail.com?subject=Hi%20Gavin!%20I%20have%20a%20question%20about%20Meili!).
 
## License

    Meili. An application that uses mySQL, Sequelize, Node.js and Handlebars to help you inventory and pack your outdoor gear.

    Copyright (C) 2021  Laura Gwendolyn Burch, Gavin B. Calkins, Ilya Libershteyn, Meagan Sheehan-James, Frederick Thomas 

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.