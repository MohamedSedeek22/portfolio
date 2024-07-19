document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".changing-text");
    const texts = ["Web developer", "Pharmacist"];
    let currentIndex = 0;
    let isDeleting = false;
    let charIndex = 0;

    function type() {
        const currentText = texts[currentIndex];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex == 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % texts.length;
            }
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex == currentText.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, isDeleting ? 80 : 250);
    }

    type();
});
