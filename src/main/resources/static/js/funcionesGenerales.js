/*function pintarDatos(datos, columnaParaMostrar, tipoTabla){

    let htmlParaIsertar = "";
    htmlParaIsertar += "<thead><tr><th>Titulo</th></tr></thead>";
    htmlParaIsertar += "<tbody>";
    for(let i=0; i<datos.length; i++){
        
        htmlParaIsertar += "<tr>";
                                                    //redireccionarDetalle(datos[i].id,"tipoTabla")
        htmlParaIsertar += "<td><a href='#' onClick='redireccionarDetalle("+datos[i].id+",\""+tipoTabla+"\");'>"+datos[i][columnaParaMostrar]+"</a></td>";
        //htmlParaIsertar += "<td><a href='#' onClick=''>"+datos[i][columnaParaMostrar2]+"</a></td>"
        //htmlParaIsertar += "<td><a href='#' onClick=''>"+datos[i].brand+"</a></td>"
       // htmlParaIsertar += "<td><a href='#' onClick=''>"+datos[i].model+"</a></td>"
        //htmlParaIsertar += "<td><a href='#' onClick=''>"+datos[i].category_id+"</a></td>"

        htmlParaIsertar += "</tr>"
    }

    htmlParaIsertar += "</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlParaIsertar);
}

function redireccionarDetalle(id, tipoTabla){
    //guarda los datos de la sesion
    sessionStorage.setItem('id',id);
    sessionStorage.setItem('tipoTabla',tipoTabla);
    location.href='detalle.html';
}*/