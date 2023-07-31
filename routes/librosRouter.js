import express from 'express'


// Cuando aplicamos architecture SRP, instead of app creamos un routing propio we use a router method, cause app is'nt in this file anymore
export const libros = express.Router();

// pool contiene la configuracion del db 
// import { pool } from './services/db_connect.js'

// Rutas en lugar de app.get, libros.get
libros.get("/", (req,res) => {
    res.send("Hello World!")
});

libros.get("/filter", (req, res) => {
    res.send('Libros filtrados');
});


libros.get("/:id", (req, res) => {
    // const { id } = req.params;
    // pool.query('SELECT * FROM public.books WHERE id = $1', [id],
    // (err, result) => {
        //     res.json(result.row)
        // });
        res.send('Libros by id')
    });
    
// routerApi(app);
// hacemos al modulo exportable
// module.exports = libros;
// export const milibro = new libros()

