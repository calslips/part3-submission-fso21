require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

const unknownEndpoint = (req, res) => {
  res.status(404).json({
    error: 'unknown endpoint'
  });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.name === 'CastError') {
    return res.status(400).json({
      error: 'invalid id format'
    });
  }

  next(err);
};

app.get('/info', (req, res) => {
  res.send(
    `
    <div>
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${new Date()}</p>
    </div>
    `
  );
});

app.get('/api/persons', (req, res, next) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  })
  .catch(next);
  // res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);

  person
    ? res.json(person)
    : res.status(404).end();
});

app.delete('/api/persons/:id', (req, res, next) => {
  // const id = Number(req.params.id);
  // persons = persons.filter((p) => p.id !== id);
  Person.findByIdAndRemove(req.params.id)
    .then((result) => {
      if (result) {
        res.status(204).end();
      } else {
        res.status(404).end()
      }
    })
    .catch(next);
  // res.status(204).end();
});

app.post('/api/persons', (req, res, next) => {
  const body = req.body;

  if (!body.name) {
    return res.status(400).json({
      error: 'missing name'
    })
  }
  if (!body.number) {
    return res.status(400).json({
      error: 'missing number'
    })
  }
  // if (persons.find((p) => p.name.toUpperCase() === body.name.toUpperCase())) {
  //   return res.status(400).json({
  //     error: 'name must be unique'
  //   })
  // }

  Person.findOne({ name: body.name })
    .then((queryResult) => {
      // console.log('FIND ONE RESULT:', queryResult);
      if (queryResult) {
        return res.status(400).json({
          error: 'name must be unique'
        });
      }

      const person = new Person({
        name: body.name,
        number: body.number,
      });

      person.save().then((savedPerson) => {
        res.status(201).json(savedPerson)
      });
    })
    .catch(next);

  // persons = persons.concat(person);
  // res.status(201).json(persons);
});

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body;

  const person = {
    number: body.number
  };

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updatedPerson) => {
      res.json(updatedPerson);
    })
    .catch(next);
})

app.use(unknownEndpoint);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});