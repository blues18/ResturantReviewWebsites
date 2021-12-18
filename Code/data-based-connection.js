var mysql=require('mysql2');
var connectionEstablish = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password:'CDEV',
    database:'restuarntsdb' 
});

connectionEstablish.connect(err =>{
    if(err)throw err;
    console.log('Connection success')
});
module.exports=connectionEstablish;