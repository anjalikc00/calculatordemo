let firstvalue='';
let secondvalue='';
let opt='';
let show=document.getElementById('show');

function Value(a){

    if(opt.length===0){
        firstvalue+=a;
        show.value=firstvalue;
    }else{
        secondvalue+=a;
        show.value+=secondvalue;

    }
    console.log(firstvalue,secondvalue,opt.length)
}
function Operator(a){
    opt=a;
    show.value+=opt;

}
function Display(a){
    document.getElementById("show").value+=a
return a
}




function Result(){
    let output='';

    if(opt==="+"){
       output= Number(firstvalue)+Number(secondvalue)
    }else if(opt==="-"){
        output=Number(firstvalue)-Number(secondvalue)
    }else if(opt==="*"){
        output=Number(firstvalue)*Number(secondvalue)
    }else if(opt==="/"){
        output=Number(firstvalue)/Number(secondvalue)
    }
    firstvalue=output;
    secondvalue="";
    opt='';
    show.value=output;
}
function Clear(){

    firstvalue='';
    secondvalue="";
    opt="";
    show.value="0";

}