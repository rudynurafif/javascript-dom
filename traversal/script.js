// const closed = document.querySelectorAll(".close"); // node list / array

// for (let i = 0; i < closed.length; i++) {
//   closed[i].addEventListener("click", function (e) {
//     // closed[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = 'none';
//   });
// }

/*

DOM Transversal Method
- parentNode, node
- parentElement, element HTML
- nextSibling, node
- nextElementSibling, element
- previousSibling, node
- previousElementSibling, element

*/

// closed.forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault(); // prevent default
//     e.stopPropagation(); // stop event bubbling parentnya
//   })
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//   card.addEventListener('click', function() {
//     alert('ok!');
//   });
// }); 

// const nama = document.querySelector('.nama');
// console.log(nama.previousElementSibling);

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
  if(e.target.className == 'close' ) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});

