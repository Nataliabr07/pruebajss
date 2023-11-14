class persona{
    //atributoa
    //constructor

    constructor(id,nombre,email,clave,rol){
        this.id=id;
        this.nombre=nombre;
        this.email=email;
        this.clave=clave;
        this.rol=rol;
    }
    crearObjeto(){
        const idH=document.getElementById("cc").value;
         Persona.id=idH;

        Persona.leaObjeto();

    }

    leaObjeto(){
        document.getElementById("tableD").innerHTML+="<tr><td>"+Persona.id+"</td></tr>";
       
    }
}