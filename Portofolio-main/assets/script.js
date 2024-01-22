function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

new Splide( '#card-carousel', {
    perPage    : 3,
    breakpoints: {
        1024: {
            perPage: 2,
        },
        767: {
            perPage: 1,
        },
    },
} ).mount();

// Select the section you want to show
let skills = document.querySelectorAll('#skills .card');

skills.forEach(card => {
    // Create an Intersection Observer
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the section is in view, add a class to make it visible
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // If the section is not in view, remove the class
          entry.target.classList.remove('visible');
        }
      });
    });
    observer.observe(card);
})

let works = document.querySelector("#works");

let observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the section is in view, add a class to make it visible
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // If the section is not in view, remove the class
        entry.target.classList.remove('visible');
      }
    });
  });
  observer2.observe(works);

// Start observing the section