document.getElementById("year").textContent = new Date().getFullYear();
const items = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
items.forEach(item => observer.observe(item));

const viewer = document.querySelector(".image-viewer");
const viewerImage = viewer.querySelector("img");
document.querySelectorAll(".project-image").forEach(button => {
  button.addEventListener("click", () => {
    viewerImage.src = button.dataset.full;
    viewerImage.alt = button.querySelector("img").alt;
    viewer.showModal();
  });
});
viewer.querySelector(".viewer-close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", event => {
  if (event.target === viewer) viewer.close();
});
