/* PERGI KE LAMAN JOS */
function eventualRedirect(redirectTo, timeoutPeriod) {
setTimeout("location.href = redirectTo;",timeoutPeriod);}
setTimeout("location.href = '/p/jos.html';",25000);
/* JIKA MENGGUNAKAN PC */
if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.indexOf('Android')!=-1)){}
else location.replace("//www.indonesiya.com/p/please-wait.html");
/* ANTI BACK */
history.pushState(null,null,'#');
window.addEventListener('popstate',function(event)
{history.pushState(null,null,'#');});
