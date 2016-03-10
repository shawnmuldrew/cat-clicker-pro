$(function(){

    var model = [ {name: 'Toby', image: 'img/kitten1.jpg', count: 0},
                  {name: 'Gob',  image: 'img/kitten2.jpg', count: 0},
                  {name: 'Tammy',  image: 'img/kitten3.jpg', count: 0},
                  {name: 'Angle',  image: 'img/kitten4.jpg', count: 0},
                  {name: 'Strip',  image: 'img/kitten5.jpg', count: 0}
                ];

    var octopus = {
        getCats: function() {
            return model;
        },

        init: function() {
            view.init();
            var currentCat = model[0];
            view.renderCatImage(currentCat);
            view.renderCatCount(currentCat);
        }
    };


    var view = {
        init: function() {
            this.catList = $('#catList');
            this.catCount = $('#catCount');
            view.renderCatList();
        },
        
        renderCatList: function(){
            octopus.getCats().forEach(function(cat){
              var catElement = document.createElement("li");
              var catElementText = document.createTextNode(cat.name);
              catElement.appendChild(catElementText);
              document.getElementById('catList').appendChild(catElement);
              catElement.addEventListener("click", (function(catCopy) {
                return function() {
                  view.renderCatImage(catCopy);
                  view.renderCatCount(catCopy);
                };
              }) (cat));
            });
        },

        renderCatImage: function(cat){
          var catImage = document.createElement('img');
          var catImageDiv = document.getElementById('catPicture');
          catImage.src = cat.image;
          catImageDiv.innerHTML = '';
          catImageDiv.appendChild(catImage);
          catImage.addEventListener("click", (function() {
            cat.count++;
            view.renderCatCount(cat);
          }));
        },

        renderCatCount: function(cat){
          var htmlStr = 'Count '+cat.count;
          this.catCount.html(htmlStr);
        }
    };

    octopus.init();
});
