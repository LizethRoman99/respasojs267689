//RETRASO DE TIEMPO EN UN BOTON
//ejercicio asincronico  dependiendo el tiempo muestra el de menor tiempo primero sin importar el orden


// proceso1 =async()=>{
//     let suma1=0;
//     return new Promise( (resolve,reject)=>setTimeout(()=>{
//         for (let i=0;i<=5000;i++)
//         {
//             suma1+=i


//         }
//         resolve(`Proceso1:la suma es ${suma1}`)
//     },5000)


//     )
  
// }
// proceso2 =async()=>{
//     let suma2=0;
//     return new Promise( (resolve,reject)=>setTimeout(()=>{
//         for (let i=0;i<=20000;i++)
//         {
//             suma2+=i


//         }
//         resolve(`proceso2:la suma es ${suma2}`)
//     },8000)


//     )
  
// }
// proceso3 =async()=>{
//     let suma3=0;
//     return new Promise( (resolve,reject)=>setTimeout(()=>{
//         for (let i=0;i<=1000;i++)
//         {
//             suma3+=i


//         }
//         resolve(`proceso3:la suma es ${suma3}`)
//     },3000)


//     )
  
// }
// document.querySelector('#btnBuscar')
// .addEventListener('click', ()=>{
// proceso1().then(mensaje=>console.log(mensaje))
// proceso2().then(mensaje=>console.log(mensaje))
// proceso3().then(xyz=>console.log(xyz))


// })








//ejercicio sincronico  lo muestra en orden .



// proceso1 =()=>{
//     let suma1=0;
   
//         for (let i=0;i<=5000;i++)
//         {
//             suma1+=i


//         }
//         return(`Proceso1:la suma es ${suma1}`)
// }
// proceso2 =()=>{
//     let suma2=0;
   
//         for (let i=0;i<=5000;i++)
//         {
//             suma2+=i


//         }
//         return(`Proceso2:la suma es ${suma2}`)
// }
// proceso3 =()=>{
//     let suma3=0;
   
//         for (let i=0;i<=5000;i++)
//         {
//             suma3+=i


//         }
//         return(`Proceso3:la suma es ${suma3}`)
// }
  

// document.querySelector('#btnBuscar')
// .addEventListener('click', ()=>{
// console.log(proceso1())
// console.log(proceso2())
// console.log(proceso3())


// })
//dilopezz@sena.edu.co
//convertir el codigo anterior a funciones sincronicas sin promesas y sin async


//dadas 4 listas de documentos implementar una funcion async para cada lista para buscar un documento si el documento esta devolver econtrado.imprimir el mensaje

const buscarDocumento=async(dato)=>{
    const documentos1 =[1010,1011,10130,1957,5550]
    const documentos2=[1120,2345,,1039,3456,2345]
    const documentos3 =[1126,2565,,4539,3456,2395]
    const documentos4=[1124,2565,,6539,3656,5395]

    let encontrado=false;
    for (let i = 0; i < documentos1.length; i++) {
        if (dato==documentos1[i]) {
            encontrado=true
            var mensaje= 'Pertence a la lista 1'
        }    
    }
    for (let i = 0; i < documentos2.length; i++) {
        if (dato==documentos2[i]) {
            encontrado=true
            var mensaje= 'Pertence a la lista 2'
            
        }    
    }
    for (let i = 0; i < documentos3.length; i++) {
        if (dato==documentos3[i]) {
            encontrado=true
            var mensaje= 'Pertence a la lista 3'
        }    
    }
    for (let i = 0; i < documentos4.length; i++) {
        if (dato==documentos4[i]) {
            encontrado=true
            var mensaje= 'Pertence a la lista 4'
        }    
    }
  return new Promise((resolve, reject)=>{
    if (encontrado) {
        resolve('Dato encontrado en la lista : '+mensaje)
        
    }
    else{
        reject('Dato no encontrado')
    }

  })
}
document.querySelector('#btnBuscar')
.addEventListener('click', ()=>buscarDocumento(document.getElementById('dato').value)
.then(mensaje =>console.log(mensaje))
.catch(error=>console.log(error))


)