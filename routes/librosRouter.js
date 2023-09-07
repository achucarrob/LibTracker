import express from 'express'

// Cuando aplicamos architecture SRP, instead of app creamos un routing propio we use a router method, cause app is'nt in this file anymore
export const libros = express.Router();

// pool contiene la configuracion del db 
import { pool } from './../services/db_connect.js'

// Rutas en lugar de app.get, libros.get
// Estos endpoints necesariamente se construyen asi http://localhost:5000/libros/<endpoint>
libros.get("/", (req,res) => {
    // esta ruta seria asi http://localhost:5000/libros 
    pool.query('SELECT * FROM public.books', (err, result) => {
            res.json(result.rows)
        });
});

libros.get("/:id", (req, res) => {
    // esta ruta seria asi http://localhost:5000/libros/<id>
    // res.send('Libros filtrados');
    // Forma limpia de guardar un parametro con ECS6, "de todos los parametros que pueda recibir solo me interesa el id"
    const { id } = req.params;

    if (id) {
        pool.query('SELECT * FROM public.books WHERE id= $1',
        [id],
        (err, result) => {
            res.json(result.rows)
        });
    } else {
        res.send('No se encuentra libros con este indicador')
        // pool.query('SELECT * FROM public.books', (err, result) => {
        //     res.json(result.rows)
        // });
    };
});
