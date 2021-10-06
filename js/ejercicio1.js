//Rubén Torres
'use strict'

//Variables
let num;
let divisores = [2, 3, 5, 7];

do{
    num = parseInt(prompt('Introduce un número:'));
}while(isNaN(num));
console.log(`El número que has indicado es: ${num}`);

for(let i=0;i<divisores.length;i++)
    if(num%divisores[i]==0)
        console.log(`Es divisible entre ${divisores[i]}`);