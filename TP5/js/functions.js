var datos = new Array();

function getAll()
{   
    setTimeout(Resolve, 2000,
        document.getElementById("spinner").style.visibility = "visible");
    return new Promise(function(Resolve,Reject){
        datos = [];
        var request = new XMLHttpRequest();
        request.open('GET','https://utn-2019-avanzada2-tp5.herokuapp.com/records');
        request.responseType = 'text';
        request.onload = function(){
            if(request.status == 200){
                Resolve(request.response);
                //console.log(request.response);
                datos = JSON.parse(request.response);
                datos.reverse();
                document.getElementById("spinner").style.visibility = "hidden"
                buildHtmlTable();
            }
            else{
                Reject(Error("No se pudo comunicar con el servico: " + request.statusText));
                console.log("error");
            }
        }

        request.onerror = function(){
            Reject(Error("Problemas de internet"));
        }

        request.send();
    })
}

// Builds the HTML Table out of myList.
function buildHtmlTable() {
    var cuerpo = document.getElementById("clientes"); 
    while(cuerpo.hasChildNodes())    {
        cuerpo.removeChild(cuerpo.firstChild);
    }
    var empTab = document.getElementById('clientes');
    var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    tr = empTab.insertRow(rowCnt);
    var c = 0;
    datos.forEach(cliente => 
    {
        if (c > 0) {
            tr = empTab.insertRow(rowCnt);
        }
        var td = document.createElement('td');         
        td.innerHTML = cliente.id;
        tr.appendChild(td);
        var td = document.createElement('td');         
        td.innerHTML = cliente.email;
        tr.appendChild(td);
        var td = document.createElement('td');      
        td.innerHTML = cliente.gender;
        tr.appendChild(td);   
        var td = document.createElement('td');      
        td.innerHTML = cliente.first_name;
        tr.appendChild(td);   
        var td = document.createElement('td');      
        td.innerHTML = cliente.last_name;
        tr.appendChild(td);   
        var td = document.createElement('td');      
        td.innerHTML = cliente.last_connected_ip;
        tr.appendChild(td);   
        c++;
    })
}

function getById(number1,number2)
{
    return new Promise(function(Resolve,Reject){
        datos = [];
        var request = new XMLHttpRequest();
        request.open('GET','https://utn-2019-avanzada2-tp5.herokuapp.com/records?from=' 
                     + number1.toString() + '&to=' + number2.toString());
        request.responseType = 'text';
        request.onload = function(){
            if(request.status == 200){
                Resolve(request.response);
                //console.log(request.response);
                datos = JSON.parse(request.response);
                datos.reverse();
                buildHtmlTable();
            }
            else{
                Reject(Error("No se pudo comunicar con el servico: " + request.statusText));
                console.log("error");
            }
        }

        request.onerror = function(){
            Reject(Error("Problemas de internet"));
        }

        request.send();
    })
}

function getCount()
{
    return new Promise(function(Resolve,Reject){
        datos = [];
        var request = new XMLHttpRequest();
        request.open('GET','https://utn-2019-avanzada2-tp5.herokuapp.com/records/total');
        request.responseType = 'text';
        request.onload = function(){
            if(request.status == 200){
                Resolve(request.response);
                //console.log(request.response);
                alert(request.response);
            }
            else{
                Reject(Error("No se pudo comunicar con el servico: " + request.statusText));
                console.log("error");
            }
        }

        request.onerror = function(){
            Reject(Error("Problemas de internet"));
        }

        request.send();
    })
}