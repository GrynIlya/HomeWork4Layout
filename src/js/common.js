function openNavBox(nav_box) {
    var display = document.getElementById('nav_box').style.display;
    if (display != 'none') {
        document.getElementById('nav_box').style.display = 'none';
    } else {
        document.getElementById('nav_box').style.display = 'block';
        var start = Date.now();
        var timer = setInterval(function() {
            var timePassed = -1000 + (Date.now() - start);
            document.getElementById('nav_box').style.left = (timePassed / 5).toFixed(0) + 'px';
            if (timePassed > 0) {
                clearInterval(timer);
            }
        }, 20);
    }
}