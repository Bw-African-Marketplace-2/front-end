const express = require('express')
const uuid = require('uuid').v4
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const users = [
  {
    id: uuid(),
    username: 'Michael',
    email: 'lr@lr.com',
    password: 'Large',
   
  },
]

app.get('/users/:id', (req, res) => {
  const user = users.find(us => us.id === req.params.id)
  if (!user) {
    res.status(404).json({ message: 'No such order!' })
  }
  else {
    res.json(user)
  }
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  const { username, email, password} = req.body
  const requiredFields = { username, email, password }

  if (Object.values(requiredFields).some(field => (!field || !field.trim()))) {
    res.status(400).json({ message: 'Some required fields are missing or invalid.' })
  }
  else {
    const newUser = { id: uuid(), ...req.body }
    orders.push(newUser)
    res.status(200).json(newUser)
  }
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})