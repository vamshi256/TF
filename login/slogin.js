const sign=document.getElementsByClassName('container')
const log=document.getElementsByClassName('wrapper')
sign[0].style.display="none"

function signupage() {
    log[0].style.display="none"
    sign[0].style.display="block"
}

function loginpage() {
    log[0].style.display="block"
    sign[0].style.display="none"
}

const pswd=document.getElementById('pswd')
let upcs,smlcs,ingr,spcs,temp;
console.log(pswd)
pswd.addEventListener("keyup", event => {
    let upcs=0
    let smlcs=0
    let ingr=0
    let spcs=0
    var temp=0
    var elmnt = event.target.value
    
    for(i=0;i<elmnt.length;i++){
    temp = elmnt.charCodeAt(i)
    console.log(temp)
    if(temp>=65 && temp<=90)
    {
        upcs=1
    }
    else if(temp>=97 && temp<=122)
    {
           smlcs=1
    }
    else if(temp>=48 && temp<=57)
    {
        ingr=1
    }
    else if(temp>=58 && temp<=64)
    {
        spcs=1
    }
   }
});

function submit(){
    console.log(upcs,smlcs,ingr,spcs,temp)
}



