function calcularAnc(){

    let dato1 = parseFloat(document.getElementById('DatoIzq1.2.1').value);
    let dato2 = parseFloat(document.getElementById('DatoIzq1.2.2').value);

    let num1 = parseFloat(document.getElementById('DatoIzq1.1').value);
    let num2 = dato1+dato2;
    let num3 = parseFloat(document.getElementById('DatoIzq1.3').value);
    let num4 = parseFloat(document.getElementById('DatoIzq1.4').value);
    let num5 = parseFloat(document.getElementById('DatoIzq1.5').value);
    let num6 = parseFloat(document.getElementById('DatoIzq1.6').value);


    resultado = num1+num2+num3+num4+num5+num6;

    document.getElementById('DatoIzq1.2').innerText = num2;

    document.getElementById('ActivoNC').innerText = resultado;

    return resultado;

}

function calcularAc(){

    let dato1 = parseFloat(document.getElementById('DatoIzq2.1.1').value);
    let dato2 = parseFloat(document.getElementById('DatoIzq2.1.2').value);
    let dato3 = parseFloat(document.getElementById('DatoIzq2.2.1').value);
    let dato4 = parseFloat(document.getElementById('DatoIzq2.2.2').value);
    let dato5 = parseFloat(document.getElementById('DatoIzq2.2.3').value);

    let num1 = dato1+dato2;
    let num2 = dato3+dato4+dato5;
    let num3 = parseFloat(document.getElementById('DatoIzq2.3').value);
    let num4 = parseFloat(document.getElementById('DatoIzq2.4').value);
    let num5 = parseFloat(document.getElementById('DatoIzq2.5').value);
    let num6 = parseFloat(document.getElementById('DatoIzq2.6').value);

    resultado = num1+num2+num3+num4+num5+num6;

    document.getElementById('DatoIzq2.1').innerText = num1;

    document.getElementById('DatoIzq2.2').innerText = num2;

    document.getElementById('ActivoC').innerText = resultado;

    return resultado;

}

function totalAncAc(){

    resultado = calcularAnc()+calcularAc();

    document.getElementById('TotalAncAc').innerText = resultado;

    return resultado;
}

setInterval(calcularAnc, 100);
setInterval(calcularAc, 100);
setInterval(totalAncAc, 100);



function calcularPNeto(){

    let dato1 = parseFloat(document.getElementById('DatoDer1.3.1').value);
    let dato2 = parseFloat(document.getElementById('DatoDer1.3.2').value);

    let num1 = parseFloat(document.getElementById('DatoDer1.1').value);
    let num2 = parseFloat(document.getElementById('DatoDer1.2').value);
    let num3 = dato1+dato2;
    let num4 = parseFloat(document.getElementById('DatoDer1.4').value);
    let num5 = parseFloat(document.getElementById('DatoDer1.5').value);
    let num6 = parseFloat(document.getElementById('DatoDer1.6').value);
    let num7 = parseFloat(document.getElementById('DatoDer1.7').value);
    let num8 = parseFloat(document.getElementById('DatoDer1.8').value);

    let A1= num1+num2+num3+num4+num5+num6+num7+num8;
    let A2= parseFloat(document.getElementById('A-2').value);

    resultado = A1+A2;

    document.getElementById('DatoDer1.3').innerText = num3;

    document.getElementById('A-1').innerText = A1;

    document.getElementById('PNeto').innerText = resultado;

    return resultado;

}

function calcularPasivoNC(){

    let num1 = parseFloat(document.getElementById('DatoDer2.1').value);
    let num2 = parseFloat(document.getElementById('DatoDer2.2').value);
    let num3 = parseFloat(document.getElementById('DatoDer2.3').value);
    let num4 = parseFloat(document.getElementById('DatoDer2.4').value);
    let num5 = parseFloat(document.getElementById('DatoDer2.5').value);

    resultado = num1+num2+num3+num4+num5;

    document.getElementById('PasivoNC').innerText = resultado;

    return resultado;

}

function calcularPasivoC(){

    let dato1 = parseFloat(document.getElementById('DatoDer3.4.1').value);
    let dato2 = parseFloat(document.getElementById('DatoDer3.4.2').value);
    let dato3 = parseFloat(document.getElementById('DatoDer3.4.3').value);
    let dato4 = parseFloat(document.getElementById('DatoDer3.4.4').value);


    let num1 = parseFloat(document.getElementById('DatoDer3.1').value);
    let num2 = parseFloat(document.getElementById('DatoDer3.2').value);
    let num3 = parseFloat(document.getElementById('DatoDer3.3').value);
    let num4 = dato1+dato2+dato3+dato4;
    let num5 = parseFloat(document.getElementById('DatoDer3.5').value);
    
    resultado = num1+num2+num3+num4+num5;

    document.getElementById('DatoDer3.4').innerText = num4;

    document.getElementById('PasivoC').innerText = resultado;

    return resultado;

}

function totalPNetoPcPnc(){

    resultado = calcularPNeto()+calcularPasivoC()+calcularPasivoNC();

    document.getElementById('TotalPNPNCPC').innerText = resultado;

    return resultado;

}

setInterval(calcularPNeto, 100);
setInterval(calcularPasivoNC, 100);
setInterval(calcularPasivoC, 100);
setInterval(totalPNetoPcPnc, 100);


function porcentajes(){

    if(totalAncAc() !== totalPNetoPcPnc()){

        alert("El contéo del balance no es correcto");

    }else{

    //Anc

    let porcentajeAnc =((calcularAnc() * 100) / totalAncAc()).toFixed(2);
    document.getElementById('porcentajeAnc').innerText = porcentajeAnc+"%";

    //Ac

    let porcentajeAc =((calcularAc() * 100) / totalAncAc()).toFixed(2);
    document.getElementById('porcentajeAc').innerText = porcentajeAc+"%";

    //Pneto

    let porcentajePneto =((calcularPNeto() * 100) / totalPNetoPcPnc()).toFixed(2);
    document.getElementById('porcentajePneto').innerText = porcentajePneto+"%";

    //Pnc

    let porcentajePnc =((calcularPasivoNC() * 100) / totalPNetoPcPnc()).toFixed(2);
    document.getElementById('porcentajePnc').innerText = porcentajePnc+"%";

    //Pc

    let porcentajePc =((calcularPasivoC() * 100) / totalPNetoPcPnc()).toFixed(2);
    document.getElementById('porcentajePc').innerText = porcentajePc+"%";

    }

    porcentajeFinanciacionExterna();
    fondoManiobra();

    function porcentajeFinanciacionExterna(){

    let num1 = calcularPasivoC()+calcularPasivoNC();

    let porcentajeFinanciado = ((num1*100) / totalPNetoPcPnc()).toFixed(2);

    document.getElementById('pFinanc').innerText = porcentajeFinanciado+"% del capital de la empresa corresponde a la financiación externa";

    }

    function fondoManiobra(){

    let maniobra = calcularAc() - calcularPasivoC();
    let situacion;

    if(maniobra >= 0){
        situacion = "Optima"
    }else if(maniobra == 0){
        situacion = "Mala"
    }else{
        situacion = "Critica";
    }

    document.getElementById('FondoManiobra').innerText = "Tu fondo de maniobra es de "+maniobra+"€: Tu situacion es "+situacion;

    }

    //RATIOS DE LA EMPRESA

    endeudamiento();
    solvencia(),
    liquidez();
    tesoreria();

    function endeudamiento(){

        let num1 = calcularPasivoC()+calcularPasivoNC();

        let endeudamiento = (num1 / calcularPNeto()).toFixed(2);

        document.getElementById('endeudamiento').innerText = "Ratio de endeudamiento de "+endeudamiento;

    }
    function solvencia(){

        let num1 = calcularPasivoC()+calcularPasivoNC();

        let solvencia = (totalAncAc() / num1).toFixed(2);

        document.getElementById('solvencia').innerText = "Ratio de solvencia de "+solvencia;

    }
    function liquidez(){

        let liquidez = (calcularAc() / calcularPasivoC()).toFixed(2);

        document.getElementById('liquidez').innerText = "Ratio de liquidez de "+liquidez;

    }
    function tesoreria(){

        let num1 = parseFloat(document.getElementById('DatoIzq2.1.1').value);
        let num2 = parseFloat(document.getElementById('DatoIzq2.1.2').value);

        let num3 = calcularAc()-(num1+num2);

        let tesoreria = (num3 / calcularPasivoC()).toFixed(2);

        document.getElementById('tesoreria').innerText = "Ratio de tesoreria de "+tesoreria;

    }

}