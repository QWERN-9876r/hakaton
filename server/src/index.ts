import express from 'express'
import mongoose from 'mongoose'
import { family, transaction, users } from './models.js'
import cors from 'cors'
import { sha256 } from './helpers.js'
import dayjs from 'dayjs'
import { periods } from './periods.js'
// import cookieParser from 'cookie-parser'

await mongoose.connect('mongodb://localhost:27017/testers')

const usersCollection = await users.createCollection()
const transactionsCollection = await transaction.createCollection()
const familiesCollection = await family.createCollection()

const app = express()

app.use(express.json())
app.use(cors())
// app.use(cookieParser())

transactionsCollection.deleteMany({ date: 'Invalid Date' })

const PORT = 3001

app.get('/transactions', async (req, res) => {
    if (!req.query.email) {
        return res.sendStatus(400)
    }
    if (req.query.period && !((req.query.period as string) in periods)) {
        return res.sendStatus(400)
    }
    if (!req.query.period) req.query.period = 'all'

    const transactions = (await transactionsCollection.find({ userEmail: req.query.email }).toArray()).filter(
        (trans) => {
            // @ts-ignore
            return periods[req.query.period](trans.date)
        },
    )
    const expenditures = transactions
        .filter((t) => t.amount < 0)
        .sort((a, b) => Number(dayjs(a.date)) - Number(dayjs(b.date)))
    const income = transactions
        .filter((t) => t.amount > 0)
        .sort((a, b) => Number(dayjs(a.date)) - Number(dayjs(b.date)))

    console.log({
        expenditures,
        income,
    })

    expenditures.forEach((a) => {
        a.amount = -a.amount
    })

    res.json({
        expenditures,
        income,
    })
})
app.post('/create_family', async (req, res) => {
    if (!req.body || !req.body.email) {
        return res.sendStatus(400)
    }
    const user = await users.findOne({ email: req.body.email })
    if (!user) return res.status(400).json({ error: 'No such user' })

    const newFamily = new family({
        mainParticipantId: user._id,
        participants: [user._id],
    })

    if (await familiesCollection.findOne({ participants: { $all: [user._id] } })) {
        return res.status(400).json({ error: 'The family already exists' })
    }

    console.log('create family', newFamily)

    familiesCollection.insertOne(newFamily)

    res.sendStatus(200)
})

app.post('/add_user_in_family', async (req, res) => {
    if (!req.body || !req.body.email || !req.body.addedEmail) {
        return res.sendStatus(400)
    }

    const user = await users.findOne({ email: req.body.email })
    const addedUser = await users.findOne({ email: req.body.addedEmail })

    if (!user || !addedUser) return res.json({ error: 'No such user' })

    const thisFamily = await familiesCollection.findOne({ participants: { $all: [user._id] } })

    if (!thisFamily) return res.json({ error: 'No such family' })
    thisFamily.participants.push(addedUser._id)
    familiesCollection.updateOne(
        { participants: { $all: [user._id] } },
        { $set: { participants: thisFamily.participants } },
    )

    res.sendStatus(200)
})

app.post('/delete_user_in_family', async (req, res) => {
    if (!req.body || !req.body.deletedId) {
        return res.sendStatus(400)
    }

    const thisFamily = await familiesCollection.findOne({ participants: { $all: [deletedId] } })

    if (!thisFamily) return res.json({ error: 'No such family' })
    thisFamily.participants = thisFamily.participants.filter((id: string) => id !== deletedId)
    familiesCollection.updateOne(
        { participants: { $all: [deletedId] } },
        { $set: { participants: thisFamily.participants } },
    )

    res.sendStatus(200)
})

app.get('/users_in_family', async (req, res) => {
    if (!req.query.email) {
        return res.sendStatus(400)
    }

    const user = await users.findOne({ email: req.query.email })
    console.log('email', req.query.email)

    if (!user) return res.status(400).json({ error: 'No such user' })

    const thisFamily = await familiesCollection.findOne({ participants: { $all: [user._id] } })
    // console.log(thisFamily)

    if (!thisFamily) return res.status(400).json({ error: 'No such family' })

    res.json(thisFamily.participants)
})

app.get('/user_name', async (req, res) => {
    // console.log('hhhh')

    const { id } = req.query
    if (!id) return res.sendStatus(400)

    // await usersCollection.find({ _id: new mongoose.Schema.ObjectId(id as string) }).next())
    const user = await users.findById(id)

    if (!user) return res.json({ error: 'No such user' })
    let { name } = user
    if (!name) name = user.email

    res.json({ name })
})

app.post('/create_transaction', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }

    if (!req.body.amount || !req.body.date || !req.body.category || !req.body.userEmail) {
        return res.sendStatus(400)
    }

    const newTransaction = new transaction({
        comment: req.body.comment || '',
        amount: req.body.amount,
        category: req.body.category,
        date: req.body.date,
        userEmail: req.body.userEmail,
    })

    console.log('create transaction: ', newTransaction)

    transactionsCollection.insertOne(newTransaction)
    res.sendStatus(200)
})
app.post('/registration', async (req, res) => {
    const { email, password } = req.body

    if (typeof email === 'string' && typeof password === 'string') {
        if (await usersCollection.findOne({ email })) {
            return res.json({ ok: false, error: 'Email already in use' })
        }
        const key = sha256(JSON.stringify({ email, password }))
        const user = {
            email,
            password: sha256(password),
            key,
        }
        const { insertedId } = await usersCollection.insertOne(user)
        const response = { ok: true, id: insertedId, ...user }

        return res.json(response)
    }
    res.sendStatus(400)
})
app.post('/signIn', async (req, res) => {
    const { key } = req.body

    if (typeof key === 'string') {
        const user = await usersCollection.findOne({ key })
        if (!user) return res.json({ ok: false, error: 'falsche email oder password' })

        const { email, _id } = user

        return res.json({ ok: true, key, email, id: _id })
    }
    res.sendStatus(400)
})
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
