const messagem: string = "Ola agora estamos com typescript";
console.log(messagem);

function Somar( a:string , b:string ) {
    return a+b;
}

const result = Somar(4, 3);
console.log(`Calculo de somar:${result}`)