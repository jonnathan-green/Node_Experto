const fs = require('fs')



const crearArchivo = async ( base = 7, listado = false, hasta = 10 ) => {


    try{
        let salida = '';

        for(let i = 0; i <= hasta; i++){
        salida += `${ base} X ${i} = ${base * i}\n`;
        }

        if (listado){
            console.log('la tabla del', base);
            console.log(salida);
            }
            
        fs.writeFileSync(`../Salida/Tabla-${base}.txt`,salida);
        return (`Tabla-${base}.txt `);
    }
    catch(err){
        throw err
    }
       
}

module.exports={
    crearArchivo
}
