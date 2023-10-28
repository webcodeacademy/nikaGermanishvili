
const nav = ["home", "about", "gallery", "all news here", "find us"];

const links = ["index.html", "project.html", "gallery.html", "news.html", "signup.html"];

let navigacatext = "<ul>";
for(let i=0; i<nav.length; i++){
    navigacatext  += '<li><a href="'+ links [i] + '">' + nav[i] +"</a></li>";
    console.log(navigacatext);
}

navigacatext += "</ul>";


console.log(navigacatext);

document.getElementById("navig").innerHTML = navigacatext;