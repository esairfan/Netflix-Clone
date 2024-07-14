document.addEventListener("DOMContentLoaded", function() {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        const btn = faq.querySelector(".toggle-btn");
        const answer = faq.querySelector(".faq-answer");

        btn.addEventListener("click", () => {
            const isVisible = answer.style.display === "flex";
            answer.style.display = isVisible ? "none" : "flex";
            btn.textContent = isVisible ? "+" : "x";
        });
    });
});
