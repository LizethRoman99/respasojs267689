const ValidarContacto =() =>{
    //validar campos vacios
    let documento = document.querySelector('#documento')
    let nombres = document.querySelector('#nombres')
    if (documento.value.length==0) {
        alert('el documento esta vacio. verifique')
    }
    else if(nombres.value.length==0){
        alert('El nombre esta vacio. verifique')
    }
    else{
        alert('datos enviados correctamente')
    }

   
}
alert('0')
const boton =document.querySelector('#btnEnviar')

boton.addEventListener('click',ValidarContacto)

//diseñe un formulario de una tabla maestra de su proyecto validar campos obligatorios con js subir repositorio de git*/
