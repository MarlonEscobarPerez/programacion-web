

/*primer punto*/
let nombre=prompt('Introduzca su nombre')
let edad=prompt('Digite su edad')
var suma= parseInt(edad)+1

console.log("Hola " + nombre + ", tienes "+ edad + " años y el año que viene tendrás " + suma);

/*segundo punto*/
let figura= prompt('A que figura desea calcularle el area? digite a si es un triangulo, b si er un rectangulo y c si es un circulo')

if (figura === 'a') {
    forma = "triángulo";
    let b = prompt('Digite la base del triángulo');
    let h = prompt('Digite la altura del triángulo');

    area = (parseFloat(b) * parseFloat(h)) / 2;
} else if (figura === 'b') {
    forma = "rectángulo";
    let b = prompt('Digite la base del rectángulo');
    let h = prompt('Digite la altura del rectángulo');

    area = parseFloat(b) * parseFloat(h);
} else if (figura === 'c') {
    forma = "círculo";
    let r = prompt('Digite el radio del círculo');

    area = Math.PI * (parseFloat(r) * parseFloat(r));
}

console.log("El área del " + forma + " es: " + area);


/*tercer punto*/ 
let numero=prompt('Digite un numero')

for (let i = 0; i < parseFloat(numero)+1; i++) {
    if (i % 2 === 0) {
        console.log(i + " es par")
    }else if(i%2!=0){
        console.log(i + " es impar")
    }
    
}


/*4 punto*/ 
let num= prompt('Digite un numero mayor a 1')
let prim

    if (num <= 1) {
        prim=0
    }
    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prim=0
    }
    }

    if (prim===0) {
console.log("el numero "+ num+" no es primo")
        
    }else{
        console.log("el numero "+ num+" si es primo")
    }
   
    /*5 punto*/ 
    let numero_factorial=prompt('Digite el numero el cual quiere que se le encuentre el factorial')
let total=1
numero_factorial = parseInt(numero_factorial);

for (let i = 1; i <= numero_factorial; i++) {
    total = total * i;
}

console.log("El factorial de " + numero_factorial + " es: " + total);


     /*6 punto*/ 
     let sum=0
     let cant=0
 do {
    let n=parseInt(prompt('Digite un numero'))
     sum=sum+n
     cant=cant+1
 } while (sum<=50);
 console.log("la suma ha llegado a " +sum+ " con una cantidad de "+cant+" numeros digitados")


 /*7 punto*/
 