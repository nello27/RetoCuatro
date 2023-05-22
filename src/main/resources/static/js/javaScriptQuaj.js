function comprobarClave() {
    let clave1 = document.f1.clave1.value
    let clave2 = document.f1.clave2.value

    if (clave1 == clave2) {
      alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo")

    } else {
      alert("Las dos claves son distintas...")
      document.getElementById("mensajeErrorclave").innerHTML = "Las dos claves son distintas...";
      document.f1.clave2.value = "";
    }
  }
  function validarAlfanumerico(input) {
    var regex = /^[a-zA-Z0-9]*$/;
    var valorInput = input.value;
    if (!valorInput.match(regex)) {
      document.getElementById("mensajeError").innerHTML = "El campo debe ser alfanumérico.";
      input.value = "";
    } else {
      document.getElementById("mensajeError").innerHTML = "";
    }
  }

  function validarNombre(input) {

    var valorInput = input.value;
    if (isNaN(valorInput)) {
      document.getElementById("mensajeErrornombre").innerHTML = "";
    } else {
      document.getElementById("mensajeErrornombre").innerHTML = "El campo debe ser Caracter.";
      input.value = "";
    }

  }
  function confirmExit() {
    if (confirm("¿Está seguro que desea cancelar su registro?")) {
      // Si el usuario hace clic en "Aceptar", entonces envía al home
      window.location.href = "home.html";
    }
  }

  //movimiento contenedores descenso
  window.onload = function () {

    document.querySelector('.formulario-container').classList.add('active');
    
  };

  const imagen = document.getElementById('imagen');

  imagen.addEventListener('click', () => {
    imagen.style.transform = 'scale(0.8)';

    setTimeout(() => {
      imagen.style.transform = 'scale(1)';
    }, 300);
  });