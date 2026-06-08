import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import ticketRoutes from './routes/ticketRoutes.js'

connectDB();

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/tickets', ticketRoutes)

app.get('/', (req, res) => {
    res.send("CRM API Running")
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});