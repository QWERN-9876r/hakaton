import express from 'express'
import mongoose from 'mongoose'
import { transaction } from './models.js'
import cors from 'cors'

mongoose.connect('mongodb://localhost:27017/testers')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 3001

app.get('/transactions', async (req, res) => {
  if(!req.body) { res.sendStatus(400) }
  const transactions = await transaction.find()
  res.json(transactions.sort((a, b) => { return Number(a.date) - Number(b.date) }))
})

// app.get('/transactions', (req, res) => {
//     res.json([{comment: 'John', price: 1000, category:'food', date: new Date(Date.now()-1_000_000_000_000)}, {comment: 'not John', price: 300, category:'food', date: new Date(Date.now())}, {comment:'', price: 300, category:'food', date: new Date(Date.now()+1_000_000_000_000)}].sort((a, b) => {
//         return Number(new Date(a.date)) - Number(new Date(b.date))
//     }))
// })

app.post('/create_transaction', (req, res) => {
    if(!req.body){ res.sendStatus(400) }
    if(!req.body.price || !req.body.category || !req.body.user) { res.sendStatus(400) }

    console.log({comment: req.body.comment || '', price: req.body.price, category:req.body.category, user: req.body.user})
    const newTransaction = new transaction({comment: (req.body.comment || ''), price: req.body.price, category:req.body.category, date: new Date(Date.now()).toLocaleDateString(), user: req.body.user})
    newTransaction.save()
    res.sendStatus(200)
})
app.get('/register', (req, res) => {
  console.log(req.body)
  res.sendStatus(400)
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})