import 'dotenv/config'
import express from 'express'
import './database/conn.js'
import routes from './routes/userRoutes.js'

const app = express()

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))