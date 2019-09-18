let listapersonas = [];

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

function agregar(){
    var persona = new Persona();
    persona.nombre = document.getElementById("name").value;
    persona.apellido = document.getElementById("apellido").value;
    persona.edad = document.getElementById("edad").value;
    listapersonas.push(persona);
}

function mostrarpersonas(){
    listapersonas.forEach(element => {
        console.log(element);
    });
}

function ordenar(){
    listapersonas.sort(function(a,b){
        if (a.edad > b.edad){
            return 1;
        } else {
            return -1;
        }
        return 0;
    });

    console.log(listapersonas);
}