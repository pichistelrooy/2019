function ByID()
{
    document.getElementById('myId').innerHTML = 'Hello World';
}

function byTagName()
{
    document.getElementsByTagName("p")[0].innerHTML = 'Hello World';
}

function byClassName()
{
    document.getElementsByClassName("test")[0].innerHTML = 'Hello World';
}

function bySelector()
{
    document.querySelector(".test").innerHTML = 'Hello World';
}

function bySelectorAll()
{
    var html = document.querySelectorAll(".test");
    var elementos = Array.from(html);

    elementos.forEach(function(elemento)  
    {
        elemento.innerHTML = 'Hello World';
    });
}