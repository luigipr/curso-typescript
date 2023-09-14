function multiply1(num1: number, num2: number) {
    return num1 * num2;
}

function sum2(num1: number, num2: number) {
    return num1 * num2;
}

function isEven1(num: number) {
    return num % 2 === 0;
}

function showResult1(result: number) {
if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    let num1: string | number | null = Number(prompt("First Number"));
    let num2: string | number | null = Number(prompt("Second Number"));
    num1 = Number(num1)
    num2 = Number(num2)
    if(isNaN(num1) || isNaN(num2)) return console.log('não foi possivel executar comesses valores')
    let result = sum(num1 ,num2);
    result += multiply(1,2);
    showResult(result);
})();
