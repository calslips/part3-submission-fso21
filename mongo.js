/* INSTRUCTIONS
Use app by passing 3 command-line arguments:
  node mongo.js <password> <name to add> <number to add>
    (this command line input will add this person to the DB
    and will print to the console 'Added <name to add>
    number <number to add> to phonebook')
      *if name contains whitespace, enclose in quotes*

If only 1 command-line argument is passed:
  node mongo.js <password>
    (all entries in the phonebook will print to console)
*/

const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("Enter password as an argument: node mongo.js <password>");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://csp-fso21:${password}@cluster0.mbha4.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  console.log("phonebook:");
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
}

if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  person.save().then((result) => {
    console.log(`Added ${person.name} number ${person.number} to phonebook`);
    mongoose.connection.close();
  });
}
