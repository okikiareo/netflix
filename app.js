const toggleButton = document.querySelectorAll(".page-toggle");

const handleToggle = (el) => {
    const parent = el.parentElement;
    const fields = parent.querySelector(".form-input");

    if (fields.type === "password") {
        fields.type = "text";
        el.src = "img/icon_show.svg";
    } else {
        fields.type = "password";
        el.src = "img/icon_hide.svg";
    }
}

toggleButton.forEach(button => {
    button.addEventListener("click", () => handleToggle(button));
});