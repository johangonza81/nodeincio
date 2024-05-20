const{agregar,leer} = require('./operaciones.js')

const [operacion,id,nombreAnimal,edadAnimal,tipoAnimal,colorAnimal,enfermedad]= process.argv.slice(2)


if (operacion === 'agregar'){
    agregar(id,nombreAnimal,edadAnimal,tipoAnimal,colorAnimal,enfermedad)
}

if (operacion === 'leer'){
    leer()
}

