const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".toggle");
    const ball = document.querySelector(".toggle-ball");
    const body = document.body;

    // Toggle dark and light mode
    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggle.classList.toggle("active");
    });
});

//SIDEBAR
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector(".sidebar-toggle");

  // Toggle sidebar expand/collapse
  toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("expanded");
  });

  // Close sidebar when clicking outside (for small screens)
  document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && sidebar.classList.contains("expanded")) {
          sidebar.classList.remove("expanded");
      }
  });
});


