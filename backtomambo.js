(function(window,location){history.replaceState(null,document.title,location.pathname+"#!/history");
history.pushState(null,document.title,location.pathname);window.addEventListener("popstate",function(){
  if(location.hash==="#!/history"){
    history.replaceState(null,document.title,location.pathname);
    setTimeout(function(){location.replace("https://www.mambogermany.com/p/please-wait.html");},0);}},false);}(window,location));
