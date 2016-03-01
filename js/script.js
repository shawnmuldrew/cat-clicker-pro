var clicks = 0;
var clicks2 = 0;
document.getElementById("log-clicks-1").innerHTML="Tammy Clicks: "+clicks;
document.getElementById("log-clicks-2").innerHTML="Toby Clicks: "+clicks2;

var elem = document.getElementById("kitten-img");
elem.addEventListener("click", function(){
  clicks++;
  document.getElementById("log-clicks-1").innerHTML="Tammy Clicks: "+clicks;
}, false);


var elem = document.getElementById("kitten2-img");
elem.addEventListener("click", function(){
  clicks2++;
  document.getElementById("log-clicks-2").innerHTML="Toby Clicks: "+clicks2;
}, false);
