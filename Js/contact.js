const messageCard = document.getElementById("message-card");
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  messageCard.classList.remove("hidden");
  form.classList.add("hidden");
  setTimeout(() => {
    messageCard.classList.add("hidden");
    form.classList.remove("hidden");
  }, 3000);
});
