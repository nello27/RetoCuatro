/*function traerDatosCarros(){

    $.ajax({

        url: 'https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car',
        type: 'GET',
        datatype: 'json',
        succes: function(respuesta){

            pintarDatos(respuesta.items);

        },
        error: function(respuesta, xhr){

            alert("Error peticion")
        }
    });
    
}*/

function traerDatosCarros(){


    $.ajax({
        url:"http://localhost:8080/CarsApp/Car/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){

            console.log(respuesta);
            pintarDatos(respuesta);
        },
        error: function(respuesta, xhr){

            alert("Error peticion")
        }

    });
}

function pintarDatos(items){

    console.log(items);
    let htmlParaIsertar = "";
    htmlParaIsertar += "<thead><tr><th>Carros</th></tr></thead>";
    htmlParaIsertar += "<tbody>";
    for(i=0; i<items.length;i++){
        htmlParaIsertar+="<tr>";
        htmlParaIsertar+="<td>"+items[i].idCar+"</td>";
        htmlParaIsertar+="<td>"+items[i].name+"</td>";
        htmlParaIsertar+="<td>"+items[i].brand+"</td>";
        htmlParaIsertar+="<td>"+items[i].year+"</td>";
        htmlParaIsertar+="<td>"+items[i].description+"</td>";
        htmlParaIsertar+="<td>"+items[i].gama+"</td>";
        htmlParaIsertar+="</tr>";

    }
    htmlParaIsertar += "</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlParaIsertar);


}


function GuardarDatos(){

        let myData= {
        "idCar": $("#idCar").val(),
        "name": $("#name").val(),
        "brand": $("#brand").val(),
        "year": $("#year").val(),
        "description": $("#description").val(),
        "gama": $("#gama").val()
        };
        //let dataToSend=JSON.stringify(myData);
        console.log(myData);
    $.ajax({
        url:"http://localhost:8080/CarsApp/Car/save",
            type:"POST",
            contentType: 'application/json',
            data:JSON.stringify(myData),
        success:function(respuesta){
            $("#id").val(""),
            $("#brand").val(""),
            $("#model").val(""),
            $("#category_id").val(""),
            traerInformacion();
            alert("Se he guardado")
        },
        
        error:function(error){
            
            console.log("Error"+$(error))
        }

    });


}

function ActualizarInformacion(idelemento){
    let myData={

        idcliente:$("#idcliente").val(),
        nombre:$("#nombre").val(),
        direccion:$("#direccion").val(),
        correo:$("#correo").val()

    };

    let dataToSend=JSON.stringify(myData);

    alert(dataToSend);
    let miurl= "http://localhost:8080/demoweb1/cliente/"+myData.idcliente;
    alert (miurl);
    $.ajax({
        url:"http://localhost:8080/demoweb1/cliente/"+myData.idclient,
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#idcliente").empty();
            $("#nombre").val("");
            $("#direccion").val("");
            $("#correo").val("");
            traerInformacion();
            alert("Se he Actualizado")
        }

    });
}

