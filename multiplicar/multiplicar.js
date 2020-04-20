const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)        
    }
}


let crearArchivo = (base, limite) => {
    return new Promise ( (resolve, reject) => {

        if( !Number(base)){
            reject(`el valor introducido  en la base ${base} no es un numero`);
            return;
        }

        if( !Number(limite)){
            reject(`el valor introducido en el limite ${limite} no es un numero`);
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limite ; i++) {
            data +=(`${base} * ${i} = ${i*base}\n`)    
        }
        
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
