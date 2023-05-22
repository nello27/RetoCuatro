function traerDatosClientes(){


    $.ajax({
        url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){

            console.log(respuesta);
            pintarDatos(respuesta.items, 'name', 'client');
        },
        error: function(respuesta, xhr){

            alert("Error peticion")
        }

    });
}

function GuardarDatos(){

        let EnviarDatos={
            'id':$("#id").val(),
            'name':$("#name").val(),
            'email':$("#email").val(),
            'age':$("#age").val(),
    
        };
    
        //let dataToSend=JSON.stringify(myData);
    
        $.ajax({

            url:"https://g127742c93d7e5c-r09bclxntcqiu4s0.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
            type:"POST",
            contentType: 'application/json',
            data:JSON.stringify(EnviarDatos),

            success:function(respuesta){

                traerDatosClientes();
                alert("Se he guardado");
            },
            error: function(respuesta, xhr){
    
                alert("Error peticion")
            }
    
        });


}

