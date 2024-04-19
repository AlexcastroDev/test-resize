function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function() {
            callback();
        };
    }

    script.src = url;
    document.head.appendChild(script);
}

window.onload = function() {
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js", function() {
        document.style.backgroundColor = 'red';
        const iframe = document.getElementsByTagName('iframe').at(0);
        if(iframe === undefined) return
        iFrameResize({ log: true }, iframe)
    });
}
