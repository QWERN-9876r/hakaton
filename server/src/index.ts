import express from 'express'
import mongoose from 'mongoose'
import { family, transaction, users } from './models.js'
import cors from 'cors'
import { sha256 } from './helpers.js'
// import dayjs from 'dayjs'
import { periods } from './periods.js'
import currencies from './data/currencies.js'
// import cookieParser from 'cookie-parser'

type Period = 'month' | '3 months' | '6 months' | 'year' | 'all'

await mongoose.connect('mongodb://localhost:27017/testers')

const usersCollection = await users.createCollection()
const transactionsCollection = await transaction.createCollection()
const familiesCollection = await family.createCollection()

const app = express()

app.use(express.json())
app.use(cors())
// app.use(cookieParser())

const getEmailGeneralInFamily = async (email: string) => {
    const user = await usersCollection.findOne({ email: email })
    if (!user) return null
    const userId: string = (await familiesCollection.findOne({ participants: { $all: [user._id] } }))?.mainParticipantId
    if (!userId) return null

    return (await users.findById(userId))?.email
}

const PORT = 3001

app.post('/addUserName', (req, res) => {
    const dateStart = Date.now()

    const { email, userName } = req.body

    if (typeof email !== 'string' || typeof userName !== 'string') return res.sendStatus(400)

    usersCollection.updateOne({ email }, { $set: { name: userName } })

    console.log('/addUserName', Date.now() - dateStart, 'ms')

    res.sendStatus(200)
})

app.get('/transactions', async (req, res) => {
    const dateStart = Date.now()
    if (!req.query.email) {
        return res.sendStatus(400)
    }

    if (req.query.period && !((req.query.period as string) in periods)) {
        return res.sendStatus(400)
    }
    if (!req.query.period) req.query.period = 'all'

    const userEmail = (await getEmailGeneralInFamily(req.query.email as string)) || req.query.email

    const transactions = (await transactionsCollection.find({ userEmail }).toArray()).filter((trans) => {
        return periods[req.query.period as Period](trans.date)
    })

    const expenditures = transactions
        .filter((t) => t.amount < 0)
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    const income = transactions
        .filter((t) => t.amount > 0)
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(b.date)))

    // expenditures.forEach((a) => {
    //     a.amount = -a.amount
    // })

    console.log('/transactions', Date.now() - dateStart, 'ms')

    res.json({
        expenditures,
        income,
    })
})
app.post('/create_family', async (req, res) => {
    const dateStart = Date.now()

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
        return res.sendStatus(400).json({ error: 'The family already exists' })
    }

    console.log('create family', newFamily)

    familiesCollection.insertOne(newFamily)

    console.log('/create_family', Date.now() - dateStart, 'ms')

    res.sendStatus(200)
})

app.post('/add_user_in_family', async (req, res) => {
    const dateStart = Date.now()

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

    console.log('/add_user_in_family', Date.now() - dateStart, 'ms')

    res.sendStatus(200)
})

app.post('/delete_user_in_family', async (req, res) => {
    const dateStart = Date.now()

    if (!req.body || !req.body.deletedId) {
        return res.sendStatus(400)
    }
    const { deletedId } = req.body

    console.log('deletedId', deletedId)
    const user = await users.findById(deletedId)
    if (!user) return res.json({ error: 'No such user' })

    const thisFamily = await familiesCollection.findOne({ participants: { $all: [user?._id] } })

    if (!thisFamily) return res.json({ error: 'No such family' })
    thisFamily.participants = thisFamily.participants.filter((id: typeof user._id) => !user._id.equals(id))

    familiesCollection.updateOne(
        { participants: { $all: [user._id] } },
        { $set: { participants: thisFamily.participants } },
    )
    console.log('/delete_user_in_family', Date.now() - dateStart, 'ms')

    res.sendStatus(200)
})

app.get('/users_in_family', async (req, res) => {
    const dateStart = Date.now()

    if (!req.query.email) {
        return res.sendStatus(400)
    }

    const user = await usersCollection.findOne({ email: req.query.email })

    if (!user) return res.status(400).json({ error: 'No such user' })

    const thisFamily = await familiesCollection.findOne({
        participants: { $all: [user._id] },
    })

    console.log(thisFamily, user)

    if (!thisFamily) return res.status(400).json({ error: 'No such family' })

    console.log('/users_in_family', Date.now() - dateStart, 'ms')

    res.json(thisFamily.participants)
})

app.get('/user_name', async (req, res) => {
    const dateStart = Date.now()

    const { id } = req.query
    if (!id) return res.sendStatus(400)

    // await usersCollection.find({ _id: new mongoose.Schema.ObjectId(id as string) }).next())
    const user = await users.findById(id)

    if (!user) return res.json({ error: 'No such user' })
    let { name } = user
    if (!name) name = user.email

    console.log('/user_name', Date.now() - dateStart, 'ms')

    res.json({ name })
})

app.post('/create_transaction', async (req, res) => {
    const dateStart = Date.now()

    if (!req.body) {
        return res.sendStatus(400)
    }

    if (!req.body.amount || !req.body.date || !req.body.category || !req.body.userEmail) {
        return res.sendStatus(400)
    }

    const userEmail = (await getEmailGeneralInFamily(req.body.userEmail)) || req.body.userEmail

    const newTransaction = new transaction({
        comment: req.body.comment || '',
        amount: req.body.amount,
        category: req.body.category,
        date: req.body.date,
        userEmail: userEmail,
        currency:
            req.body.currency || (await usersCollection.findOne({ email: req.body.userEmail }))?.currency || 'RUB',
    })

    console.log('create transaction: ', newTransaction)

    transactionsCollection.insertOne(newTransaction)

    console.log('/create_transaction', Date.now() - dateStart, 'ms')

    res.sendStatus(200)
})
app.post('/registration', async (req, res) => {
    const dateStart = Date.now()

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
            currency: 'RUB',
        }
        const { insertedId } = await usersCollection.insertOne(user)
        const response = { ok: true, id: insertedId, ...user }

        console.log('/registration', Date.now() - dateStart, 'ms')

        return res.json(response)
    }
    res.sendStatus(400)
})
app.post('/signIn', async (req, res) => {
    const dateStart = Date.now()

    const { key } = req.body

    if (typeof key === 'string') {
        const user = await usersCollection.findOne({ key })
        if (!user) return res.json({ ok: false, error: 'falsche email oder password' })

        const { email, _id } = user

        console.log('/signIn', Date.now() - dateStart, 'ms')

        return res.json({ ok: true, key, email, id: _id })
    }
    res.sendStatus(400)
})
app.post('/changeUserCurrency', (req, res) => {
    console.log(req.body)

    const dateStart = Date.now()
    const { email, currency } = req.body

    console.log(email, currency)

    if (typeof email !== 'string' || typeof currency !== 'string' || !currencies.includes(currency))
        return res.sendStatus(400)

    usersCollection.updateOne({ email }, { $set: { currency } })

    console.log('/changeUserCurrency', Date.now() - dateStart, 'ms')

    res.sendStatus(200)
})
app.get('/currency', async (req, res) => {
    const dateStart = Date.now()

    const { email } = req.query

    if (typeof email !== 'string') return res.sendStatus(400).json({ error: 'No such email in query' })
    const user = await usersCollection.findOne({ email })
    if (!user) return res.sendStatus(400).json({ error: 'No such user' })

    console.log('/currency', Date.now() - dateStart, 'ms')

    res.json({ currency: user.currency || 'RUB' })
})
app.get('/language', async (req, res) => {
    const dateStart = Date.now()

    const { email } = req.query

    if (!email) res.sendStatus(400).json({ error: 'No such email' })

    const user = await usersCollection.findOne({ email })

    if (!user) return res.sendStatus(400).json({ error: 'No such user' })

    console.log('/language', Date.now() - dateStart, 'ms')

    res.json({ lang: user.lang || 'en' })
})
app.post('/setLanguage', async (req, res) => {
    const dateStart = Date.now()

    const { email, lang } = req.body

    if (!email || !lang) res.sendStatus(400)

    await usersCollection.updateOne({ email }, { $set: { language: lang } })

    console.log('/setLanguage', Date.now() - dateStart, 'ms')

    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
