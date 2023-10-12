var image = document.getElementById("image");
var resizeButton = document.getElementById("resizeButton");
var isResized = false;

resizeButton.addEventListener("click", function() {
    if (!isResized) {
        image.style.width = (image.width * 2) + "px";
        image.style.height = (image.height * 2) + "px";
        isResized = true;
    } else {
        image.style.width = "";
        image.style.height = "";
        isResized = false;
    }
});