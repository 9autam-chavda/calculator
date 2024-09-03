let numb = document.querySelectorAll (".num");
let output = document.querySelector ("#numop");





let outputtext = output.innerText;
outputtext.slice (0, 17);
let intop;

numb.forEach ( (numb) => {

 numb.addEventListener ("click", () => {
        outputtext = output.innerText = outputtext + numb.innerText;
        console.log (outputtext);
       intop = parseFloat (outputtext);
    })
})


let porm = document.querySelector ("#pormb");

let pormtext = porm.innerText;
let turn = true;

porm.addEventListener ("click", () => {
    if (turn === true) {
        intop = output.innerText = "-" + intop ;
        console.log (outputtext); 
        turn = false;
    }
    else if (turn === false) {
        intop = output.innerText = outputtext;
        turn = true;
    }
})

let equation = document.querySelectorAll (".equation");
let equationop = document.querySelector ("#eqop");
let snum = document.querySelector ("#snumop");

let equationtext = equationop.innerText;
let snumtext = snum.innerText;
let intsnum;
let inteq;


equation.forEach ( (equation) => {

    equation.addEventListener ( "click", () => {
        inteq = parseFloat (equationtext);
        intsnum = parseFloat (snumtext);

        if ( inteq = true ) {
            inteq = equationop.innerText = equationtext - equation.innerText ;
            inteq = equationop.innerText = equationtext + equation.innerText;
            console.log (inteq);
            intsnum = snum.innerText = intop;
            outputtext = output.innerText = ""; 
        } 
       
    })
})


let percentage = document.querySelector ("#percentageb");

let turn1 ;
turn1 = false;
let intper;


percentage.addEventListener ( "click", () => {
    intper = parseFloat (percentage);
    intop = outputtext = output.innerText = intop / 100 ;
    console.log (outputtext);
    turn1 = true;
})

let equal = document.querySelector ("#equalb");
let total1;

equal.addEventListener ( "click", () => {
        total1 = outputtext.innerText = eval(intsnum + inteq + intop);
        console.log (total1);
        intop = output.innerText = total1;
        intsnum = snum.innerText = "";
        inteq = equationop.innerText = "";

})

let allcb = document.querySelector ("#acb");

allcb.addEventListener ("click", () => {
   intsnum = snumtext = snum.innerText = "";
   inteq = equationtext = equationop.innerText = "";
   intop = outputtext = output.innerText = "";
   turn = true;
})

let numremover = document.querySelector ("#cursermoverb");
let arr ;
let sintop;
let sarr;
let intsrr;

numremover.addEventListener ("click", () => {
    sintop = intop.toString ();
    sintop = sintop.substring (0, sintop.length-1);
    console.log (sintop);
    intop = outputtext = output.innerText = sintop;
})