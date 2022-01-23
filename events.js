/* 

Event pada javascript merepresentasikan sebuah kejadian yang terjadi didalam DOM

Kejadian tersebut bisa dilakukan oleh user, ataupun dilakukan secara otomatis oleh API

Cara mendengarkan event
  - Event Handler
    - Inline HTML attribute
    - Element method
  - addEventListener()

Daftar event
  - Mouse event (click, dblclick, mouseover, mouseenter, mouseup, wheel, dll)
  - Keyboard event (keydown, keypress, keyup)
  - Resources event
  - Focus event
  - View event (resize, scroll)
  - Form event (reset, submit)
  - CSS animation dan transition event
  - Drag and drop event
  dll (https://developer.mozilla.org/en-US/docs/Web/Events)

*/

// const p3 = document.querySelector('.p3');
// function ubahWarnaP2() {
//   p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//   const ul = document.querySelector('section#b ul');
//   const liBaru = document.createElement('li');
//   const teksLiBaru = document.createTextNode('item baru');
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');

// event handler
// p3.onclick = function() {
//   p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//   p3.style.color = 'red';
// }

// addeventlistener
p3.addEventListener('click', function() {
  p3.style.backgroundColor = 'lightblue';
})
p3.addEventListener('click', function() {
  p3.style.color = 'red';
})