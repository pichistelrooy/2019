function highlight()
{
    var html = document.querySelectorAll(".myClass");
    var elementos = Array.from(html);

    elementos.forEach(function(elemento)  
    {
        elemento.style.color = 'yellow';
        //elemento.style.fontSize = "30px";
    });
    var eleme = document.getElementsByClassName("myClase")[0];
    eleme.style.fontSize = '30px';
    /*var eleme = document.getElementsByClassName("myClasss");
    eleme.style.color = 'yellow';*/
}
