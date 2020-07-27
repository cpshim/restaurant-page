const renderHome = () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const title = document.createElement('h1');
    const p = document.createElement('p');
    const image = document.createElement('img');
    const imgdiv = document.createElement('div');

    title.textContent = "Welcome to Sakura Izakaya!";
    p.textContent = "We serve authentic and fusion Japanese food at the" + 
        " highest of quality. We use fresh ingredients and serve them in a " +
        "luxurious setting to create an experience you will never forget.";
    imgdiv.classList.add('image-div');

    imgdiv.appendChild(image);

    content.appendChild(imgdiv);
    content.appendChild(title);
    content.appendChild(p);
};

export default renderHome;