
var sk = localStorage.getItem("sveKorpe");

console.log(sk);
document.querySelector("#Dzejson").innerHTML=sk;

if (sk !== null) sveKorpe = JSON.parse(sk);
else sveKorpe = [];
console.log(sveKorpe);
document.querySelector("#Dzejson2").innerHTML=sveKorpe;


document.getElementById("clearAll").addEventListener("click", function(){	
    localStorage.removeItem("sveKorpe");
    kupljeni=[];
    document.getElementById("Dzejson").innerHTML="";
    localStorage.clear();
});