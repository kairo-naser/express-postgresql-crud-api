import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import pool from './config/db.js'

const app = express()
const port = process.env.PORT || 8000


// middleware
app.use(express.json())
app.use(cors())

// routes


// error handling


// testing
app.use('/', async (req, res)=>{
try{
     const result = await pool.query("SELECT current_database()")
    res.send(`The database is connect is: ${result.rows[0].current_database}`)

}   
catch(error)
{
    console.log(error)
    res.send("There is error connecting to the database")
}})
// server running
app.listen(port, ()=>{
    console.log(`Server is running on http://127.0.0.1:${port}`)
})

export default app