require('dotenv').config();
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

// Create a person schema called personSchema
let personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,  
  favoriteFoods: [String]
});

// Create a model called Person from the personSchema
let Person = mongoose.model("Person", personSchema);

/* Create and Save a Record of a Model */
const createAndSavePerson = (done) => {
  let p = new Person;
  
  p.name = "Name"
  p.age = 31
  p.favoriteFoods = ["food1", "food3"]

  // Call the method document.save() on the returned document instance. Pass to it a callback using the Node convention. 
  p.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });  
};

/* Create Many Records with model.create() */
let p1 = new Person;
p1.name = "Name2"
p1.age = 31
p1.favoriteFoods = ["food21", "food23"]

let p2 = new Person;
p2.name = "Name3"
p2.age = 31
p2.favoriteFoods = ["food31", "food33"]

let arrayOfPeople = [p1, p2];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  }); 
};

/* Use model.find() to Search Your Database */
const findPeopleByName = (personName, done) => {
  // Parameter "filter" to find() must be an object
  Person.find({name: personName}, function(err, found) {
    if (err) return console.error(err);
    done(null, found)
  }); 
};

/* Use model.findOne() to Return a Single Matching Document from Your Database */
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, found) {
    if (err) return console.error(err);
    done(null, found)
  }); 
};

/* Use model.findById() to Search Your Database By _id */
const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, function(err, found) {
    if (err) return console.error(err);
    done(null, found)
  }); 
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
