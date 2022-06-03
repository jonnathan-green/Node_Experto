const { demandOption } = require('yargs');

const argv = require ('yargs')
              .option('b',  {
                alias: 'base' ,
                type: 'number',
                demandOption: true, 
                describe : 'Es la base de tabla de multiplicar'
              })
              .option('l',  {
                alias: 'Listado' ,
                type: 'boolean',
                default:  false,
                describe: 'muestra la tabla en consola '
              })
              .option('h',  {
                alias: 'hasta',
                type: 'number',
                default : 10,
                describe: 'Es el exponente de la tabla hasta donde quieres'
              } )
              .check ( ( argv, options) => {
                if (isNaN(argv.b)){
                  throw 'La base tienes que ser un numero'
                }
                return true;
              })
              .argv;

module.exports= argv;

