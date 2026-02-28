import pg from 'pg'
const  {Pool} = pg

import dotenv from 'dotenv'
dotenv.config()
// ✅ Debug: check environment variables
console.log("DB_USER:", process.env.DB_USER)
console.log("DB_PASSWORD:", process.env.DB_PASSWORD)
console.log("DB_DATABASE:", process.env.DB_DATABASE)
console.log("DB_HOST:", process.env.DB_HOST)
console.log("DB_PORT:", process.env.DB_PORT)

const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
})

pool.on("connect", ()=>{
    console.log("Database is connected successfully")
})

export default pool