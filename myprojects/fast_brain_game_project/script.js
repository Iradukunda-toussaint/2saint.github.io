
let sec = 40;
let mytime = setInterval(function started(){
    sec--;
    document.getElementById("timer").innerHTML =  sec;   
    if(sec == 0){
       clearInterval(mytime);
       document.getElementById("timer").innerHTML =  
       "You lose! <b id='rpl'>↪️</b>";
       let replaybtn = document.getElementById("rpl");
       replaybtn.style.cursor = "pointer";
       replaybtn.onclick = function replayfunc(){
         document.location = "index.html";
       } 
    } 
    
}, 1000);
function calculated(){
let getinput = document.getElementById('user-calculation').value;
let gettable = document.getElementById("calc");
gettable.innerText = getinput;
let intotxt = new String(getinput);
if(intotxt.length == 10){
gettable.style.fontSize = "2.5rem";
}else if(intotxt.length == 15){
gettable.style.fontSize = "1.5rem";
}else if(intotxt.length == 20){
gettable.style.fontSize = "1.3rem";
}
let intocalctxt = gettable.innerText;
    document.getElementById("lenght-box").innerHTML = intocalctxt.length;
      let checkslice = intocalctxt.slice(0 , 5);
            if(checkslice == "2+3=5" && intocalctxt.slice(-3 , -1) == 10){
              document.getElementById("score").innerHTML = "👍good";
               clearInterval(mytime);
               document.getElementById("timer").innerHTML =  "replay";
        }else if( checkslice == "3+2=5" && intocalctxt.slice(-3 , -1) == 10){
                   document.getElementById("score").innerHTML = "👍good";
                   clearInterval(mytime);
                   document.getElementById("timer").innerHTML =  "replay <b id='rpl'>↪️</b>";
        }else if(checkslice == "3-2=1" && 
                 intocalctxt.slice(-3 , -1) == 10 &&
                 intocalctxt.length == 20){
          document.getElementById("score").innerHTML = "👍good";
          clearInterval(mytime);
          document.getElementById("timer").innerHTML =  "replay <b id='rpl'>↪️</b>";
        }
    }


