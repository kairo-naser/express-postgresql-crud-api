import pool from "../config/db.js";

const creatUserTable = async ()=>{
    const queryText = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    
)
    `
    try{
       await  pool.query(queryText)
        console.log("User Table is created if not exist")

    }
    catch(error){
        console.log("Error of creating user table : ", error)
    }
}
export default creatUserTable