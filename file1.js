

 let saveEl =document.getElementById("save-el");
 let countEl =document.getElementById("count-el");
 let sumEl =document.getElementById("sum-el");

 console.log(countEl);
    console.log(saveEl);

 let count=0;

function increment(){
    count=count+1;
    countEl.innerText=count;
}


function save(){
    let countStr=count+"-";
    saveEl.innerText+=countStr;
   countEl.innerText=0;
    count=0;
    a.innerText="result";
}
function sum()
{
    let sum=0;
    for(let i=0;i<saveEl.length;i++)
    {
        sum+=saveEl[i];

    }
    sumEl.innerText=sum;
}


let a=document.getElementById("ad");
function show()
{
    console.log("button clicked");
    a.innerText="No tickets available for this station";
}




let num1=8;
let num2=2;
document.getElementById("ab").textContent=num1;
document.getElementById("bc").textContent=num2;


function add(){
    let result=num1+num2;
    document.getElementById("res").textContent= "Special Trains = "  + result;
}

function sub(){
    let result=num1-num2;
    document.getElementById("res").textContent="Rajdhani = " + result;
}

function mul(){
    let result=num1*num2;
    document.getElementById("res").textContent= "Vande Bharat = " + result;
}

function div(){
    let result=num1/num2;
    document.getElementById("res").textContent= "Express Trains = " + result;
}