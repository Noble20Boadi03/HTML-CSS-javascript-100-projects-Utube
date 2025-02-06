// const selectedOption = document.querySelectorAll('.nav_link');

// selectedOption.forEach(navLink => {
//     navLink.addEventListener('click', () => {
//         document.querySelectorAll('.active')?.classList.remove('active');
//         navLink.classList.add('active');
//     });
// });




const Links = document.querySelectorAll('.nav_link');
const Notes = document.querySelectorAll('.notes');

Links.forEach(link => {
    link.addEventListener('click', () => {

        Notes.forEach(sect => sect.classList.remove('active'));

        const targetCon = link.getAttribute('accesskey');

        document.getElementById(targetCon).classList.add('active');

    });
});



// accordion for employeepage js 

const FaqRows = document.querySelectorAll(".faqrows");

FaqRows.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});




