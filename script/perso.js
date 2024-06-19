// affichage des projets perso

let photos = ""

for (let pho in perso["photo"]) {
  photos += '<a href="projetperso2.html?domaine=photo&number=' + pho + '"><img src="../img/photos/' + pho + '.jpg" class="perso" alt="photo"></img></a>'
}

document.querySelector("#photo").innerHTML = photos

let dessins = ""

for (let des in perso["dessin"]) {
  dessins += '<a href="projetperso2.html?domaine=dessin&number=' + des + '"><img src="../img/dessins/' + des + '.jpg" class="perso" alt="photo"></img></a>'
}

document.querySelector("#dessins").innerHTML = dessins

let trois = ""

for (let t in perso["TroisD"]) {
  trois += '<a href="projetperso2.html?domaine=trois&number=' + t + '"><img src="../img/3D/' + t + '.jpg" class="perso" alt="photo"></img></a>'
}

document.querySelector("#marchestp").innerHTML = trois

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});


// menu déroulant téléphone

var oui = document.querySelector(".menutel");
var deroulant = document.querySelector(".deroutel")

oui.addEventListener("click", function() {
    if(deroulant.classList.contains('deroutelo')){
      document.querySelector(".deroutel").classList.remove("deroutelo");
      document.querySelector("header").classList.remove("header2");
    }
    else{
      document.querySelector(".deroutel").classList.add("deroutelo");
      document.querySelector("header").classList.add("header2");
    }
  });