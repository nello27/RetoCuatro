function traerDatosCarroscarros(){


    $.ajax({
        url:"http://localhost:8080/CarsApp/api/Car/all",
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
        htmlParaIsertar+= "<td>" + items[i].gama.name + "</td>";
        htmlParaIsertar+="</tr>";

    }
    htmlParaIsertar += "</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlParaIsertar);


}


function GuardarDatoscarros() {
    
    //let selectedGamaId = $("#gama").val();
    let selectedGamaId = $("#gama").val();
    let myData = {
        "idCar": $("#idCar").val(),
        "name": $("#name").val(),
        "brand": $("#brand").val(),
        "year": $("#year").val(),
        "description": $("#description").val(),
        "gama": { "idGama": selectedGamaId }
    };
    console.log(myData);
    alert(myData);
    $.ajax({
        url: "http://localhost:8080/CarsApp/api/Car/save",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(myData),
        success: function(respuesta) {
            alert("Se ha guardado el carro exitosamente");
        },
        error: function(error) {
            console.log("Error: " + error);
        }
    });
}



function ActualizarInformacioncarros(idelemento){
    let myData={

        idcliente:$("#idcliente").val(),
        nombre:$("#nombre").val(),
        direccion:$("#direccion").val(),
        correo:$("#correo").val()

    };

    let dataToSend=JSON.stringify(myData);

    //alert(dataToSend);
    //let miurl= "http://localhost:8080/demoweb1/cliente/"+myData.idcliente;
    //alert (miurl);
    $.ajax({
        url:"http://localhost:8080/api/CarsApp/"+myData.idclient,
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

