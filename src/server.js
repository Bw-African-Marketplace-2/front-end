const express = require('express')
const uuid = require('uuid').v4
const cors = require('cors')
const app = express()

const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

const orders = [
  {
    id: uuid(),
    username: 'Michael',
    special: 'warm',
    size: 'Large',
    toppings: [
      'mushrooms',
      'pineapples',
      'salami',
      'jalapenos'
    ],
  },
]

app.get('/orders/:id', (req, res) => {
  const order = orders.find(or => or.id === req.params.id)
  if (!order) {
    res.status(404).json({ message: 'No such order!' })
  }
  else {
    res.json(order)
  }
})

app.get('/orders', (req, res) => {
  res.json(orders)
})

app.post('/orders', (req, res) => {
  const { username, special, size} = req.body
  const requiredFields = { username, special, size }

  if (Object.values(requiredFields).some(field => (!field || !field.trim()))) {
    res.status(400).json({ message: 'Some required fields are missing or invalid.' })
  }
  else {
    const newOrder = { id: uuid(), ...req.body }
    orders.push(newOrder)
    res.status(200).json(newOrder)
  }
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})