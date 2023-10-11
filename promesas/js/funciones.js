const buscarCliente=(dato)=>{
    const documentos =[1010,1011,10130,1957,5550]
    const nombres=['Carmen','Ines','Daniela','Maria','janeth']
    let encontrado=false;
    for (let i = 0; i < documentos.length; i++) {
        if (dato==documentos[i]) {
            encontrado=true
            var nombre= nombres[i]
            
        }
        for (let i = 0; i < nombres.length; i++) {
           
            
        }
        
        
    }
  return new Promise((resolve, reject)=>{
    if (encontrado) {
        resolve('El nombre que coincide con el documento ingresado es : '+ nombre)
        
    }
    else{
        reject('Dato no encontrado')
    }

  })
}
document.querySelector('#btnBuscar')
.addEventListener('click', ()=>buscarCliente(document.getElementById('dato').value)
.then(mensaje =>console.log(mensaje))
.catch(error=>console.log(error))


)