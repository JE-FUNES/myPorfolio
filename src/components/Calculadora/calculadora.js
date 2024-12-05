export const calculadora = () => {

    document.addEventListener("DOMContentLoaded", function () {
        var calcularButton = document.getElementById("calcularButton");
        
        console.log("Evento calcular disparado");
      function calcular() {
          // Obtén los valores de los inputs y asegúrate de que son números
        var alto = parseFloat(document.getElementById("alto").value.replace(",", ".")) || 0;
        var ancho = parseFloat(document.getElementById("ancho").value.replace(",", ".")) || 0;

        // Valida los valores
        if (alto <= 0 || ancho <= 0) {
          alert("Por favor, ingresa valores válidos para el alto y el ancho.");
          return; // Detener el cálculo si los valores no son válidos
        }
        
        // Calcula metros cuadrados
        var metrosCuadrados = Math.ceil(alto * ancho);

        // Garantiza un mínimo de 2 m²
        if (metrosCuadrados < 2) {
          metrosCuadrados = 2;
        }

        // Calcula el costo total
        var valorTotal = metrosCuadrados * 8500;
        
        // Actualiza el DOM
        document.getElementById("resultado").innerHTML = "Metros cuadrados: " + metrosCuadrados;
        document.getElementById("carrito").innerHTML =
        "Cambia la cantidad a " +
          metrosCuadrados +
          " unidades para ver el valor de lo que necesitas.";
      }
      
      // Añade eventos para clic y toque
      calcularButton.addEventListener("click", function (event) {
          event.stopPropagation(); // Detiene la propagación del evento
          event.preventDefault();  // Previene acciones predeterminadas
          console.log("Forzando el evento click.");
          calcular();
        });
        
        calcularButton.addEventListener("touchstart", function (event) {
            event.stopPropagation();
            event.preventDefault();
            console.log("Forzando el evento touchstart.");
            calcular();
        });
        
        
    });
}
 