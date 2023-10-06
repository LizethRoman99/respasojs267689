// function Saludar(nombre) {
//     alert("Hola"+nombre);

    
// }
// function procesarEntradaUsuario(callback1) {
//     var nombre= prompt("por favor ingresa tu nombre");
//     callback1(nombre);

    
// }
// procesarEntradaUsuario(Saludar);
/*implementar un codigo donde emplee callback recibir un numero y si el numero es mayor a 10 calcular e imprimir en otra funcion la suma de los numeros del 1 al 100*/

function recibir (callback) {
    const numero = parseInt(prompt("Ingrese un número"))
    if (numero > 10) {
        callback();
    }
}
function calculareimprimir () {
    let resultado = 0
    for ( i = 1; i <= 100; i++) {
        resultado += i
    }
    alert(resultado);
}
recibir(calculareimprimir);
