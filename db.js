const sql = require("mysql2/promise");

const dotenv = require("dotenv");
dotenv.config();
const pool = sql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

async function getall(){
    const res = await pool.query("select * from Notes");
    return res[0];
}

async function getNote(id){
    const res = await pool.query("select * from Notes where id = ? ",[id]);
    return res[0];
}
async function createNote(id,title,description){
    const res = await pool.query("insert into Notes values (?,?,?)",[id,title,description]);
    // const id1 = res[0].insertId;
    // console.log(id1);
    // const data = await getNote(id1);
    // console.log(data);
    // console.log(res);
    return res;
}
getall()
module.exports = {getNote,getall,createNote}