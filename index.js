// const express = require("express"); we use the next line instead
import express from 'express'
// instancia de express
const app = express();
const port = 5000;

import { routerApi } from './routes/index.js'
// const routerApi = require('./routes')

import { pool } from './services/db_connect.js';

// Le decimos a app que espere formatos tipo json
app.use(express.json())

// Rutas (Los endpoints se nombran en plural por Buena Practica)
app.post('/create', (req,res) => {
    // Request del cuerpo de Insomnia (Emulador de frontend)
    const body = req.body;
    // Query = Insertar a la tabla books titulo, paginas y va estar relacionado a un user (FK) los valores se le pasa entre corchetes y que retorne todo de books
    pool.query('INSERT INTO public.books (title, cant_pgs, user_id) VALUES ($1, $2, $3) RETURNING *',
    [body.title, body.cant_pgs, body.user_id],
    (err, result) => {  
        res.json(result.rows)
    });
});

app.delete('/delete/:id', (req,res) => {
    const { id } = req.params;

    // if (id) {
        pool.query('DELETE FROM public.books WHERE id = $1 RETURNING *',
        [id],
        (err, result) => {
            res.json(result.rows)
        // });
    // } else {
        // res.send('Aqui no hay nada que ver muchachos')
    });
});
app.patch('/patch/:id', (req, res) => {
    const id = req.params.id
    // const boolean = req.params.boolean
    pool.query('UPDATE public.todoss SET is_completed=true WHERE id= $1 RETURNING *', [id], 
    (err, result) => {
        res.json(result.rows)
    });
});



routerApi(app);

app.listen(port, () => {
    pool.connect(
        (err , client , done) => {
            if (err) {
                console.log('No conecta a la db check /services/db_conect.js')
            } else {
                console.log('Coneccion a la base de datos succesfull')
                done()};
        });
    console.log(`Example app listening on port ${port}`)
    console.log(`Run the server at http://localhost:${port}/`)
});
