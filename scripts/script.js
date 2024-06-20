var navbar = document.querySelector(".navbar");
var aboutPage = document.querySelector("#about");
var projectsPage = document.querySelector("#projects");

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    switch (item.id) {
      case "nav-home":
        var top = 0;
        break;
      case "nav-about":
        if (!aboutPage) {
          return;
        }
        var top = aboutPage.offsetTop - 50;
        break;
      case "nav-projects":
        if (!projectsPage) {
          return;
        }
        var top = projectsPage.offsetTop - 50;
        break;
      default:
        return;
    }

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});

document.querySelector(".arrow-down").addEventListener("click", (e) => {
  e.preventDefault();

  if (!aboutPage) {
    return;
  }

  window.scrollTo({
    top: aboutPage.offsetTop - 50,
    behavior: "smooth",
  });
});

window.onscroll = () => {
  if (!navbar) {
    return;
  }

  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

var email = atob("ZGFuaWVsLWEtbGl1QG91dGxvb2suY29t");
var emailLink = document.querySelector("#email-link");

window.onload = () => {
  emailLink.innerHTML = email;
  emailLink.href = "mailto:" + email;
};
