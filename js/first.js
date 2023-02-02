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
        show.value+=a;

    }
    console.log(firstvalue,opt,secondvalue)
}
function Operator(a){
    opt+=a;
    show.value+=a;

}
// function Display(a){
//     document.getElementById("show").value+=a
// return a
// }




function Result(a){
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

    firstvalue="";
    secondvalue="";
    opt="";
    show.value="";

}

function Partial(){
    if(opt.length===0){
        let lgt=firstvalue.length;
        let data=firstvalue.slice(0,lgt-1);
        console.log(firstvalue,data);
        firstvalue=data;
        show.value=data;
    }else if(opt.length>=1 && secondvalue.length===0){
        let lgt=opt.length;
        console.log(lgt);
        let data=opt.slice(0,lgt-1);
        console.log(opt,data);
        opt=data;
        show.value=firstvalue+data;
    }else{
        let lgt=secondvalue.length;
        let data=secondvalue.slice(0,lgt-1);
        console.log(secondvalue,data,opt);
        secondvalue=data;
        show.value=firstvalue+opt+secondvalue;
    }
}