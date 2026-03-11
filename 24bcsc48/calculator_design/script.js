

const buttons = document.getElementsByTagName('button');


let dis = document.getElementsByName('resDis')[0];

let b0 = document.getElementsByClassName('0')[0];
let b1 = document.getElementsByClassName('1')[0];
let b2 = document.getElementsByClassName('2')[0];
let b3 = document.getElementsByClassName('3')[0];
let b4 = document.getElementsByClassName('4')[0];
let b5 = document.getElementsByClassName('5')[0];
let b6 = document.getElementsByClassName('6')[0];
let b7 = document.getElementsByClassName('7')[0];
let b8 = document.getElementsByClassName('8')[0];
let b9 = document.getElementsByClassName('9')[0];
let plus = document.getElementsByClassName('plus')[0];
let minus = document.getElementsByClassName('minus')[0];
let into = document.getElementsByClassName('into')[0];
let div = document.getElementsByClassName('div')[0];
let rem = document.getElementsByClassName('rem')[0];
let clr = document.getElementsByClassName('clr')[0];
let equal = document.getElementsByClassName('equal')[0];


b0.addEventListener('click', ()=>{
    dis.value += b0.value;
})
b1.addEventListener('click', ()=>{
    dis.value += b1.value;
})
b2.addEventListener('click', ()=>{
    dis.value += b2.value;
})
b3.addEventListener('click', ()=>{
    dis.value += b3.value;
})
b4.addEventListener('click', ()=>{
    dis.value += b4.value;
})
b5.addEventListener('click', ()=>{
    dis.value += b5.value;
})
b6.addEventListener('click', ()=>{
    dis.value += b6.value;
})
b7.addEventListener('click', ()=>{
    dis.value += b7.value;
})
b8.addEventListener('click', ()=>{
    dis.value += b8.value;
})
b9.addEventListener('click', ()=>{
    dis.value += b9.value;
})
plus.addEventListener('click', ()=>{
    dis.value += plus.value;
})
minus.addEventListener('click', ()=>{
    dis.value += minus.value;
})
into.addEventListener('click', ()=>{
    dis.value += into.value;
})
div.addEventListener('click', ()=>{
    dis.value += div.value;
})
rem.addEventListener('click', ()=>{
    dis.value += rem.value;
})
clr.addEventListener('click', ()=>{
    dis.value = '';
})

equal.addEventListener('click',()=>{

    let res = eval(dis.value);

    dis.value = res;
})