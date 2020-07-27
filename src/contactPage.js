const renderContact = () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const title = document.createElement('h1');
    const time = document.createElement('p');

    title.textContent = "Contact Us";
    time.setAttribute('style', 'white-space: pre;');
    time.textContent = "Takeout available from Mon - Fri \r\nLunch: 11am - 3pm\r\nDinner: 5pm - 9pm";

    content.appendChild(title);
    content.appendChild(time);
};

export default renderContact;