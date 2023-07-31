// archivo de config rutas
// import { librosRouter } from './librosRouter.js'
import { libros } from './librosRouter.js'
// const librosRouter = require('./librosRouter')
// const libros = libros.app
// funcion de recibe la aplicacion
export function routerApi(app){
   const log = app.use('/libros', libros )
   console.log(log)
};

// export const routerLibros = new routerApi;
// module.export = routerApi;