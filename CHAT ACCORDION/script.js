function toggleAccordion(header) {
    const content = header.nextElementSibling;
  
    // Toggle the current accordion item
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  
    // Optionally, close all other accordion items
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(item => {
      if (item !== content) {
        item.style.display = "none";
      }
    });
  }
  