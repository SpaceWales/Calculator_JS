function plus(a,b,){
    return parseInt(a)+ parseInt(b);
}
function minus(a,b,){
    return a-b;
}
function times(a,b){
    return a*b;
}
function divide(a,b){
    if(a==0 || b==0){ 
        alert("divide by 0 error");
        return false;}
    return a/b;
}
function remainder(a,b){
    return a%b;
}

function operate(a,b,op){
    let sum = 0;
    switch(op){
        case '+':
            sum = plus(a,b);
            break;
        case '-':
            sum = minus(a,b);
            break;
        case '*':
            sum = times(a,b);
            break;
        case '/':
            sum = divide(a,b);
            break;
        case '%':
            sum = remainder(a,b);
            break;
        default: break;
    }
    return sum;
}

//this is the flair side of it, 
function generateColor(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


let display = document.querySelector("#display");
let para = document.createTextNode("");
const wrapper = document.getElementById("container");
let expr = [];
wrapper.addEventListener("click", (event) =>{
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton){
        return;
    }
    console.dir(event.target.id);
    //equals button clicked
    if(event.target.id === 'equals'){
        //split and operate
        console.log("got to splitter")
        splitter(expr);
    }
    //clear all
    else if(event.target.id==='clear'){
        console.log("got to clear!");
        clearAll();
    }
    //delete character
    else if(event.target.id==='delete'){
        deleted();
    }
    //add to expression
    else{
    expr.push(event.target.value);
    //display --->
    para.textContent += (event.target.value);
    display.appendChild(para);
    }
    //display<---
    //this works for all buttons. do all your functiony things in here!
    //listen for = button, send to function to get split, 
    

});

function deleted(){
    //remove last character from para and from expr[];
    var str = para;
    console.log(str);
    str = str.substringData(0,str.length-1);
    console.log(str);
    para.textContent = str;
    display.appendChild(para);
    expr.pop();
    console.log(expr);
}

function clearAll(){
    expr = [];
    para.textContent = "";
    display.appendChild(para);
    console.log(para);
    console.log(expr);
}

function splitter(arr){
    let chunk = 0;
    let op = ""
    //find operator placement
    for(let x = 0;x<arr.length;x++){
        if(arr[x]== "+" || arr[x] == "-" || arr[x] == "*" || arr[x] == "/" || arr[x] == "%"){
            chunk = x;
            op = arr[x]
            console.log(op,"op")
            console.log(chunk," chunky x");
        }
   }
   let a = arr.slice(0,chunk);
   console.log(a);
   let b = arr.slice(chunk + 1,arr.length);
   console.log(b);

   let aNum = a.map(function(i){
       return parseInt(i,10);
   });
   let bNum = b.map(function(i){
       return parseInt(i,10);
   });
   console.log(aNum);
   console.log(bNum);
   aStr = aNum.join("");
   bStr = bNum.join("");
   console.log(aStr);
   console.log(bStr);
   var solution = operate(aStr,bStr,op);
   console.log(solution);
   para.textContent = solution;
   display.appendChild(para);
   
}








//do i add a separate listener for each set of keys, or each individual button

//do they have priority, func > operator > num
//if its not a func key, check if its an operator, if it is an operator, check there is 2 nums
//if its not an operator, add it to first array, unless there is already an operator, then add it to second array
//if it is a function key, check there is an operator and 2 nums, then calculate
//func key wont work for clear and backspace though
//= need to be its own thing

//can add multiple numbers and operators by running the operator function on click 
//while i dont think this is immediately helpful its good to know!
//document.querySelector("#container").onchange = function(){
//    
//}













