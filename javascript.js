const calc = document.querySelector("#calc");
const del = calc.querySelector("#del");
const clear = calc.querySelector("#clear");
const numcontainer = calc.querySelector("#numcontainer");
const operator = calc.querySelector("#operators");
const operators = operator.querySelectorAll("button");


for (let i of operators) {
  i.addEventListener("click", function (event) {
    updatedisplay(0, i.id);
  });
}

let numbers = [];
function addnumber() {
  const order = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  for (let i of order) {
    const newnum = document.createElement("button");
    newnum.id = `${i}`;

    newnum.textContent = `${i}`;
    newnum.style.border = "1px solid #333";
    newnum.style.width = "120px";
    newnum.style.height = "50px";
    newnum.style.margin = "1px";
    numcontainer.appendChild(newnum);
    numbers.push(newnum);
    newnum.addEventListener("click", function (event) {
      updatedisplay(newnum.id, "numinput");
    });
  }
  const equals = document.createElement("button");
  const decimal = document.createElement("button");
  equals.id = `equals`;
  equals.textContent = `=`;
  equals.style.border = "1px solid #333";
  equals.style.width = "120px";
  equals.style.height = "50px";
  equals.style.margin = "1px";
  decimal.id = `decimal`;
  decimal.textContent = `.`;
  decimal.style.border = "1px solid #333";
  decimal.style.width = "120px";
  decimal.style.height = "50px";
  decimal.style.margin = "1px";
  numcontainer.appendChild(decimal);
  numcontainer.appendChild(equals);
  equals.addEventListener('click',function(event){updatedisplay(0,'equals')})
}
const display = document.querySelector("#display");

let currentvalue = 0;
let currentvalue2=0;
display.textContent=currentvalue
let currentoperation = "";

let operatorObject={
    add: (a, b) => `${a+b}`,
    subtract: (a, b) => `${a-b}`,
    multiply: (a, b) => `${a*b}`,
    divide: (a, b) => `${a/b}`
}
let operatorString={
    add: '+',
    subtract:'-' ,
    multiply:'×' ,
    divide: '/'
}

function updatedisplay(num, operation) {
  if (
    operation === "multiply" ||
    operation === "divide" ||
    operation == "subtract" ||
    operation == "add"
  ) {
    currentoperation = operation;
    display.textContent=`${operatorString[`${currentoperation}`]}`
    console.log(currentoperation);
  }
  //add
  //need to add functionality to operation buttons
  //multiply
  //divide
  //subtract
  //equals
  //clear
  //delete
  //decimal
  //numinput
  if (operation === "numinput" && currentoperation==='') {
    if (`${currentvalue}`.length === 1 && Number(currentvalue) === 0) {
      currentvalue = num;
      display.textContent = `${num}`;
    } else {
      currentvalue = Number(`${currentvalue}` + `${num}`);
      display.textContent = currentvalue;
    }
  }
  else if(operation==='numinput' && currentoperation!=''){
    if (`${currentvalue2}`.length === 1 && Number(currentvalue2) === 0) {
        currentvalue2 = num;
        display.textContent = `${operatorString[`${currentoperation}`]}` +`${num}`;
      } else {
        currentvalue2 = Number(`${currentvalue2}` + `${num}`);
        display.textContent = `${operatorString[`${currentoperation}`]}` + currentvalue2;
      }
    

  }

  if (operation==='equals'){
    currentvalue=operatorObject[`${currentoperation}`](Number(currentvalue),Number(currentvalue2))
    display.textContent=currentvalue
    console.log(currentvalue,currentvalue2)
    currentvalue2=0

  }

}

clear.addEventListener('click',function(event){
    currentvalue=0
    currentvalue2=0
    display.textContent=0
    currentoperation=''
})

del.addEventListener('click',function(event){
    if (currentoperation===''){
        currentvalue=Number(`${currentvalue}`.slice(0,-1))
        display.textContent=currentvalue
    }
    else if(currentoperation!==''){
        currentvalue2=Number(`${currentvalue2}`.slice(0,-1))
        display.textContent=currentvalue2
    }
})

addnumber();
