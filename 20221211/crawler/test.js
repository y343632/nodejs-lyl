//獲取客戶端
const mysql2 =require('mysql2/promise');

//創建與數據庫的連接
(async function data(){
let connection = await mysql2.createConnection({
    host:"localhost",
    port: 3306, 
    user:"admin",
   
    database:"stock_mfee31",
});

//簡單查詢

let result= await connection.query("SELECT * FROM `stocks`");
let data=result[0];
// console.log (result);
console.log (data);
connection.end();
})();