import renderHome from './homePage';
import renderMenu from './menuPage';
import renderContact from './contactPage';
import './style.css';
  
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

home.addEventListener('click', () => {
    renderHome();
})

menu.addEventListener('click', () => {
    renderMenu();
})

contact.addEventListener('click', () => {
    renderContact();
})

renderHome();