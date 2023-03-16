let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar","squash","piano"]
  }
  console.log(pedro.edad);
  pedro.estatura = 1.8;
  console.log(pedro.estatura);
  delete pedro.activo;
  for(let llave in pedro){
      console.log(llave + " : " + pedro[llave]);
  }
  pedro.fun = function saluda(){return "hola, me llamo " + this.nombre}
  console.log(pedro.fun())