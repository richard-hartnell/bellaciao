document.getElementById('shaded-marquis').style.opacity = '1'

const about = document.getElementById('about');
const pizza = document.getElementById('pizza');
const drinks = document.getElementById('drinks');
const inside = document.getElementById('inside');

const menu1 = document.getElementById('menu-about');
const menu2 = document.getElementById('menu-pizza');
const menu3 = document.getElementById('menu-drinks');
const menu4 = document.getElementById('menu-inside');

function showMenu(menuId) {

    if (menuId === 'about') {
      about.style.display = 'block';
      pizza.style.display = 'none';
      drinks.style.display = 'none';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'bold';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'normal';
    } else if (menuId === 'pizza') {
      about.style.display = 'none';
      pizza.style.display = 'block';
      drinks.style.display = 'none';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'bold';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'normal';
    } else if (menuId === 'drinks') {
      about.style.display = 'none';
      pizza.style.display = 'none';
      drinks.style.display = 'block';
      inside.style.display = 'none';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'bold';
      menu4.style.fontWeight = 'normal';
      menu5.style.fontWeight = 'normal';
    } else if (menuId === 'inside') {
      about.style.display = 'none';
      pizza.style.display = 'none';
      drinks.style.display = 'none';
      inside.style.display = 'block';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'bold';
    }}