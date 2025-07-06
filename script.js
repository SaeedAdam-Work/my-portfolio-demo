// Step 1: Toggle navigation menu (hamburger logic)
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector("nav ul");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("visible");
    });
  }

  // Step 2: Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Step 3: Filter Projects (basic demo filter logic)
  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll("#projects article");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      projects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // Step 4: Lightbox for project images
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll("#projects img");
  images.forEach(image => {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // Step 5: Contact form validation
  const form = document.querySelector("form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");
    let isValid = true;

    if (!name.value.trim()) {
      alert("Please enter your name.");
      isValid = false;
    }

    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      alert("Please enter a valid email.");
      isValid = false;
    }

    if (!message.value.trim()) {
      alert("Please enter a message.");
      isValid = false;
    }

    if (isValid) {
      alert("Thank you for your message!");
      form.reset();
    }
  });
});
