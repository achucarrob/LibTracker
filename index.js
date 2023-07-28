// const express = require("express"); we use the next line instead
import express from 'express'
const app = express();
const port = 5000;
import { pool } from './services/db_connect.js'

app.get("/", (req,res) => {
 res.send("Hello World!")
});

app.get("/read", (req, res) => {
    res.send('Listar mis libros');
})

app.post('/create', (req,res) => {
    res.send('Agregar un libro a la lista')
});

app.delete('/delete', (req,res) => {
    res.send('Borrar una wea')
});

app.listen(port, () => {
    pool.connect(
        (err , client , done) => {
            if (err) {
                console.log('Por ahi no es reina :/ ')
            } else {
                console.log('El poder de Grimes esta contigo')
                done()};
        });
    // console.log(`Example app listening on port ${port}`)
    console.log(`Run the server at http://127.0.0.1:${port}/`)
});
