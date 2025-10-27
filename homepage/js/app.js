const sections = document.querySelectorAll('.lazy-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      const url = section.dataset.content;

      // Fetch and inject content
      fetch(url)
        .then(res => res.text())
        .then(html => {
          section.innerHTML = html;
          section.classList.add('loaded'); // trigger fade-in
        })
        .catch(() => section.innerHTML = '<p>Failed to load content.</p>');

      observer.unobserve(section); // stop watching this one
    }
  });
});

sections.forEach(section => observer.observe(section));