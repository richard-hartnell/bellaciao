document.getElementById('shaded-marquis').style.opacity = '1'

const menu = document.getElementById('menu');
const pizza = document.getElementById('about');
const drinks = document.getElementById('something');
const inside = document.getElementById('inside');

const menu1 = document.getElementById('menu-menu');
const menu2 = document.getElementById('menu-food');
const menu3 = document.getElementById('menu-drinks');
const menu4 = document.getElementById('menu-inside');

function showMenu(menuId) {

    if (menuId === 'menu') {
      menu.style.display = 'block';
      pizza.style.display = 'none';
      drinks.style.display = 'none';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'bold';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'normal';
    } else if (menuId === 'about') {
      menu.style.display = 'none';
      pizza.style.display = 'block';
      drinks.style.display = 'none';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'bold';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'normal';
    } else if (menuId === 'something') {
      menu.style.display = 'none';
      pizza.style.display = 'none';
      drinks.style.display = 'block';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'bold';
      menu5.style.fontWeight = 'normal';
    } else if (menuId === 'inside') {
      menu.style.display = 'none';
      pizza.style.display = 'none';
      drinks.style.display = 'none';
      inside.style.display = 'block';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'bold';
    }}