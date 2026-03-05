
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import erroHandling from './middleware/errorHandaling.js'
import creatUserTable from './models/create.user.table.js'

const app = express()



// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api', userRoutes)

// error handling
app.use(erroHandling)

// creating tables before starting the server
creatUserTable()






export default app