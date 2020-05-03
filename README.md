# FoodBites

![GitHub Logo](/public/images/logo.png)

A food delivery application that contains a variety of restaurants and food to choose from! Visitors and users are able to view the restaurants and menus available, however, only logged in users are able to add the food items to their cart, checkout, and have their orders delivered.

## Contents

The following are the contents of the project:
* controllers - This folder contains files that define the callback functions for a client request.
* models - This folder contains the files of the database model.
* public - This folder contains static files such as css, js, and images.
* routes - This folder contains files that describe the response of the server given an HTTP method request to a path in the server.
* views - This folder contains all .hbs files that can be rendered to the server.
* add_data.js - This script inserts restaurant data into the database.
* add_products.js - This script inserts product data into the database.
* add_users.js - This script inserts user data into the database.
* add_rate.js - This script inserts restaurant rate data into the database.
* restart_data.js - This script drops the database and deletes all data.
* index.js - The main entry point of the application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following before running the project:
* Node.js
* MongoDB

### Installing & Running

1. Clone the repository by downloading the contents of the repository or if git is installed, the following command may be used:
```
git clone https://github.com/ccapdev1920T2/s11g15
```
2. Open the command prompt and navigate to the project folder.
3. Run the following commands to initialize and install all necessary modules used in the projects:
```
npm install
npm install hbs
npm install express
npm install express-session
npm install nodemailer
npm install mongoose
npm install bcrypt
npm install mongodb
npm install connect-mongo
npm install grunt grunt-cli
npm install --save-exact grunt-contrib-uglify
npm install --save-exact grunt-contrib-concat
npm install --save-exact grunt-contrib-cssmin
npm install --save-exact grunt-contrib-watch
```
4. Run the following files to set up necessary documents in the database.
```
node add_data.js
node add_products.js
node add_rate.js
node add_users.js
```
5. The application is ready to be run. To do so, run the command `node index.js`. After running the command, you will see the following in your command prompt:
```
Listening at port 3000
Connected to: mongodb://localhost:27017/FoodBitesDB
```
6. Next, paste the following path on a browser to run the web application: `http://localhost:3000/`.
7. The path automatically navigates to the homepage and will be ready for testing.

## Dependencies
* Mongoose
* Connect-Mongo
* Express
* Express-Session
* Handlebars
* Bcrypt
* Nodemailer
* Crypto
* Grunt

## Authors
CCAPDEV S11 Group 15
* Masilang, Regina
* Tejada, Mikayla
* Wan, Abigail


## Acknowledgments
* Sir Arren Antioquia for supportive feedback and teachings
* The numerous learning sources online

