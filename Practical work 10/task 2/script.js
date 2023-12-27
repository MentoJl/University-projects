function showImages() {
    var jsonInput = document.getElementById("jsonInput").value;

    try {
        var filesArray = JSON.parse(jsonInput);
        document.getElementById("errorMessage").innerHTML = "";
        document.getElementById("imageContainer").innerHTML = "";

        for (var i = 0; i < filesArray.length; i++) {
            var thumbnail = document.createElement("img");
            thumbnail.src = filesArray[i].trim();
            thumbnail.className = "thumbnail";
            thumbnail.title = "Натисніть, щоб відкрити в реальному розмірі";
            thumbnail.addEventListener("click", function () {
                showFullImage(this.src);
            });

            document.getElementById("imageContainer").appendChild(thumbnail);
        }
    } catch (error) {
        document.getElementById("errorMessage").innerHTML = "Помилка у форматі JSON";
    }
}

function showFullImage(src) {
    var fullImage = document.getElementById("fullImage");
    fullImage.src = src;
    document.getElementById("fullImageContainer").style.display = "flex";
}

function hideFullImage() {
    document.getElementById("fullImageContainer").style.display = "none";
}