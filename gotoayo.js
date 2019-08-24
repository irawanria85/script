/* Pergi ke Laman Ayo */
function eventualRedirect(redirectTo, timeoutPeriod) {
setTimeout("location.href = redirectTo;",timeoutPeriod);}
setTimeout("location.href = '/p/ayo.html';",20000);
/* Jika mengunakan PC */
if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.indexOf('Android')!=-1)){}
else location.replace("https://keepopedia.blogspot.com/p/tunggu-sebentar.html");
/* Tekan tombol Back */
history.pushState(null,null,'#');
window.addEventListener('popstate',function(event)
{history.pushState(null,null,'#');});
