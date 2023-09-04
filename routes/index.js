// archivo de config rutas

import { libros } from './librosRouter.js'

// funcion de recibe la aplicacion app
export function routerApi(app){
   const log = app.use('/libros', libros )
   console.log(log)
};