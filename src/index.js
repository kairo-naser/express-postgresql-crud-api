import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'
import pool from './config/db.js'

const port = process.env.PORT


const serverStart = async ()=>{
try{
    const result = await pool.query("SELECT current_database()")
    console.log(`The database is connect is: ${result.rows[0].current_database}`)

    app.on("error", (err)=>{
        console.log("Error starting the server")
        throw err
    })
    // server running
app.listen(port, ()=>{
    console.log(`Server is running on http://127.0.0.1:${port}`)
})

}
catch(error)
{
    
    console.log("There is error connecting to the database:", error)
}
}



serverStart()