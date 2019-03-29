var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xLobo = aleatorio (0, 420);
var yLobo = aleatorio (0, 420);
var movimiento = 25;
var cantidadVacas = aleatorio (0, 10);
var cantidadCerdos = aleatorio (0, 15);
var cantidadPollos = aleatorio (0, 10);

var fondo = {
	url: "tile.png",
	cargaOK: false
}
var vaca = {
	url: "vaca.png",
	cargaOK: false
};
var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};
var pollo = {
	url: "pollo.png",
	cargaOK: false
};
var lobo = {
	url: "lobo.png",
	cargaOK: false,
};

var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}
function cargarVacas()
{
	vaca.cargaOK = true;
	vaca.x = [];
	vaca.y = [];
	for(var v=0; v < cantidadVacas; v++)
	{
		vaca.x[v] = aleatorio(0, 7) * 60;
		vaca.y[v] = aleatorio(0, 7) * 60;
	}
	dibujar();
}
function cargarCerdos()
{
	cerdo.cargaOK = true;
	cerdo.x = [];
	cerdo.y = [];
	for(var c=0; c < cantidadCerdos; c++)
	{
		cerdo.x[c] = aleatorio(0, 7) * 60;
		cerdo.y[c] = aleatorio(0, 7) * 60;
	}
	dibujar();
}
function cargarPollos()
{
	pollo.cargaOK = true;
	pollo.x = [];
	pollo.y = [];
	for(var p=0; p < cantidadPollos; p++)
	{
		pollo.x[p] = aleatorio(0, 7) * 60;
		pollo.y[p] = aleatorio(0, 7) * 60;
	}
	dibujar();
}
function cargarLobo()
{
	lobo.cargaOK = true;
	dibujar();
};

function dibujar()
{	
	if (fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if (vaca.cargaOK)
	{	
		console.log(cantidadVacas);
		for(var v=0; v < cantidadVacas; v++)
		{	
			papel.drawImage(vaca.imagen, vaca.x[v], vaca.y[v]);
		}
	}
	if (cerdo.cargaOK)
	{	
		console.log(cantidadCerdos);
		for(var c=0; c < cantidadCerdos; c++)
		{	
			papel.drawImage(cerdo.imagen, cerdo.x[c], cerdo.y[c]);
		}
	}
	if (pollo.cargaOK)
	{	
		console.log(cantidadPollos);
		for(var p=0; p < cantidadPollos; p++)
		{	
			papel.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
		}
	}
	if (lobo.cargaOK)
	papel.drawImage(lobo.imagen, xLobo, yLobo);
}

function dibujarLobo()
{
	if(lobo.cargaOK)
	{
		papeldrawImage(lobo.imagen, lobo.x, lobo.y)
	}
}

function dibujarFondo()
{
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0, 0)
	}
}

function aleatorio(min, maxi) {
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

function moverLobo(evento){
	var movimiento = 20;
	var teclas = {
		UP:38, DOWN:40, LEFT:37, RIGHT:39
	}
	switch (evento.keyCode){
		case teclas.UP:
		if (yLobo > 0){
			yLobo = yLobo - movimiento;
			dibujar();
		}
		break;
		case teclas.DOWN:
		if (yLobo < 420){
			yLobo = yLobo + movimiento;
			dibujar();
		}
		break;
		case teclas.LEFT:
		if (xLobo > 0){
			xLobo = xLobo - movimiento;
			dibujar();
		}
		break;
		case teclas.RIGHT:
		if (xLobo < 420){
			xLobo = xLobo + movimiento;
			dibujar();
		}
		break;
		default:
			console.log("Otra tecla : " + evento.key);
		break;
	}
}

