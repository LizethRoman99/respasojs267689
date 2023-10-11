// const API_URL = "https://jsonplaceholder.typicode.com";
// const HTMLResponse = document.querySelector("#app");

// fetch(`${API_URL}/users`)
//     .then((response) => response.json())
//     .then((users) => {
//         const tableHTML = `
//             <table border="1">
//                 <tr>
//                     <th>Nombre</th>
//                     <th>correo</th>
//                     <th>ciudad</th>
//                     <th>calle</th>
//                 </tr>
//                 ${users.map((user) => `
//                     <tr>
//                         <td>${user.name}</td>
//                         <td>${user.email}</td>
//                         <td>${user.address.city}</td>
//                         <td>${user.address.street}</td>
//                     </tr>
//                 `).join('')}
//             </table>
//         `;
//         HTMLResponse.innerHTML = tableHTML;
//     });


// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//     if (this.readyState === 4 && this.status ===200) {
//         // 0 = UNSET,no se ha llamado el metodo open
//         // 1 = OPENED,se ha llamado el metodo open
//         // 2 = HEADERS_:RECEIVED, se esta llamando el metodo send()
//         // 3 = LOADING, Esta cargando es decir,esta recibiendo la respuesta.
//         // 4 = DONE, Se ha completado la operacion
//        const data = JSON.parse(this.response)
//        console.log(data);
//        const HTMLresponse = document.querySelector("#app");

//        const tlp = data.map((user) => `
//        <tr>
//         <td>${user.name}</td>
//         <td>${user.address.street} ↙️↙️${user.address.city} </td>
//         <td>${user.email}</td>

//        </tr>
//        `);

//        HTMLresponse.innerHTML = `
//        <table>
//          <thead>
//            <tr>
//              <th>Nombre</th>
//              <th>Direccion</th>
//              <th>correo</th>
//            </tr>
//          </thead>
//          <tbody>
//            ${tlp.join('')}
//          </tbody>
//        </table>
//      `;
//    }
//  }
      

    
    

// xhr.addEventListener("load",onRequestHandler);
// xhr.open("GET", `${API_URL}/users`);
// xhr.send();
function listardatos() {
    let resultado = '';
    fetch(' https://www.datos.gov.co/resource/ceyp-9c7c.json')
        .then(response => response.json())
        .then(data => {
            for (let i of data) {
                resultado = resultado + '<tr><td>' + i.valor + '</td>' +
                    '<td>' + i.vigenciadesde + '</td>' + '<td>' + i.vigenciahasta + '</td>'+'</tr>';
            }
            document.getElementById('contenido').innerHTML=resultado
        });
}
      

