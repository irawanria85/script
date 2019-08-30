/* PERGI KE LAMAN LANJUT */
function eventualRedirect(redirectTo, timeoutPeriod) {
setTimeout("location.href = redirectTo;",timeoutPeriod);}
setTimeout("location.href = '/p/lanjut.html';",25000);
/* KEMBALI KE LANJUT */
(function(window, location) {history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);
window.addEventListener("popstate", function() {if(location.hash === "#!/history") {
history.replaceState(null, document.title, location.pathname);setTimeout(function(){
location.replace("/p/lanjut.html");},0);}}, false);}(window, location));
