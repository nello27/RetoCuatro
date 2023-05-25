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

function traerDatosGama(){


    $.ajax({
        url:"http://localhost:8080/CarsApp/api/Gama/all",
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
    let htmlParaInsertar = "";
    htmlParaInsertar += "<thead><tr><th>Carros</th><th>Acciones</th></tr></thead>";
    htmlParaInsertar += "<tbody>";
    for(i = 0; i < items.length; i++){
        htmlParaInsertar += "<tr>";
        htmlParaInsertar += "<td class='idGama' style='display: none;'>" + items[i].idGama + "</td>";
        htmlParaInsertar += "<td>" + items[i].name + "</td>";
        htmlParaInsertar += "<td>" + items[i].description + "</td>";
        htmlParaInsertar += "<td><button class='btn btn-danger btn-sm btnEliminar' data-id='" + items[i].idGama + "'>Eliminar</button></td>";
        htmlParaInsertar += "</tr>";
    }
    htmlParaInsertar += "</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlParaInsertar);

    // Agregar evento de click al botón de eliminar
    $(".btnEliminar").on("click", function(){
        var idGama = $(this).data("id");
        borrar(idGama);
    });
}

function GuardarDatos(){

        let myData= {
        "idCar": $("#idGama").val(),
        "name": $("#name").val(),
        "description": $("#description").val()
        };
        //let dataToSend=JSON.stringify(myData);
        console.log(myData);
    $.ajax({
        url:"http://localhost:8080/CarsApp/api/Gama/save",
            type:"POST",
            contentType: 'application/json',
            data:JSON.stringify(myData),
        success:function(respuesta){
            $("#idGama").val(""),
            $("#name").val(""),
            $("#description").val(""),
            traerDatosGama();
            alert("Se he guardado")
        },
        
        error:function(error){
            
            console.log("Error"+$(error))
        }

    });


}

function ActualizarInformaciongama() {
    
    let idGama = $("#idGama").val();
    let name = $("#name").val();
    let description = $("#description").val();

    let myData = {
        idGama: idGama,
        name: name,
        description: description
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: "http://localhost:8080/CarsApp/api/Gama/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        dataType: "json",
        success: function(respuesta) {
            $("#idGama").val("");
            $("#name").val("");
            $("#description").val("");
            traerDatosGama();
            alert("Se ha actualizado correctamente");
        },
        error: function(error) {
            console.log(error);
            alert("Error al actualizar la información");
        }
    });
}
    
function borrar(idGama) {
    
    //let idGama = $("#idGama").val();
    
    $.ajax({
        url: "http://localhost:8080/CarsApp/api/Gama/" + idGama,
        type: "DELETE",
        contentType: "application/json",
        dataType: "JSON",
        success: function(respuesta) {
            //Acá se puede validar la respuesta.
            $("#idGama").empty();
            $("#name").val("");
            $("#description").val("");
            traerDatosGama();
            alert("Se ha eliminado");
        },
        error: function(error) {
            console.log("Error" + $(error));
        }
    });
}
