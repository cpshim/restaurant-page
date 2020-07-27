const renderHome = () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const title = document.createElement('h1');
    const p = document.createElement('p');
    const image = document.createElement('img');
    const imgdiv = document.createElement('div');

    title.textContent = "Welcome!";
    p.textContent = "This is the best restaurant to experience asian cuisine!";
    //image.setAttribute("src", "sushimain.jpg");
    //image.classList.add('mainpic');
    imgdiv.classList.add('image-div');

    imgdiv.appendChild(image);

    content.appendChild(imgdiv);
    content.appendChild(title);
    content.appendChild(p);
};

export default renderHome;