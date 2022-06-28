import express from 'express';
import mysql from 'mysql'
 
const app = express();
const port = 3044;
 
app.get('/', (req, res) => {
    res.send("<h1>Customer API</h1>");
});
 
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});