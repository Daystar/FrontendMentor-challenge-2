const btns = document.querySelectorAll(".accordion-button")

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');

        const answer = this.nextElementSibling;
        const open = this.querySelector(".open");
        const close = this.querySelector(".close");

        if (answer.style.maxHeight && window.getComputedStyle(answer).maxHeight !== "0px") {
            answer.style.maxHeight = null;
            if (open && close) {
                open.style.display = 'block';
                close.style.display = 'none';
            }
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            if (open && close) {
                open.style.display = 'none';
                close.style.display = 'block';
            }
        }
    });
});
