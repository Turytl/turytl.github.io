document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".snap-root");
  const targets = document.querySelectorAll(".copy-container");

  if (!("IntersectionObserver" in window)) {
    targets.forEach(t => t.classList.add("in-view"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("in-view", entry.isIntersecting && entry.intersectionRatio > 0.5);
    });
  }, {
    root,
    threshold: [0.5]
  });

  targets.forEach(t => io.observe(t));
});
