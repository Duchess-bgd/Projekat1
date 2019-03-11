var sk = localStorage.getItem("sveKorpe");
var sveKorpe;
if (sk !== null) sveKorpe = JSON.parse(sk);
else sveKorpe = [];

document.getElementById("clearAll").addEventListener("click", function(){	
    localStorage.removeItem("sveKorpe");
    kupljeni=[];
    document.getElementById("Dzejson").innerHTML="";
    localStorage.clear();
});

var s=0;
for (var i=0; i<sveKorpe.length; i++){
    var s=0;
    //console.log(sveKorpe);
    var jednaKorpa=document.createElement("div");
    var suma=document.createElement("div");
    jednaKorpa.innerHTML+="<br>"+"<b>"+(i+1)+". Kupac"+"<br>"+"</b>";
    
    
    for (var j=0; j<sveKorpe[i].length; j++){
        s=s+sveKorpe[i][j].kolicina*5;
        jednaKorpa.innerHTML+=(j+1)+". "+sveKorpe[i][j].ime+ ", kolicina: "+sveKorpe[i][j].kolicina+"<br>";
    }
suma.innerHTML+="<b>"+"Ukupno suma: "+s+" evra"+"</b>";
console.log(s);
document.getElementById("Dzejson").appendChild(jednaKorpa);
document.getElementById("Dzejson").appendChild(suma);
}

console.log(sk);
