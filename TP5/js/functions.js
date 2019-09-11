var datos = new Array();

function getAll(){
    var plugin1 = $('#pagination'),
    totalRecords = 0,
    records = [],
    displayRecords = [],
    recPerPage = 10,
    page = 1,
    totalPages = 0;

    var cuerpo = document.getElementById("cuerpo"); 
    while(cuerpo.hasChildNodes())    {
        //if (cuerpo.childElementCount > 1){
            cuerpo.removeChild(cuerpo.lastChild);
            console.log(cuerpo.childElementCount);
        //}
    }
        
    var promise1;
    document.getElementById('spinner').style = "display: inline-block;";
    setTimeout(() => {
        promise1 = new Promise(function(Resolve,Reject){
            var request = new XMLHttpRequest();
            request.open('GET','https://utn-2019-avanzada2-tp5.herokuapp.com/records');
            request.responseType = 'text';
            request.onload = function(){
                if(request.status == 200){
                    Resolve(request.response);
                    records = JSON.parse(request.response);
                    totalRecords = records.length;
                    totalPages = Math.ceil(totalRecords / recPerPage);
                    document.getElementById("spinner").style = "display: none;";
                    apply_pagination();
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
    }, 2000);

	function generate_table() {
		var tr;
		$('#cuerpo').html('');
		for (var i = 0; i < displayRecords.length; i++) {
			tr = $('<tr/>');
			tr.append("<td>" + displayRecords[i].id + "</td>");
			tr.append("<td>" + displayRecords[i].email + "</td>");
            tr.append("<td>" + displayRecords[i].gender + "</td>");
            tr.append("<td>" + displayRecords[i].first_name + "</td>");
            tr.append("<td>" + displayRecords[i].last_name + "</td>");
            tr.append("<td>" + displayRecords[i].last_connected_ip + "</td>");
			$('#cuerpo').append(tr);
		}
	}
	function apply_pagination() {
		plugin1.twbsPagination({
			totalPages: totalPages,
			visiblePages: 6,
			onPageClick: function (event, page) {
				displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
				endRec = (displayRecordsIndex) + recPerPage;
				//console.log(displayRecordsIndex + 'ssssssssss'+ endRec);
				displayRecords = records.slice(displayRecordsIndex, endRec);
				generate_table();
			}
		});
	}
};

function getById(number1,number2)
{
    var plugin1 = $('#pagination'),
    totalRecords = 0,
    records = [],
    displayRecords = [],
    recPerPage = 10,
    page = 1,
    totalPages = 0;

    var cuerpo = document.getElementById("cuerpo"); 
    while(cuerpo.hasChildNodes())    {
        //if (cuerpo.childElementCount > 1){
            cuerpo.removeChild(cuerpo.lastChild);
            console.log(cuerpo.childElementCount);
        //}
    }
        
    var promise1;
    document.getElementById('spinner').style = "display: inline-block;";
    setTimeout(() => {
        promise1 = new Promise(function(Resolve,Reject){
            var request = new XMLHttpRequest();
            request.open('GET','https://utn-2019-avanzada2-tp5.herokuapp.com/records?from=' 
                        + number1.toString() + '&to=' + number2.toString());
            request.responseType = 'text';
            request.onload = function(){
                if(request.status == 200){
                    Resolve(request.response);
                    records = JSON.parse(request.response);
                    totalRecords = records.length;
                    totalPages = Math.ceil(totalRecords / recPerPage);
                    document.getElementById("spinner").style = "display: none;";
                    apply_pagination2();
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
    }, 4000);
    
    function generate_table2() {
		var tr;
		$('#cuerpo').html('');
		for (var i = 0; i < displayRecords.length; i++) {
			tr = $('<tr/>');
			tr.append("<td>" + displayRecords[i].id + "</td>");
			tr.append("<td>" + displayRecords[i].email + "</td>");
            tr.append("<td>" + displayRecords[i].gender + "</td>");
            tr.append("<td>" + displayRecords[i].first_name + "</td>");
            tr.append("<td>" + displayRecords[i].last_name + "</td>");
            tr.append("<td>" + displayRecords[i].last_connected_ip + "</td>");
			$('#cuerpo').append(tr);
		}
	}
	function apply_pagination2() {
		plugin1.twbsPagination({
			totalPages: totalPages,
			visiblePages: 6,
			onPageClick: function (event, page) {
				displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
				endRec = (displayRecordsIndex) + recPerPage;
                //console.log(displayRecordsIndex + 'ssssssssss'+ endRec);
				displayRecords = records.slice(displayRecordsIndex, endRec);
				generate_table2();
			}
		});
	}
}

function getCount()
{
    return new Promise(function(Resolve,Reject){
        //datos = [];
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

// Builds the HTML Table out of myList.
/*function buildHtmlTable() {
    var cuerpo = document.getElementById("clientes"); 
    while(cuerpo.hasChildNodes())    {
        cuerpo.removeChild(cuerpo.firstChild);
    }
    var empTab = document.getElementById('clientes');
    var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    tr = empTab.insertRow(rowCnt);
    var c = 0;
    records.forEach(cliente => 
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
    
    //formatearTabla();
    //formatearTabla2();
}

function formatearTabla(){
    $( ".nav" ).remove();
    $('#clientes').after('<div class="nav" id="nav"></div>');
    var rowsShown = 20;
    var rowsTotal = $('#clientes tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        $('#nav').append('<a class="btn btn-primary btn-xs" href="#" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#clientes tbody tr').hide();
    $('#clientes tbody tr').slice(0, rowsShown).show();
    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function(){

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#clientes tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
    });
}*/