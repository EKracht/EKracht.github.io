document.ready(function() {
    var offsetHeight = document.getElementById('container').offsetHeight;   
    var screenHeight = screen.height;

if(offsetHeight < screenHeight){
    document.getElementById("footer").style.position = "fixed";
    document.getElementById("footer").style.bottom = "0";
    document.getElementById("footer").style.left = "0";
}
})();
