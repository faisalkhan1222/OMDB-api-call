

$( document ).ready(function() {
    console.log( "ready!" );
    if(Cookies.get('name')){
      var greeting = document.createElement("h1");
      var node = document.createTextNode("Welcome, " + Cookies.get('name'));
      greeting.appendChild(node);
      var element = document.getElementById("div1");
      element.appendChild(greeting);
    }
}
);

function cookieTest(){

name = document.getElementById('name').value;
Cookies.set('name', name);
location.reload();
}
