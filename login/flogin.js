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

const pswd = document.getElementById('pswd')
const stnth = document.getElementById('snth')
stnth.style.display="none"
let ucs,smcs,ing,scs;

pswd.addEventListener("keyup", event => {
    let upcs=0
    let smlcs=0
    let ingr=0
    let spcs=0
    var temp=0
    let sum=0
    var elmnt = event.target.value
    
    for(i=0;i<elmnt.length;i++){
    temp = elmnt.charCodeAt(i)
    /*console.log(temp)*/
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
   ucs=upcs
   smcs=smlcs
   ing=ingr
   scs=spcs
   sum=ucs+smcs+ing+scs
   
   if(elmnt.length == 0){
    stnth.style.display="none"
   }
   else
   {
    stnth.style.display="block"
      if((elmnt.length<2)||(elmnt.length<2 && sum==4))
      {
        stnth.innerHTML = "Strength:weak";
        stnth.style.color = "red";
      }
      if(elmnt.length<=4 && sum>=1)
      {
        stnth.innerHTML = "Strength:weak";
        stnth.style.color = "red";
      }
      if(elmnt.length>=5 && sum>=2)
      {
        stnth.innerHTML = "Strength:Average";
        stnth.style.color = "skyblue"; 
      }
      if(elmnt.length>=6 && sum>=3)
      {
        stnth.innerHTML = "Strength:Good";
        stnth.style.color = "blue";
      }
      if(elmnt.length>=8 && sum==4)
      {
        stnth.innerHTML = "Strength:Strong";
        stnth.style.color = "green";
      }
   }
});

const drpdwn = document.getElementsByClassName("dropdown-content");
drpdwn[0].style.display = "none"
drpdwn[1].style.display = "none"
drpdwn[2].style.display = "none"
drpdwn[3].style.display = "none"
drpdwn[4].style.display = "none"

function eduqlfy(vlu){
    const drpdwn = document.getElementsByClassName("dropdown-content");
    document.getElementById("edutnqlfy").value=vlu;
    drpdwn[0].style.display = "none";
    drp0=1;
}


var drp0=1;
function drop0(){
  let value=""
  const drpdwn = document.getElementsByClassName("dropdown-content");
  if(drp0==1){
  drpdwn[0].style.display = "block";
  drp0=0;
  }
  else
  {
    drpdwn[0].style.display = "none";
    drp0=1;
  }
}



function prsntoccupation(vlu){
    const drpdwn = document.getElementsByClassName("dropdown-content");
    document.getElementById("prsntoccupy").value=vlu;
    drpdwn[1].style.display = "none";
    drp1=1;
}


var drp1=1;
function drop1(){
  let value=""
  const drpdwn = document.getElementsByClassName("dropdown-content");
  if(drp1==1){
  drpdwn[1].style.display = "block";
  drp1=0;
  }
  else
  {
    drpdwn[1].style.display = "none";
    drp1=1;
  }
}

function lngknw(vlu){
    const drpdwn = document.getElementsByClassName("dropdown-content");
    document.getElementById("langknwn").value=vlu;
    drpdwn[2].style.display = "none";
    drp2=1;
}

var drp2=1;
function drop2(){
  let value=""
  const drpdwn = document.getElementsByClassName("dropdown-content");
  if(drp2==1){
  drpdwn[2].style.display = "block";
  drp2=0;
  }
  else
  {
    drpdwn[2].style.display = "none";
    drp2=1;
  }
}

function country(vlu){
    const drpdwn = document.getElementsByClassName("dropdown-content");
    document.getElementById("cntry").value=vlu;
    drpdwn[3].style.display = "none";
    drp3=1;
}


var drp3=1;
function drop3(){
  let value=""
  const drpdwn = document.getElementsByClassName("dropdown-content");
  if(drp3==1){
  drpdwn[3].style.display = "block";
  drp3=0;
  }
  else
  {
    drpdwn[3].style.display = "none";
    drp3=1;
  }
}

function phnbr(vlu){
    const drpdwn = document.getElementsByClassName("dropdown-content");
    document.getElementById("pnumbr").value=vlu;
    drpdwn[4].style.display = "none";
    drp3=1;
}


var drp4=1;
function drop4(){
  let value=""
  const drpdwn = document.getElementsByClassName("dropdown-content");
  if(drp4==1){
  drpdwn[4].style.display = "block";
  drp4=0;
  }
  else
  {
    drpdwn[4].style.display = "none";
    drp4=1;
  }
}

function submit(){
    console.log(upcs,smlcs,ingr,spcs,temp)
}



