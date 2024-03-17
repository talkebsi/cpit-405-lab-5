let divImageContainer = document.getElementById("InstaGall");
let uploadButton = document.getElementById("imageUpload");

uploadButton.addEventListener("change", function() {
    let file = this.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imgElm = document.createElement("img");
            imgElm.src = e.target.result;
            imgElm.width = 300;
            imgElm.height = 300;
            divImageContainer.appendChild(imgElm);

            let delButton = document.createElement("button");
            delButton.innerText = "delete";
            divImageContainer.appendChild(delButton);

            delButton.addEventListener("click", function() {
                imgElm.remove();
                delButton.remove();
            });

            let scaleFactor = 1.5;
            let zoomInBtn = document.createElement("button");
            zoomInBtn.innerText = " + ";
            divImageContainer.appendChild(zoomInBtn);

            zoomInBtn.addEventListener("click", function() {
                imgElm.width *= scaleFactor;
                imgElm.height *= scaleFactor;
            });

            let zoomOutBtn = document.createElement("button");
            zoomOutBtn.innerText = " - ";
            divImageContainer.appendChild(zoomOutBtn);
            zoomOutBtn.addEventListener("click", function() {
                imgElm.width /= scaleFactor;
                imgElm.height /= scaleFactor;
            });
        }
        reader.readAsDataURL(file);
    }
});