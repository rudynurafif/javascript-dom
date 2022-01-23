// DOM Javascript

//=======================================================================//

// // DOM Selection
// // document.getElementById() -> mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Rudy Nurafif';

// // document.getElementsByTagName() -> mengembalikan HTML Collection (array)
// const p = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementsByClassName() -> HTML Collection (array)
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini dirubah dari javascript';

//=============================================================================================================================================================================//

// DOM Selection
// document.querySelector() -> menghasilkan element (hanya yg pertama, jika ada lebih dari 1)
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = "orange";

// // document.querySelectorAll() -> mengembalikan nodelist (array)
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }

// mengubah node root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';
// atau
// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

//=============================================================================================================================================================================//

// DOM Manipulation
// Manipulasi element
// Manipulasi Node

// MANIPULASI ELEMENT
// element.innerHTML (mengubah isi dari element/tag html)
// const judul = document.getElementById('judul');
// judul.innerHTML = "<em>Rudy Nurafif</em>";
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'paragraf1';

// element.stlye.<propertyCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// element.setAttribute() -> menambahkan attribute pada elemen
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'rudy');
// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link')

// element.getAttribute() -> untuk mengetahui isi attribute dari suatu elemen
// const a = document.querySelector('section#a a');
// a.getAttribute('href');
// judul.getAttribute('id');

// element.removeAttribute() -> untuk menghapus attribute
// a.removeAttribute('href');

// element.classList (memanipulasi class)
// contoh: element.classList.add(), element.classList.remove(), element.classList.toggle(), element.classList.item(), element.classList.contains(), element.classList.replace()
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label'); // akan true jika ditambahkan, false jika dihapus classnya

// document.body.style.backgroundColor = 'lightblue';
// document.body.classList.toggle('biru-muda');
// document.body.classList.toggle('biru-muda');

// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');
// p2.classList.item(2); // menghitung dari 0
// p2.classList.contains('dua'); // jika ada true, false jika tidak ada
// p2.classList.replace('tiga', 'empat');

// MANIPULASI NODE
// // ada beberapa method, yaitu = document.createElement(), document.createTextNode(), node.appendChild(), node.insertBefore(), parentNode.removeChild(), parentNode.replaceChild(), dll
// // buat element baru
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');
// // simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPBaru);
// // simpan pBaru di akhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item baru');
// liBaru.appendChild(teksLiBaru);
// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');
// ul.insertBefore(liBaru, li2);

// // parentNode.removeChild()
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// // parentNode.replaceChild()
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru');
// h2Baru.appendChild(teksH2Baru);
// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';

// method lainnya = https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

//=============================================================================================================================================================================//
