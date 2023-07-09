var ingresos=25000;
var gastos=6000;
var baseImponible=ingresos-gastos;
var impuesto=0;
var impuestoFraccionBasica=0;
var porcentajeExcedente=0;
var excedente=0;
if (baseImponible>17854 && baseImponible<=21442)
{
impuestoFraccionBasica=511;
excedente=baseImponible-17854;
porcentajeExcedente=excedente*0.12;
}
impuesto=impuestoFraccionBasica+porcentajeExcedente;
console.log('Usted debe cancelar por Impuesto a la Renta '+impuesto)
//document.write("<h3>Su impuesto a la renta es </h3>"+impuesto)
