var mongoose = require('mongoose');
var data = require('../../data');
require('../all-models').toContext(global);


//------------------------
// ADD SEEDS BELOW
//------------------------


// suggested module for generating fake contextual data
// var Faker = require('faker');


// For Example

Expert.create(data)

.then(() => {
  console.log("Seed complete!")
  mongoose.connection.close();
});

// be sure to close the connection once the queries are done
