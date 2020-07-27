const renderMenu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const title = document.createElement('h1');

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menugrid');

    const starters = document.createElement('div');
    starters.classList.add('starters');
    const rice = document.createElement('div');
    rice.classList.add('rice');
    const noodles = document.createElement('div');
    noodles.classList.add('noodles');
    const sushi = document.createElement('div');
    sushi.classList.add('sushi');
    const drinks = document.createElement('div');
    drinks.classList.add('drinks');
    const dessert = document.createElement('div');
    dessert.classList.add('dessert');

    title.textContent = "Our Menu";
    starters.textContent = "Starters";
    rice.textContent = "Rice";
    noodles.textContent = "Noodles";
    sushi.textContent = "Sushi";
    drinks.textContent = "Drinks";
    dessert.textContent = "Dessert";

    content.appendChild(title);

    menuGrid.appendChild(starters);
    menuGrid.appendChild(rice);
    menuGrid.appendChild(noodles);
    menuGrid.appendChild(sushi);
    menuGrid.appendChild(drinks);
    menuGrid.appendChild(dessert);

    content.appendChild(menuGrid);
};

export default renderMenu;