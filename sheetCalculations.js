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

}

setInterval(calcularPNeto, 100);
setInterval(calcularPasivoNC, 100);
setInterval(calcularPasivoC, 100);
setInterval(totalPNetoPcPnc, 100);