const ingresoInput = document.querySelector('#ingreso');
const btn_calcular = document.querySelector('.btn_SegSocial');
const btnCalculoNuevo = document.querySelector('.btn_again');
const resultadoSeguridadSocial = document.querySelector('#resultado');


btn_calcular.addEventListener('click', seguridadSocialIndependiente);
btnCalculoNuevo.addEventListener('click', calcularNuevamente);

function calcularIngresoBaseCotizacion (ingresoInput){
    const ingresoBaseCotizacion = ingresoInput.value * 0.4;
    return ingresoBaseCotizacion
};


function seguridadSocialIndependiente (){
    const ibc = calcularIngresoBaseCotizacion(ingresoInput);
    const salud = (12.5/100);
    const pension = (16/100);

const saludIndp = ibc * salud;
const pensionIndp = ibc * pension;
const sgsInd = saludIndp + pensionIndp;

console.log("Su IBC es " + "$" + ibc );

console.log("Total Seguridad a pagar (sin ARL es) " + "$" + sgsInd);

resultadoSeguridadSocial.innerText = "Total Seguridad a pagar (sin ARL es) " + "$" + sgsInd;
}

function calcularNuevamente(){
    ingresoInput.value = "";
}
