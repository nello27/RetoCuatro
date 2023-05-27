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
    htmlParaIsertar += "<thead class='thead-dark' ><tr><th>Id</th><th>Nombre</th><th>Marca</th><th>año</th><th>descripción</th><th>gama</th></thead>";
    htmlParaIsertar += "<tbody>";
    for(i=0; i<items.length;i++){
        htmlParaIsertar+="<tr>";
        htmlParaIsertar+="<td>"+items[i].idCar+"</td>";
        htmlParaIsertar+="<td><input type='text' class='form-control' id='names' value='"+items[i].name+"'></td>";
        htmlParaIsertar+="<td><input type='text' class='form-control' id='brands' value='"+items[i].brand+"'></td>";
        htmlParaIsertar+="<td><input type='text' class='form-control' id='years' value='"+items[i].year+"'></td>";
        htmlParaIsertar+="<td><input type='text' class='form-control' id='descriptions' value='"+items[i].description+"'></td>";
        htmlParaIsertar+= "<td>" + items[i].gama.name + "</td>";
        htmlParaIsertar += "<td><button class='btn btn-danger btn-sm btnEliminar' data-id='" + items[i].idCar + "'>Eliminar</button></td>";
        htmlParaIsertar += "<td><button class='btn btn-success btn-sm btnActualizar' data-id='" + items[i].idCar + "'>Modificar</button></td>";
        htmlParaIsertar+="</tr>";

    }
    htmlParaIsertar += "</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlParaIsertar);
    
        // Agregar evento de click al botón de eliminar
    $(".btnEliminar").on("click", function(){
        var  idCar = $(this).data("id");
        borrar(idCar);
    });
    
    // Agregar evento de click al botón de actualizar
    $(".btnActualizar").on("click", function() {
    var idCar = $(this).data("id");
    var name = $(this).closest("tr").find("#names").val();
    var brand = $(this).closest("tr").find("#brands").val();
    var year = $(this).closest("tr").find("#years").val();
    var description = $(this).closest("tr").find("#descriptions").val();
    ActualizarInformacioncarros(idCar, name, brand, year ,description);
    });


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



function ActualizarInformacioncarros(idCar, name, brand, year, description ){
    let myData={

        idCar:idCar,
        name:name,
        brand:brand,
        year:year,
        description:description

    };

    let dataToSend=JSON.stringify(myData);

    //alert(dataToSend);
    //let miurl= "http://localhost:8080/demoweb1/cliente/"+myData.idcliente;
    //alert (miurl);
    $.ajax({
        url:"http://localhost:8080/CarsApp/api/Car/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#idCar").empty();
            $("#name").val("");
            $("#brand").val("");
            $("#year").val("");
            $("#description").val("");
            traerDatosCarroscarros();
            alert("Se he Actualizado");
        },
        error: function(error) {
            console.log(error);
            alert("Error al actualizar la información");
        }

    });
}

function borrar(idCar) {
    
    //let idGama = $("#idGama").val();
    
    $.ajax({
        url: "http://localhost:8080/CarsApp/api/Car/" + idCar,
        type: "DELETE",
        contentType: "application/json",
        dataType: "JSON",
        success: function(respuesta) {
            //Acá se puede validar la respuesta.
            $("#idCar").empty();
            $("#name").val("");
            $("#brand").val("");
            $("#year").val("");
            $("#description").val("");
            traerDatosCarroscarros();
            alert("Se ha eliminado");
        },
        error: function(error) {
            console.log("Error" + $(error));
        }
    });
}