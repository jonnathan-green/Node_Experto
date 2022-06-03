const {crearArchivo} = require('./Multiplicar');
const argv = require ('../config/yargs');





//option (l) => listar tipo bolean 

console.clear();

//const base = 7;

console.log(argv)

//console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo,'creado'))
  .catch(err =>console.log(err))

 
