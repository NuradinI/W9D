var firstHtag = document.querySelector('h1');
firstHtag.innerHTML = "Hello world";

var allPTags = document.querySelectorAll('p');
for(var i=0; i<allPTags.length; i++){
    allPTags[i].style.color='red';
}

var header =document.getElementById('header');
header.style.fontSize= '3.5em';

var image =document.getElementsByClassName('image')[0]
image.style.width = '300px'
image.style.height = '300px'

var h3 =document.getElementsByTagName('h3') [0];
h3.innerHTML = "Hey there my name is Nuradin"

var newdiv = document.createElement('div')
var injectedContent = document.createTextNode('Hell there')
newdiv.appendChild(injectedContent)
var parentdiv = document.getElementById('parent');
document.body.insertBefore(newdiv, parentdiv);