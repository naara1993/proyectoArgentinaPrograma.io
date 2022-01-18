function cambiar_parrafo1(){
document.getElementById("a1").style.display="block";
document.getElementById("a2").style.display="block";
let nombre1 = document.getElementById("nombre").innerHTML;
console.log(nombre1);
let profesion1 = document.getElementById("profesion").innerHTML;
console.log(profesion1);
}
function myfuction1(valor1){
document.getElementById("nombre").innerHTML=valor1;
}
function myfuction2(valor1){
document.getElementById("profesion").innerHTML=valor1;
}
let textarea1 =document.getElementById("a1")
textarea1.addEventListener('keyup',(e) => {
  logMessage1('Key "${e.key}"released  [event:keyup]')
  if(e.key=="Enter"){
    document.getElementById("a1").style.display="none"
  }
});
function logMessage1(message){
  console.log(message+"<br>");
};
let textarea2 =document.getElementById("a2")
textarea2.addEventListener('keyup',(e) => {
  logMessage2('Key "${e.key}"released  [event:keyup]')
  if(e.key=="Enter"){
    document.getElementById("a2").style.display="none"
  }
});
function logMessage2(message){
  console.log(message+"<br>");
};
