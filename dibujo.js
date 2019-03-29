var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick()
{
	var lineas = parseInt(texto.value);
	var l = 0;
	var yi, xf;
	var xi, yf;
	var colorcito = "#FAA";
	var espacio = ancho / lineas;

for(l = 0; l < lineas; l++)
{
	yi = espacio *l;
	xf = espacio * (l + 1);
	dibujarLinea("#AAF", 0, yi, xf, 300);
	console.log("Linea " + l);
	l = l++;
}

for(l = 0; l < lineas; l++)
{
	yf = espacio *l;
	xi = espacio * (l + 1);
	dibujarLinea("#AAF",xi, 0, 300, yf);
	console.log("Linea " + l);
	l = l++;
}

dibujarLinea(colorcito, 1, 1, 1, ancho - 1);
dibujarLinea(colorcito, 1, ancho - 1, ancho - 1, ancho - 1);
dibujarLinea(colorcito, ancho - 1, ancho - 1, 1, ancho - 1);
dibujarLinea(colorcito, ancho - 1, 1, ancho - 1, ancho - 1);
}
