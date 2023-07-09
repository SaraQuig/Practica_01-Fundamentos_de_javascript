// Función para calcular el impuesto a la renta
function calcularImpuestoRenta() {
    // Registrar los ingresos
    var ingresos = parseFloat(prompt("INGRESOS:"));
    
    // Colocar los gastos deducibles
    var gastosDeducibles = parseFloat(prompt("GASTOS DEDUCIBLES:"));
    
    // Obtener la base imponible
    var baseImponible = ingresos - gastosDeducibles;
    
    // Calcular el excedente
    var excedente = baseImponible - 5000; // Suponemos una fracción básica de 5000
    
    // Calcular el porcentaje de excedente
    var porcentajeExcedente;
    if (excedente <= 0) {
      porcentajeExcedente = 0;
    } else if (excedente <= 5000) {
      porcentajeExcedente = 5;
    } else if (excedente <= 10000) {
      porcentajeExcedente = 10;
    } else if (excedente <= 20000) {
      porcentajeExcedente = 15;
    } else {
      porcentajeExcedente = 20;
    }
    
    // Calcular el impuesto a la renta para el año 2021
    var impuestoRenta = (baseImponible * (porcentajeExcedente / 100)) + porcentajeExcedente;
    
    // Mostrar el resultado
    alert("El impuesto a la renta es: " + impuestoRenta);
  }
  
  // Ejecutar la función para calcular el impuesto a la renta
  calcularImpuestoRenta();
  