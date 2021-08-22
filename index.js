const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());

morgan.token('body', (req, res) => JSON.stringify(req.body));
// app.use(morgan('tiny'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

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

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);

  person
    ? res.json(person)
    : res.status(404).end();
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((p) => p.id !== id);

  res.status(204).end();
});

app.post('/api/persons', (req, res) => {
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
  if (persons.find((p) => p.name.toUpperCase() === body.name.toUpperCase())) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    id: Math.ceil(Math.random() * (persons.length * 100)),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person);

  res.status(201).json(persons);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});