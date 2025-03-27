document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tombol");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease";
        });
        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    buttons.forEach(button => {
        button.style.padding = "12px 18px";
        button.style.border = "none";
        button.style.borderRadius = "10px";
        button.style.background = "#000";
        button.style.color = "white";
        button.style.fontWeight = "bold";
        button.style.cursor = "pointer";
        button.style.transition = "all 0.3s ease";
    });

    const popup = document.createElement("div");
    popup.id = "customPopup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "rgba(0, 0, 0, 0.85)";
    popup.style.color = "white";
    popup.style.padding = "50px";
    popup.style.borderRadius = "20px";
    popup.style.textAlign = "center";
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
    popup.style.zIndex = "1000";
    popup.style.boxShadow = "0 10px 20px rgba(255, 255, 255, 0.3)";
    popup.style.fontSize = "28px";
    popup.style.width = "400px";
    popup.style.height = "200px";
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
    popup.style.fontWeight = "bold";
    popup.style.border = "3px solid white";
    document.body.appendChild(popup);

    const images = document.querySelectorAll(".profile img");
    images.forEach(image => {
        image.addEventListener("click", function () {
            const name = this.nextElementSibling.textContent;
            
            let audio = new Audio("miaw.wav");
            audio.play();

            popup.textContent = `Haloo aku, ${name}`;
            popup.style.visibility = "visible";
            popup.style.opacity = "1";
            setTimeout(() => {
                popup.style.opacity = "0";
                setTimeout(() => {
                    popup.style.visibility = "hidden";
                }, 500);
            }, 2000);
        });
    });
});
