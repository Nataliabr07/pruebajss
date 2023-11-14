// FUNCION ENVIAR DATOS

function enviardatos(){

    var cc = document.getElementById("cc").value;
    var NombresApellidos = document.getElementById("NombresApellidos").value;
    var email = document.getElementById("email").value;
    var Clave = document.getElementById("pwd").value;
    var Rol = document.getElementById("Rol").value;

    
    document.getElementById("tableD").innerHTML+=`
        <tr>
        <td>${cc}</td>
        <td>${NombresApellidos}</td>
        <td>${email}</td>
        <td>${Clave}</td>
        <td>${Rol}</td>
    </tr>
    `;
    alert("Los datos ingresados son: "+ cc);
    
    
   
}