persona = {
    nombre: "Angie",
    edad: 21,
    ciudad: "Bogota",
    profesion: "Administradora"
}
console.log(persona)
function presentacion(obj){
    return obj.nombre + ", " + obj.edad + ", " + obj.ciudad;
}
let mensaje = presentacion(persona);
console.log(mensaje)
persona.hobbies = ["Leer", "Ver series", "Gym"]
console.log(persona.hobbies)
for(hobbie in persona.hobbies){
    console.log(persona.hobbies[hobbie])
}