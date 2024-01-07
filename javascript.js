const calc =document.querySelector("#calc");
const del =calc.querySelector("#del");
const clear =calc.querySelector("#clear");
const numcontainer  =calc.querySelector("#numcontainer");
let numbers=[]
function addnumber(){
   
    for(let i=0; i<10;i++){
        const newnum =document.createElement('button');
        newnum.id = `${i}`
        newnum.textContent= `${i}`
        newnum.style.border='1px solid #333'
        newnum.style.width='120px'
        newnum.style.height='50px'
        newnum.style.margin='1px'




        numcontainer.appendChild(newnum)
        numbers.push(newnum)
        newnum.addEventListener('click',function(event){
            console.log(`${i}`)})
    }
    
}


addnumber();