const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", (event) => {
    const wasActive = faq.classList.contains("active");
    faqs.forEach(f => f.classList.remove("active")); // Remove a classe "active" de todos os FAQs
    if (!wasActive) {
      faq.classList.add("active"); // Adiciona a classe "active" ao FAQ clicado
      faq.scrollIntoView({ behavior: "smooth", block: "nearest" }); // Faz a rolagem suave para o FAQ clicado
    }
  });
});
