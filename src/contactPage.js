const renderContact = () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const title = document.createElement('h1');
    const number = document.createElement('p');
    const time = document.createElement('p');
    const image = document.createElement('div');

    number.textContent = "Phone number: (123) 546-7980";

    title.textContent = "Contact Us";
    time.setAttribute('style', 'white-space: pre;');
    time.textContent = "Takeout available from Mon - Fri \r\nLunch: 11am - 3pm\r\nDinner: 5pm - 9pm";

    image.classList.add('contact-image');

    content.appendChild(image);
    content.appendChild(title);
    content.appendChild(number);
    content.appendChild(time);
};

export default renderContact;