var datos2 = [];

function validarstring(valor){
    return typeof valor !== "string";
}

function convertirmayus(datos)
{
    return new Promise((resolve, reject) => {
        datos.forEach(element => {
            if (validarstring(element)){
                reject("Hay al menos un dato NO STRING");
            }
            datos2.push(element.substring(0,1).toUpperCase() + element.substring(1,element.length));
        });
        resolve(datos.map(element => element.charAt(0).toUpperCase() + element.substring(1)));
    });
}

function ordenar(datos){
    return new Promise((resolve, reject) => {
        datos.forEach(element => {
            if (validarstring(element)){
                reject("Hay al menos un dato NO STRING");
            }
            datos2.sort((a,b) => (a > b) ? 1 : ((a < b) ? -1 : 0));
        });
        resolve(datos.sort());
    });
}

async function hacertodo(){
    const datos = ["marcos", "federico", "matias", "penelope", "abigail"];

    console.log("Datos al inicio: " + datos);
    console.log("Datos 2: " + datos2);

    const upper2 = await convertirmayus(datos);
    console.log("Luego de Upper: " + upper2);
    console.log("Datos 2 luego de upper: " + datos2);

    const ordenado = await ordenar(upper2);
    console.log("Datos después de ordenar: " + ordenado);
    console.log("Datos 2 luego de ordenado: " + datos2);
}