// Smooth page transitions
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.href.includes(window.location.origin)) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location = link.href;
      }, 400);
    }
  });
});
