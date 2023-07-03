const ingresoInput = document.querySelector('#ingreso');
const btn_calcular = document.querySelector('#btn_SegSocial');
const btnCalculoNuevo = document.querySelector('#btn_again');
const resultadoSeguridadSocial = document.querySelector('#resultadoTotal');
const resultadoIBC = document.querySelector('#resultadoibc');
const resultadoSalud = document.querySelector('#resultadosalud');
const resultadoPension = document.querySelector('#resultadopension');
const resultadoFsp = document.querySelector('#resultadofsp');



btn_calcular.addEventListener('click', seguridadSocialIndependiente);
btnCalculoNuevo.addEventListener('click', calcularNuevamente);

function calcularIngresoBaseCotizacion (ingresoInput){
    const ingresoBaseCotizacion = ingresoInput.value * 0.4;
    return ingresoBaseCotizacion
};

function calcularFondoSolidarioPension (ingresoInput){
    const salarioMinimo = 1300606;
    let fsp = 0;
    let ibc = calcularIngresoBaseCotizacion(ingresoInput);
    let ingresos = parseFloat(ingresoInput.value);


    if(ibc >= salarioMinimo * 20){
        fsp = ibc * 0.02;
    }else if(ibc >= salarioMinimo * 19){
        fsp = ibc * 0.018;
    }else if(ibc >= salarioMinimo * 18){
        fsp = ibc * 0.016;
    }else if(ibc >= salarioMinimo * 17){
        fsp = ibc * 0.014;
    }else if(ibc >= salarioMinimo * 16){
        fsp = ibc * 0.012;
    }else if(ibc >= salarioMinimo * 4){
        fsp = ibc   * 0.01;
    }

    document.getElementById('resultadofsp').innerText = "$ " + fsp.toLocaleString('es-CO');
    
    return fsp
}


function calcularArl(ingresoInput){
    
    let nivelRiesgo = document.querySelector('#nivel-riesgo').value;
    let arl;
    iBc= ingresoInput.value * 0.40;

switch(nivelRiesgo){
    case 'Ninguno':
        arl = iBc * 0;
    break;
    case 'Nivel_I':
    arl = iBc * (0.522/100);
    break;
    case 'Nivel_II':
    arl = iBc * (1.044/100);
    break;
    case 'Nivel_III':
    arl = iBc * (2.436/100);
    break;
    case 'Nivel_IV':
    arl = iBc * (4.350/100);
    break;
    case 'Nivel_V':
    arl = iBc * (6.960/100);
    break
}
document.getElementById('NivelSeleccionado').innerText = "$" + `${arl.toLocaleString('es-CO')}`; 
//seguridadSocialIndependiente();
return arl;
}

//Boton Calcular
function seguridadSocialIndependiente (){

    if (!ingresoInput.value) {
        alert("Por favor, introduce un valor de ingreso.");
        return;
    }
    const ibc = calcularIngresoBaseCotizacion(ingresoInput);
        resultadoIBC.innerText ="$" +ibc.toLocaleString('es-CO');
    const salud = (12.5/100);
    const pension = (16/100);
    const arlNivel = calcularArl(ingresoInput);
    const fspension = calcularFondoSolidarioPension(ingresoInput);

        
const saludIndp = ibc * salud;
    resultadoSalud.innerText ="$ " + saludIndp.toLocaleString('es-CO');
const pensionIndp = ibc * pension;
    resultadoPension.innerText ="$ " + pensionIndp.toLocaleString('es-CO');
const sgsInd = saludIndp + pensionIndp + arlNivel + fspension;

resultadoSeguridadSocial.innerText = "$" + sgsInd.toLocaleString('es-CO');

}

function calcularNuevamente(){
    ingresoInput.value = "";
    
}
