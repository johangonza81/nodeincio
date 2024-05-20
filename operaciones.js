const fs= require ('fs')

const agregar = (nombreAnimal,edadAnimal,tipoAnimal,colorAnimal,enfermedad) =>{
    const citas2= JSON.parse(fs.readFileSync('citas2.json','utf8'));
    const id= Math.floor(Math.random()*100).toString();
    if (!nombreAnimal || !edadAnimal || !tipoAnimal || !colorAnimal ||!enfermedad) {
        console.log('Por favor ingresa todos los datos');
        return ;
    }
   
    
    citas2.push({id,nombreAnimal,edadAnimal,tipoAnimal,colorAnimal,enfermedad});
    fs.writeFileSync('citas2.json', JSON.stringify(citas2));
    console.log(citas2);
    
};


const leer= () =>{
    const citas2 = JSON.parse(fs.readFileSync('citas2.json','utf8'))
    console.log(citas2)
 }



module.exports={agregar,leer};