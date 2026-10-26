// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Certificate Tabs
document.querySelectorAll('.cert-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove active class from all tabs
    document.querySelectorAll('.cert-tab').forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    this.classList.add('active');

    // Hide all panels
    document.querySelectorAll('.cert-panel').forEach(panel => panel.classList.remove('active'));
    // Show corresponding panel
    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});
