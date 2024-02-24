document.getElementById('shaded-marquis').style.opacity = '1'

const menu = document.getElementById('menu');
const about = document.getElementById('about');
const something = document.getElementById('something');
const inside = document.getElementById('inside');

const menu1 = document.getElementById('menu-menu');
const menu2 = document.getElementById('menu-about');
const menu3 = document.getElementById('menu-something');
const menu4 = document.getElementById('menu-inside');

function showMenu(menuId) {

    if (menuId === 'menu') {
      menu.style.display = 'block';
      about.style.display = 'none';
      something.style.display = 'none';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'bold';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'normal';
    } else if (menuId === 'about') {
      menu.style.display = 'none';
      about.style.display = 'block';
      something.style.display = 'none';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'bold';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'normal';
    } else if (menuId === 'something') {
      menu.style.display = 'none';
      about.style.display = 'none';
      something.style.display = 'block';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'bold';
      menu5.style.fontWeight = 'normal';
    } else if (menuId === 'inside') {
      menu.style.display = 'none';
      about.style.display = 'none';
      something.style.display = 'none';
      inside.style.display = 'block';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'bold';
    }}