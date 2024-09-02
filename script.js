let showButton = document.querySelector('.showButton');
let clearButton = document.querySelector('.clearButton');
let key = document.querySelector('.key');
let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890/|\!@#$%^&*()?:';
// let symbols = 'ABCDEF0123456789';
let maxSymbols = document.querySelector('.maxSymbols')

let result;

showButton.addEventListener('click', ()=>{
 let res = [];

 for(let i = 0; i <= Number(maxSymbols.value) - 1; i++){
    res.push(symbols[random(1, symbols.length)]);
 }
 key.textContent = res.join('');
}
); 
maxSymbols.addEventListener('focus', ()=>maxSymbols.value = '');


function random (min, max) {
    result = Math.round(Math.random()*((max-min)+min));
    return result;
}
clearButton.addEventListener('click', ()=>{
    key.textContent = '';
    maxSymbols.value = '';
});

