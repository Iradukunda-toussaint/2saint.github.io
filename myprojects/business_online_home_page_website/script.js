let num = document.getElementById("packet-num");
let verifymypack = document.getElementById("package");
let mynum = new Number(num);
let getprices = [];
function getinpacket1(){ 
    mynum++;
    let selector = document.getElementById("seletor1");
    document.getElementById("packet-num").innerHTML = mynum;
    document.getElementById("prod-num").innerHTML = mynum;
    getprices.push(70);
    selector.style.background = "rgba(255, 255, 255, 0.562)";
}
function getinpacket2(){
    mynum++;
    let selector = document.getElementById("seletor2");
    document.getElementById("packet-num").innerHTML = mynum;
    document.getElementById("prod-num").innerHTML = mynum;
    getprices.push(45);
    selector.style.background = "rgba(255, 255, 255, 0.562)";
  
}
function getinpacket3(){
    mynum++;
    let selector = document.getElementById("seletor3");
    document.getElementById("packet-num").innerHTML = mynum;
    document.getElementById("prod-num").innerHTML = mynum;
    getprices.push(75);
    selector.style.background = "rgba(255, 255, 255, 0.562)";
}
function getinpacket4(){
    mynum++;
    let selector = document.getElementById("seletor4");
    document.getElementById("packet-num").innerHTML = mynum;
    document.getElementById("prod-num").innerHTML = mynum;
    getprices.push(105);
    selector.style.background = "rgba(255, 255, 255, 0.562)";
}
function getinpacket5(){
    mynum++;
    let selector = document.getElementById("seletor5");
    document.getElementById("packet-num").innerHTML = mynum;
    document.getElementById("prod-num").innerHTML = mynum;
    getprices.push(146);
    selector.style.background = "rgba(255, 255, 255, 0.562)";
}
function getinpacket6(){
    mynum++;
    let selector = document.getElementById("seletor6");
    document.getElementById("packet-num").innerHTML = mynum;
    document.getElementById("prod-num").innerHTML = mynum;
    getprices.push(140);
    selector.style.background = "rgba(255, 255, 255, 0.562)";
    
}

function checkprice(){
    let summation = getprices.reduceRight(
        function mysum(total , value){
            return total + value;
        }
    );
    let i = 0;
    let expng = document.getElementById("exchange-png");
    let setedtime = setInterval(function addmoney(){
        if(i < summation){
            i++;
             expng.style.transform = "rotate(" + i + "deg)";
            document.getElementById("money-price").innerHTML = i;
        }else if(i == summation){
            clearInterval(setedtime);
        }
    } , 10)
}
function addnewitem(){
let items = document.getElementById("selected-items");
items.style.height = "350px";
items.style.transition = "0.5s";
}

    function startsearch() {
        let mysearchbox = document.getElementById("mysearch-box");
        mysearchbox.style.height = "300px";
        mysearchbox.onmouseleave = function(){
            mysearchbox.style.height = "0px";
        }
        mysearchbox.style.transition = "0.5s";

        
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");

        
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
           
          } else {
            li[i].style.display = "none";
            
          }
        }
    }
  
      Notification.requestPermission().then(
            function noticed(perm){
               if(perm == "granted"){
                new Notification("NEW" , {
                       body: "hey get a new t-shirt for only 5$",
                       image: "product-img/trend-tshits/t3.jpg",
                       icon: "png/logo.png",
                       tag : "stop"
                   }
                   )
               }
            }
            
        )
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            function userlocation(posit){
            console.log(posit.coords.latitude + " " +
             posit.coords.longitude);
        })
    }else{
        console.log("can't support location");
    }
