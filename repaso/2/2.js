var lista = [1900,1995,1987,2019,2000,1941]

function verificarbiciesto(){
    var aux4 = 0;
    var aux100 = 0;
    var aux400 = 0;
    var total = 0;
    lista.forEach(element => {
        aux4 = element%4;
        console.log(element + " dividido por 4: " + aux4);
        aux100 = element%100;
        console.log(element + " dividido 100: " + aux100);
        aux400 = element%400;
        console.log(element + " dividido 400: " + aux400);
        total = aux4 + aux100 + aux400;
        if(total == 0){
            console.log("ES BICIESTO");
        } else{
            console.log("NO ES BICIESTO: TAOTAL: " + total);
        }
        aux4 = 0;
        aux100 = 0;
        aux400 = 0;
        total = 0;
    });
}

function dividir(){
    console.log(10/3);
    console.log(10%3);
}