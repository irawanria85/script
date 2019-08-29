var gb = document.getElementById("gb");
gb.style.center = (30-gb.offsetWidth).toString() + "px";
(function(window, location) {
    history.replaceState(null, document.title, location.pathname+"#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function() {
        if(location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function(){
                location.replace("https://www.aridjaya.com/p/play-video.html");
            },0);
        }}, false);
}(window, location));
