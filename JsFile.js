//za video u Chrome
window.addEventListener('click', function(){
    var playPromise = document.querySelector('video').play();
        if (playPromise !== undefined) {
        playPromise.then(function() {
        }).catch(function(error) {
        });
}
})
// za zoomiranje slika u galeriji i setovanje korpe

var korpa=document.querySelector("#korpaDiv");
var zslDiv = document.getElementById("zoomDiv");
var zsl = document.getElementById("zoom");
var slike = document.querySelectorAll('img.galleryImg');

for (let i = 0; i < slike.length; i++)

slike[i].addEventListener("click", function () {
korpa.setAttribute("data-barkod",data.proizvodi[i].broj);
korpa.setAttribute("data-imePr",data.proizvodi[i].ime);

zsl.src = this.src;
zslDiv.style.display = "block";
zsl.style.backgroundImage =  "url('"+data.proizvodi[i].slika+"')";     //"url('img/slika"+(i+1)+".jpg')";
});

zslDiv.onclick = function () {
this.style.display = "none";
}

//za WebShop

//Objekat:

var data={ 

proizvodi:[
{ ime:"Pink Forest",
cena:5,
slika:"img/slika1.jpg",
broj: 1 
},
{ ime:"Red Sky",
cena:5,
slika:"img/slika2.jpg",
broj: 2
},
{ ime:"Coffee Love",
cena:5,
slika:"img/slika3.jpg",
broj: 3
},
{ ime:"Space Sanctuary",
cena:5,
slika:"img/slika4.jpg",
broj: 4
},
{ ime:"Goth Portrait",
cena:5,
slika:"img/slika5.jpg",
broj: 5
},
{ ime:"Halloween Cooking",
cena:5,
slika:"img/slika6.jpg",
broj: 6
},
{ ime:"Moon Bath",
cena:5,
slika:"img/slika7.jpg",
broj: 7
},
{ ime:"Dark Ruler",
cena:5,
slika:"img/slika8.jpg",
broj: 8
},
{ ime:"Red Angel",
cena:5,
slika:"img/slika9.jpg",
broj: 9
},
{ ime:"Forest Witch",
cena:5,
slika:"img/slika10.jpg",
broj: 10
}
]
};

//Snimanje u Local Strorage i funkcije za dugmice "Clear" i "Confirm"

var pEl=[];
var proizvodiElementi=[];
var kupljeni=[];

var sveKorpe = [];

var st = localStorage.getItem("kupljeni");
console.log(st);
if (st !== null) kupljeni=JSON.parse(st);
else kupljeni = [];
console.log(kupljeni);
console.log(Array.isArray(kupljeni));

/*var sk = localStorage.getItem("sveKorpe");
console.log(sk);
if (sk !== null) sveKorpe = JSON.parse(sk);
else sveKorpe = [];
console.log(sveKorpe);*/


suma();

for(var i=0; i<kupljeni.length; i++)

prikazi_nar_u_korpi(i, kupljeni[i].ime, kupljeni[i].kolicina)

document.getElementById("snimiLS").addEventListener("click", function(){
sveKorpe.push(kupljeni);
localStorage.setItem("sveKorpe", JSON.stringify(sveKorpe));


alert("Your order has been saved");
localStorage.removeItem("kupljeni");
kupljeni=[];
document.getElementById("yourOrder").innerHTML = "";
document.getElementById("suma").innerHTML=("Suma= "+0+" evra");
});


document.getElementById("clear").addEventListener("click", function(){	
localStorage.removeItem("kupljeni");
kupljeni=[];
document.getElementById("yourOrder").innerHTML="";
document.getElementById("suma").innerHTML=("Suma= "+0+" evra");

});

//narucivanje i prikaz u korpi

korpa.addEventListener("click",function(){
    var br=this.getAttribute("data-barkod");
    var imeP=this.getAttribute("data-imePr")
        var ind=-1;
        for (let i=0; i<kupljeni.length; i++){
                if (kupljeni[i].barkod==br)
                ind=i;
                suma();
                console.log(kupljeni);
            
        }
        if (ind==-1){
            kupljeni.push({barkod:br,kolicina:1,ime:imeP});
            ind = kupljeni.length-1;
            prikazi_nar_u_korpi(ind, kupljeni[ind].ime, kupljeni[ind].kolicina);
            suma();
    
        }else{
            kupljeni[ind].kolicina++;
            document.getElementById("yourOrder").querySelector("div[data-ind='"+ind+"']").innerHTML = 
                    ind+1+". "+kupljeni[ind].ime+" "+kupljeni[ind].kolicina;
                    suma();
        }
        localStorage.setItem("kupljeni", JSON.stringify(kupljeni));
        console.log(kupljeni, ind);
    
});
document.querySelector("#zoomDiv").appendChild(korpa);


function prikazi_nar_u_korpi(ind, ime, kol){
        var narudzbina=document.createElement("div");
            narudzbina.setAttribute("data-ind", ind);
            narudzbina.innerHTML=ind+1+"."+" "+ ime+" "+kol;
            document.getElementById("yourOrder").appendChild(narudzbina);
            
}

function suma(){
var s=0;
for (let i=0; i<kupljeni.length; i++)
     s+=kupljeni[i].kolicina*5;
     //console.log(s);
document.getElementById("suma").innerHTML=("Suma= "+s+" evra");

}