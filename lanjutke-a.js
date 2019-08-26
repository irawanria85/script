/* LANJUT KE A */
(function(){
setInterval(function(){
var redSites = [
"/p/a-1.html",
"/p/a-2.html",
"/p/a-3.html",
"/p/a-4.html",
"/p/a-5.html",
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
