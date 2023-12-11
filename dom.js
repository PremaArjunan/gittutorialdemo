
//var headerTitle = document.getElementById('header-title');
///var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';

//var header = document.querySelector('[data-container]');
//console.log(main);
//document.querySelector('[data-title]');
//main.style.backgroundcolor='green';


//getElementsByClassName
var items = document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[0]);
items[0].textContent = 'hello';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';



//GETELEMENTBYTAGNAME
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'green';

