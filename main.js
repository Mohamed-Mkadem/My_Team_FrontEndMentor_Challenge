let toggler = document.querySelector(".toggler"),
    menu = document.querySelector(".mobile-menu"),
    memberInfos = document.querySelectorAll(".member .info"),
    memberBackFaces = document.querySelectorAll(".member .back-face"),
    buttons = document.querySelectorAll(".member button"),
    buttonImgs = document.querySelectorAll(".member button img"),
    inputs = document.querySelectorAll("form div .form-item"),
    requiredmessages = document.querySelectorAll("form div .required");



console.log(inputs);
console.log(requiredmessages);

toggler.addEventListener("click", () => {
    menu.classList.toggle("open");
    toggler.classList.toggle("open");
})



// About
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.previousElementSibling.classList.toggle("closed");
        btn.nextElementSibling.classList.toggle("open");
        btn.firstElementChild.classList.toggle("open");
        btn.classList.toggle("open");
    })

})

