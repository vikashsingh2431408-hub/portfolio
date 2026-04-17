document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      if (data.aboutMe) {
        const aboutTextEl = document.getElementById("about-text-container");
        if (aboutTextEl) {
          aboutTextEl.textContent = data.aboutMe.description;
        }

        const socialsContainer = document.getElementById("social-cards-container");
        if (socialsContainer && data.aboutMe.socials) {
          socialsContainer.innerHTML = data.aboutMe.socials.map(social => `
            <div class="about-card">
              <div class="icon-wrapper">${social.svg}</div>
              <h3>${social.name}</h3>
              <p>${social.description}</p>
              <a href="${social.url}" target="_blank" class="btn">View Profile</a>
            </div>
          `).join("");
        }
      }

     const projectsContainer = document.getElementById("projects-container");
      if (projectsContainer && data.projects) {
        projectsContainer.innerHTML = data.projects.map(project => `
          <div class="project-card">
            <div class="project-image">
              <img src="${project.image}" alt="${project.name}">
            </div>
            <div class="project-content">
              <h3>${project.name}</h3>
              <p>${project.about}</p>
              <a href="${project.live_url}" target="_blank" class="btn-outline">View Project</a>
            </div>
          </div>
        `).join("");
      }

      const certsContainer = document.getElementById("certificates-container");
      if (certsContainer && data.certifications) {
        certsContainer.innerHTML = data.certifications.map(cert => `
          <div class="about-card">
            <div class="icon-wrapper">${cert.svg}</div>
            <h3>${cert.name}</h3>
            <p>${cert.description}</p>
            <a href="${cert.url}" target="_blank" class="btn">View Certificate</a>
          </div>
        `).join("");
      }
    })
    .catch((error) => console.error("Error loading data.json:", error));
});

function go(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}