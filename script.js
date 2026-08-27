const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

    });

});

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});