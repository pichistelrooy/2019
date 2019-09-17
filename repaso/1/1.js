var lista = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

function mostrar(){
    console.log(lista);
}

function borrar(){
    auxarray = lista;
    var i;
    var a;
    auxarray.forEach(element => {
        i = 0;   
        a = -1; 
        lista.forEach(element2 => {
            a++;
            if (element == element2){
                i++;
                if (i > 1){
                    lista.splice(a,1);
                }
            }    
        });
    });
    console.log(lista);
}