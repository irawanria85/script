/* LANJUT KE D */
(function(){
setInterval(function(){
var redSites = [
"/p/d-1.html",
"/p/d-2.html",
"/p/d-3.html",
"/p/d-4.html",
"/p/d-5.html",
];
var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];
window.location = randomLinks
},20000)
}());
/* JANGAN KEMBALI */
history.pushState(null, null, '#');
window.addEventListener('popstate', function(event){
history.pushState(null, null, '#');     
});
/* JIKA PAKAI PC */
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.indexOf('Android') != -1)){}
else location.replace("/p/please-wait.html");
