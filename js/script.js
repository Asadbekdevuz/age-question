
document.body.style.backgroundColor="#014E56";
document.body.style.textAlign="center";


var welcome = alert("Xush kelibsiz");
var vote = confirm("Ovoz berishga tayyormisiz?");
var yourAge = prompt("Yoshingiz nechida");

if(yourAge >= 1 &&  yourAge <= 4){
  var userAge = ("Siz hali go'daksiz!")
  var heading = document.createElement("h1");
  heading.textContent = `${userAge}!`;
  heading.style.color="yellow";
  document.body.appendChild(heading);
}

else if(yourAge >= 5 && yourAge <= 17){
  var userAge1 = ("18dan past, ovoz berish yoshiga to'lmagansiz!")
  var heading = document.createElement("h1");
  heading.textContent = `Yoshingiz: ${userAge1}!`;
  heading.style.color="yellow";
  document.body.appendChild(heading);
}

else if(yourAge >= 18 && yourAge <= 60){
  var userAge2 = ("18+ , ovoz berishingiz mumkun!")
  var heading = document.createElement("h1");
  heading.textContent = `Yoshingiz: ${userAge2}!`;
  heading.style.color="yellow";
  document.body.appendChild(heading);
}

else if(yourAge >= 61 && yourAge <= 100){
  var userAge4 = ("Kechirasiz, bizning saytda 60 yoshgacha bo'lgan insonlar ovoz bera oladi!!")
  var heading = document.createElement("h1");
  heading.textContent = ` ${userAge4}!`;
  heading.style.color="yellow";
  document.body.appendChild(heading);
}
else if(yourAge > 100 ){
  var userAge5 = ("DUNYO SANI TOG'ANGMAS!!! ")
  var heading = document.createElement("h1");
  heading.textContent = ` ${userAge5}!`;
  heading.style.color="yellow";
  document.body.appendChild(heading);
}

else{
  alert("siz yoshinzi kirgizmadiz")
}




