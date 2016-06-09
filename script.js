/*
uncomment the following code to test spotify api and cookies
*/
/*
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

var test = $.ajax({   type: "GET",   url: 'https://api.spotify.com/v1/search',   data: {       q: 'drake',       type: 'artist'   },   success: function (response) {       console.log(response);

for(image in response.artists.items){
  $('body').append('<h1> ' + response.artists.items[image].name + ' </h1>');
  $('body').append('<img src = " ' + response.artists.items[image].images[image].url + ' "/>');
  console.log(response.artists.items[image].images[image].url);
}
} });
console.log(test);
*/

function search(){
var test  = $.ajax({   url: "http://www.omdbapi.com/?",   data: { t: $('input[name=t]').val() },   dataType: "json",   success: function(response) {     console.log(response);
  $('#div1').html('<h1> ' + response.Title + ' </h1>');
  $('#div2').html('<img src = " ' + response.Poster + ' "/>');
 } });

return false;
}
