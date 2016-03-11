$(function(){

    var model = {
      currentCat: null,
      showAdmin: false,
      catData:  [ {name: 'Toby', image: 'img/kitten1.jpg', count: 0},
                  {name: 'Gob',  image: 'img/kitten2.jpg', count: 0},
                  {name: 'Tammy',  image: 'img/kitten3.jpg', count: 0},
                  {name: 'Angle',  image: 'img/kitten4.jpg', count: 0},
                  {name: 'Strip',  image: 'img/kitten5.jpg', count: 0}
               ]
    };

    var octopus = {
        init: function() {
            view.init();
            model.currentCat = model.catData[0];
            view.renderCatImage(model.currentCat);
            view.renderCatCount(model.currentCat);
            this.setAdminForm(model.showAdmin);
        },
        
        getCats: function() {
          return model.catData;
        },

        setAdminForm: function(showAdmin) {
          if (showAdmin) {
           document.getElementById("adminForm").style.visibility = "visible";
          } else {
           document.getElementById("adminForm").style.visibility = "hidden";
          }
        },

        cancelForm: function() {
          document.getElementById("catNameInput").value = "";
          document.getElementById("catImageURLInput").value = "";
          document.getElementById("catCountInput").value = "";
        },

        getCatIndex: function(cat) {
          for (var i = 0; i < model.catData.length; i++) {
            if (model.catData[i].name == cat.name) {
              return i;
            }
          }
        },

        updateCat: function() {
          var catIndex = this.getCatIndex(model.currentCat);
          model.catData[catIndex].name = document.getElementById("catNameInput").value;
          model.catData[catIndex].image = document.getElementById("catImageURLInput").value;
          model.catData[catIndex].count = document.getElementById("catCountInput").value;
          model.currentCat = model.catData[catIndex];
          view.renderCatList();
          view.renderCatImage(model.currentCat);
          view.renderCatCount(model.currentCat);
          this.cancelForm();
        }
    };


    var view = {
        init: function() {
            this.catList = $('#catList');
            this.catCount = $('#catCount');
            view.renderCatList();
            document.getElementById("adminButton").addEventListener("click", (function() {
              model.showAdmin = !model.showAdmin;
              octopus.setAdminForm(model.showAdmin);
          }));
            document.getElementById("cancelButton").addEventListener("click", (function() {
              octopus.cancelForm();
          }));
            document.getElementById("saveButton").addEventListener("click", (function() {
              octopus.updateCat(model.currentCat);
          }));
        },
        
        renderCatList: function(){
            var catListElement = document.getElementById('catList');
            catListElement.innerHTML = '';
            octopus.getCats().forEach(function(cat){
              var catElement = document.createElement("li");
              var catElementText = document.createTextNode(cat.name);
              catElement.appendChild(catElementText);
              catListElement.appendChild(catElement);
              catElement.addEventListener("click", (function(catCopy) {
                return function() {
                  model.currentCat = catCopy;
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
          this.catCount.innerHTML = '';
          var htmlStr = 'Count '+cat.count;
          this.catCount.html(htmlStr);
        }
    };

    octopus.init();
});
