// Set current year in footer
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Alexander Rush. Built with ❤️ and GitHub Pages.`;
  
    // Optional: Toggle visibility of Selected Papers section
    const toggleSection = (selector) => {
      const section = document.querySelector(selector);
      if (section) {
        section.classList.toggle("hidden");
      }
    };
  
    // Add toggle button for Selected Papers
    const papersSection = document.querySelector("section:nth-of-type(5)");
    if (papersSection) {
      const btn = document.createElement("button");
      btn.textContent = "Toggle Selected Papers";
      btn.style.marginBottom = "1rem";
      btn.onclick = () => toggleSection("section:nth-of-type(5) ul");
      papersSection.insertBefore(btn, papersSection.querySelector("ul"));
    }
  });
