
function toggleMenu() {

    const navMenu = document.getElementById("nav-menu");
    const navActions = document.getElementById("nav-actions");
    const menuBtn = document.getElementById("menu-btn");

    navMenu.classList.toggle("show");
    navActions.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

    });

});