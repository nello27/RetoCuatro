function traerinformacion(){


    $.ajax({
        url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/prueba/prueba",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){

            console.log(respuesta);
            pintarRespuesta(respuesta.items);
        }


    });
}

function pintarRespuesta(items){

    let myTable="<table>";

    for(i=0; i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idcostume1+"</td>";
        myTable+="<td>"+items[i].name1+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].year1+"</td>";
        myTable+="</tr>";


    }

    myTable+="</table>";
    $("#resultado").append(myTable);


}

function guardarInformacion(){

    let myData={

        IDCOSTUME1:$("#idcostume1").val(),
        NAME1:$("#name1").val(),
        BRAND:$("#brand").val(),
        YEAR1:$("#year1").val(),
        DESCRIPCION:$("#descripcion").val(),
        IDCATERGORIA:$("#idcatergoria").val(),

    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/prueba/prueba",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#idcostume1").val(),
            $("#name1").val(),
            $("#brand").val(),
            $("#year1").val(),
            $("#descripcion").val(),
            $("#idcatergoria").val(),
            traerinformacion();
            alert("Se he guardado")
        }

    });

}

function editarInformacion(){
    let myData={

        IDCOSTUME1:$("#idcostume1").val(),
        NAME1:$("#name1").val(),
        BRAND:$("#brand").val(),
        YEAR1:$("#year1").val(),
        DESCRIPCION:$("#descripcion").val(),
        IDCATERGORIA:$("#idcatergoria").val(),

    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/prueba/prueba",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idcostume1").val("");
            $("#name1").val("");
            $("#brand").val("");
            $("#year1").val("");
            $("#descripcion").val("");
            $("#idcatergoria").val("");
            traerinformacion();
            alert("Se he guardado")
        }

    });
}

/*function eliminarInformacion(){
    
    var myData2 = $("#idcostume1").val();

    $.ajax({
        url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/prueba/prueba",
        type:"DELETE",
        contentType: "application/json",
        data:myData2,

        success:function(respuesta){

            alert("Se he guardado")
        }

    });
}*/

function eliminarInformacion() {
    
    let myData={

        IDCOSTUME1:$("#idcostume1").val()
        
    }
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/prueba/prueba",
      type:"DELETE",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#div1").empty();
            traerinformacion();
            alert("Se ha eliminado")
      }
    });
}