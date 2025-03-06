function toggleNav() {
    let sidenav = document.getElementById("mySidenav");
    let toggleButton = document.getElementById("menuToggle");
    let mainContent = document.getElementById("main");
  
    if (sidenav.style.left === "0px") {
      closeNav();
    } else {
      openNav();
    }
  }
  
  function openNav() {
    let sidenav = document.getElementById("mySidenav");
    let toggleButton = document.getElementById("menuToggle");
    let mainContent = document.getElementById("main");
  
    sidenav.style.left = "0";
    toggleButton.textContent = "[- index]";
  
    // Shift content only on larger screens
    if (window.innerWidth > 900) {
      mainContent.style.marginLeft = "200px";
    }
  }
  
  function closeNav() {
    let sidenav = document.getElementById("mySidenav");
    let toggleButton = document.getElementById("menuToggle");
    let mainContent = document.getElementById("main");
  
    sidenav.style.left = "-1000px";
    toggleButton.textContent = "[+ index]";
    mainContent.style.marginLeft = "0";
  }
  
  // Close the menu when a link is clicked on small screens (≤900px)
  document.querySelectorAll(".sidenav a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        closeNav();
      }
    });
  });
  
  
  
  window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progressWidth = (scrollTop / scrollHeight) * 100;
  
    document.getElementById("progress").style.width = progressWidth + "%";
  });
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const sectional = document.getElementById("sectional");
    const placeholderText = "Pôle Artistique 4001 Berri"; // Default text
    let lastVisibleHeading = placeholderText; // Keep track of last valid heading
  
    // Find the `.hero` element
    const hero = document.querySelector(".hero");
  
    // Get all <h2> elements that come after `.hero`
    let headings = [];
    if (hero) {
      let nextElement = hero.nextElementSibling;
      while (nextElement) {
        if (nextElement.tagName === "H2") {
          headings.push(nextElement);
        }
        nextElement = nextElement.nextElementSibling;
      }
    }
  
    function updateSectional() {
      let newHeading = lastVisibleHeading; // Default to last seen heading
      let viewportHeight = window.innerHeight;
  
      // Check if the hero section is still in view
      const heroRect = hero.getBoundingClientRect();
      if (heroRect.top < viewportHeight && heroRect.bottom > 0) {
        newHeading = placeholderText; // Reset when hero is visible
      } else {
        headings.forEach((heading) => {
          const rect = heading.getBoundingClientRect();
          if (rect.top <= viewportHeight / 3 && rect.bottom >= 0) {
            newHeading = heading.textContent;
          }
        });
      }
  
      // Update only if the heading has changed
      if (newHeading !== lastVisibleHeading) {
        lastVisibleHeading = newHeading;
        sectional.textContent = lastVisibleHeading;
      }
    }
  
    window.addEventListener("scroll", updateSectional);
    updateSectional(); // Run once on load
  });
  