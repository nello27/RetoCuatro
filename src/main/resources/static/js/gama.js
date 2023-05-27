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
    htmlParaInsertar += "<thead class='thead-dark'><tr><th>Nombre</th><th>Descripción</th><th>Anular</th><th>Editar</th></tr></thead>";
    htmlParaInsertar += "<tbody>";
    for(i = 0; i < items.length; i++){
        htmlParaInsertar += "<tr>";
        htmlParaInsertar += "<td class='idGama' style='display: none;' id='idGamas'>" + items[i].idGama + "</td>";
        htmlParaInsertar += "<td><input type='text' class='form-control' id='names' value='" + items[i].name + "'></td>";
        htmlParaInsertar += "<td><input type='text' class='form-control' id='descriptions' value='"+items[i].description + "'></td>";
        htmlParaInsertar += "<td><button class='btn btn-danger btn-sm btnEliminar' data-id='" + items[i].idGama + "'>Eliminar</button></td>";
        htmlParaInsertar += "<td><button class='btn btn-success btn-sm btnActualizar' data-id='" + items[i].idGama + "'>Modificar</button></td>";
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
    
    // Agregar evento de click al botón de actualizar
    $(".btnActualizar").on("click", function() {
    var idGama = $(this).data("id");
    var name = $(this).closest("tr").find("#names").val();
    var description = $(this).closest("tr").find("#descriptions").val();
    ActualizarInformaciongama(idGama, name, description);
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

function ActualizarInformaciongama(idGama,name,description) {
    
    //let idGama = $("#idGama").val();
    //let name = $("#name").val();
    //let description = $("#description").val();

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
