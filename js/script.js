var cats = ["Tammy","Toby"];
var catClicks = [0,0];
var catImages = ["img/kitten1.jpg","img/kitten2.jpg"];

document.getElementById("cat-list").innerHTML="List of Cats: ";

for (var i = 0;i < cats.length; i++) {
  var cat = cats[i];
  var elem = document.createElement("h3");
  elem.setAttribute("id","h3-"+cat);
  elem.textContent = cat+"  Clicks: "+catClicks[i];
  var currentDiv = document.getElementById("cat-list");

  elem.addEventListener("click", (function(catCopy) {
    return function() {
      var catImageSrc = catImages[cats.indexOf(catCopy)];
      var catImage = document.createElement('img');
      var imageDiv = document.getElementById("cat-picture");
      catImage.src = catImageSrc;
      imageDiv.innerHTML = '';
      imageDiv.appendChild(catImage);
      imageDiv.addEventListener("click", function(){
        catClicks[cats.indexOf(catCopy)]++;
        document.getElementById("h3-"+catCopy).innerHTML=catCopy+"  Clicks: "+catClicks[cats.indexOf(catCopy)];
      });
    };
  }) (cat)); 
  
  document.body.insertBefore(elem,currentDiv.nextSibling);
};

