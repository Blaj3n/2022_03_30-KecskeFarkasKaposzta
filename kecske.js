/* Elemek elérése
    document.getElementById("bal")
    document.querySelector("$bal img") --> első elem
    document.querySelectorAll("$bal img") -->tömböt ad vissza [i]

    Attribútumok elérése
        elem.src
        elem.alt
    Szöveg írása egy elembe
        elem.innerHTML +=
    Stílus megváltoztatása
        elem.style.textAlign="center"
        elem.className = "kiemel"
    Esemény kezelő
        elem.addEventListener("click",fvnév) fvnév=függvénynév
    fnev(){event.target.src}
                        .innerHTML
                        .style
                        .className
    for(){
        document.querySelectorAll("$bal img")[i].addEventListener
    }
*/
window.addEventListener("load", init);
function ID(elem){
    return document.getElementById(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}
/*2. feladat*/
function init(){
    keputmentes();
    var foo =  $("footer p")[0];
    foo.innerHTML = "Ulrich Bence";
    foo.style.textAlign = "center";
    foo.style.backgroundColor = "lightblue";
    foo.style.fonSize = "20px";
}
/*3. feladat*/
function keputmentes(){
    var kepek = $("#bal img");
    console.log(kepek);
    for (let index = 0; index < kepek.length; index++) {
        kepek[index].addEventListener("click",kattint);
        kepek[index].addEventListener("mouseover",huzfel);
        kepek[index].addEventListener("mouseout",huzle);
    }
}
var tomb = [];
function kattint(){
    var eleresiut = event.target.src;
    tomb.push(eleresiut);
    console.log(tomb);
    /*7. feladat*/ 
    var kep = `<img src='${event.target.src}' alt='${event.target.alt}' >`
    //var kep="<img src=''"+event.target.src+"' alt='" + event.target.alt + "'>"
    $("article #csonak")[0].innerHTML += kep
}
function huzfel(event){
    event.target.classList.add("kiemel");
}
function huzle(event){
    event.target.classList.remove("kiemel");
}
/*5. feladat*/
function kiemel(){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
}

