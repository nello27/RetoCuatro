function traerDetalle(){

    let id = sessionStorage.getItem('id');
    let tipoTabla = sessionStorage.getItem('tipoTabla');

    $.ajax({
        url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/"+tipoTabla+"/"+tipoTabla+"/"+id,
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarDetalle(respuesta.items);
        },
        error: function(respuesta, xhr){

            alert("Error peticion")
        }

    });
}

function pintarDetalle(datos){
    
    let htmlParaInsertar = "";
    htmlParaInsertar += "<thead><tr>";
    Object.keys(datos[0]).forEach(elemento => htmlParaInsertar+='<th>'+elemento+'</th>');

    htmlParaInsertar += "</tr></thead>";

    htmlParaInsertar += "<tbody>";

    for(let i = 0; i<datos.length; i++){

        htmlParaInsertar += "<tr>";
            Object.values(datos[i]).forEach((elemento, indice) => {
                
                if (indice < 1) {
                    htmlParaInsertar+="<td>"+elemento+"</td>";
                }else{
                    htmlParaInsertar+="<td><input value=\""+elemento+"\"></td>"
                }
                
            });

            /*
            Object.values(datos[i]).forEach(elemento => {
                htmlParaInsertar += "<td><input value=\"" + elemento + "\"></td>"; 
            });*/
            

        htmlParaInsertar += "</tr>";

    }

    htmlParaInsertar += "</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlParaInsertar);

}

function EliminarDato(){

    let id = sessionStorage.getItem('id');
    let tipoTabla = sessionStorage.getItem('tipoTabla');

    let datosPorMandar={

        'id':id

    }

    $.ajax({
        url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/"+tipoTabla+"/"+tipoTabla,
        type: "DELETE",
        contentType:"application/json",
        data:JSON.stringify(datosPorMandar),
        success:function(respuesta){
            console.log(respuesta);

            alert("Se ha eliminado");
            location.href='index.html';
        },
        error: function(respuesta, xhr){

            alert("Error peticion")
        }

    });
}

function ActualizarDato(){

    let tipoTabla = sessionStorage.getItem('tipoTabla');

    let datos = '';

    if (tipoTabla=='car') {
        datos = datosCarros();
    }

    if (tipoTabla=='client') {
        datos = datosCliente();
    }

    if (tipoTabla=='message') {
        datos = datosMensaje();
    }

    $.ajax({
        url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/"+tipoTabla+"/"+tipoTabla,
        type: "PUT",
        contentType:"application/json",
        data:JSON.stringify(datos),
        success:function(respuesta){
            console.log(respuesta);

            alert("Se ha Actualizado");
            //location.href='index.html';
        },
        error: function(respuesta, xhr){

            alert("Error peticion")
        }

    });
}

function datosCarros(){

    let fila = document.getElementById('tabla').rows.item(1).cells;

    let datos={

        'id': fila.item(0).innerText,
        'brand':fila.item(1).children[0].value,
        'model':fila.item(2).children[0].value,
        'category_id':fila.item(3).children[0].value


    };

    return datos;
}
function datosCliente(){

    let fila = document.getElementById('tabla').rows.item(1).cells;

    let datos={

        'id': fila.item(0).innerText,
        'name':fila.item(1).children[0].value,
        'email':fila.item(2).children[0].value,
        'age':fila.item(3).children[0].value
    };

    return datos;
}
function datosMensaje(){

    let fila = document.getElementById('tabla').rows.item(1).cells;

    let datos={

        'id': fila.item(0).innerText,
        'messagetext':fila.item(1).children[0].value

    };

    return datos;
}