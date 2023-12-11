
//var headerTitle = document.getElementById('header-title');
///var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';

//var header = document.querySelector('[data-container]');
//console.log(main);
//document.querySelector('[data-title]');
//main.style.backgroundcolor='green';


//getElementsByClassName
//var items = document.getElementsByClassName('list-group-item')
//console.log(items);
//console.log(items[0]);
//items[0].textContent = 'hello';
//items[1].style.fontWeight = 'bold';
//items[2].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'green';



//GETELEMENTBYTAGNAME
var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
li[0].textContent = 'hello';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'green';


//QUERYSELECTOR
//var header = document.querySelector('#main-header');
//header.computedStyleMap.borderBottoom = 'solid 4px #cc';

//var input = document.querySelector('input');
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value ="SEND";

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'green';


//QUERYSELECTORALL

var titles = document.querySelectorAll('.titles');
console.log(titles);
//titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}


