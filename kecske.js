window.addEventListener("load", init);
function ID(elem){
    return document.getElementById(elem);
}
function query(elem){
    return document.querySelector(elem);
}

function init(){
    query("footer p").innerHTML = "Ulrich Bence";
}
var kepek = [
    {
        kepUt = "kepek/kecske2.png",
        kepCim = "kecske",
    },
    {
        kepUt = "kepek/kaposzta.png",
        kepCim = "kaposzta",
    },
    {
        kepUt = "kepek/farkas.png",
        kepCim = "farkas",
    },
];
