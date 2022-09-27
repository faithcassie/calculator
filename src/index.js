let display = document.getElementById('display');
// let num1 = '';
// let num2 = '';
// let operator = null;


const addNumber = (num) => {
    display.innerHTML += num;
}

const result = () => {
    let Input = document.getElementById('display').innerHTML;
    let Output = eval(Input);
    // console.log(Input);
    // console.log(Output);
    display.innerHTML = Output;

}
const clr = () => {
    display.innerHTML = '';
}

const del = () => {
    let remove = document.getElementById('display').innerHTML;
    display.innerHTML = remove.slice(0,-1);
}