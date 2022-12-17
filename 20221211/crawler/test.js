//獲取客戶端
const mysql2 =require('mysql2/promise');
require('dotenv').config();

//創建與數據庫的連接
(async function data(){
let connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
});

//簡單查詢

let result= await connection.query("SELECT * FROM `stocks`");
let data=result[0];
// console.log (result);
console.log (data);
connection.end();
})();