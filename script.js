document.addEventListener("DOMContentLoaded", () => {
  // Dropdown toggle logic
  const allDropdowns = document.querySelectorAll(".dropdown");

  allDropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropbtn");
    const menu = dropdown.querySelector(".dropdown-content");
    const items = menu.querySelectorAll("a");

    // Handle button click
    button.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close other dropdowns
      allDropdowns.forEach(d => {
        if (d !== dropdown) {
          d.querySelector(".dropdown-content").classList.remove("show");
          d.querySelector(".dropbtn").classList.remove("active");
          d.querySelectorAll("a").forEach(link => link.classList.remove("highlighted"));
        }
      });

      // Toggle current dropdown
      menu.classList.toggle("show");
      button.classList.add("active"); // Always add glow
    });

    // Handle hover effect
    items.forEach(item => {
      item.addEventListener("mouseenter", () => {
        // Remove highlight from all
        items.forEach(i => i.classList.remove("highlighted"));
        item.classList.add("highlighted");
      });
    });
  });

  // Close dropdowns on outside click
  window.addEventListener("click", () => {
    allDropdowns.forEach(dropdown => {
      dropdown.querySelector(".dropdown-content").classList.remove("show");
      dropdown.querySelector(".dropbtn").classList.remove("active");
      dropdown.querySelectorAll("a").forEach(link => link.classList.remove("highlighted"));
    });
  });
});



function handleSubmit(event) {
    event.preventDefault(); // Prevents page reload

    const emailInput = document.querySelector('.ea');
    const email = emailInput.value.trim();

    if (email) {
        console.log("Submitted email:", email);

        // You can send it to server here using fetch/ajax, or show a message:
        alert(`Thank you! We'll contact you at: ${email}`);
    } else {
        alert("Please enter a valid email.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".rank-scroll");
  const leftBtn = document.querySelector(".arr.left");
  const rightBtn = document.querySelector(".arr.right");

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -930, behavior: "smooth" });
    setTimeout(updateArrowVisibility, 400);
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 930, behavior: "smooth" });
    setTimeout(updateArrowVisibility, 400);
  });

  scrollContainer.addEventListener("scroll", updateArrowVisibility);

  updateArrowVisibility();
});

function updateArrowVisibility() {
  const scrollContainer = document.querySelector(".rank-scroll");
  const leftArrow = document.querySelector(".arrow-container.left");
  const rightArrow = document.querySelector(".arrow-container.right");

  const scrollLeft = scrollContainer.scrollLeft;
  const scrollWidth = scrollContainer.scrollWidth;
  const clientWidth = scrollContainer.clientWidth;

  if (scrollLeft <= 5) {
    leftArrow.style.visibility = "hidden";
    leftArrow.style.pointerEvents = "none";
  } else {
    leftArrow.style.visibility = "visible";
    leftArrow.style.pointerEvents = "auto";
  }

  if (scrollLeft + clientWidth >= scrollWidth - 5) {
    rightArrow.style.visibility = "hidden";
    rightArrow.style.pointerEvents = "none";
  } else {
    rightArrow.style.visibility = "visible";
    rightArrow.style.pointerEvents = "auto";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  // ... existing scroll/arrow logic ...

  // FAQ accordion logic
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Optional: close all others
      faqItems.forEach(i => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});






