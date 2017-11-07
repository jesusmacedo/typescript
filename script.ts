// Clase 1: ejecutar tsc script.ts en consola para generar el codigo js

function Greeter(greeting: String) {// se agrega el tipo de dato para que el codigo funcione
	this.greeting = greeting;
}

Greeter.prototype.greet = function() {
	return "Hello, " + this.greeting;
}

// Oops, we're passing an object when we want a string. This will print 
// "Hello, [object Object]" instead of "Hello, world" without error.
let greeter = new Greeter("world");// se envia el parametro en el tipo de dato correcto

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
	alert(greeter.greet());
};

document.body.appendChild(button);