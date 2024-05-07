let goods = [];
let WAY = "data/data.xml";
function loadXML(url) {
    return fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            goods = Array.from(data.querySelectorAll('slot')).map(goods => {
                return {
                    name: goods.querySelector('name').textContent,
                    discr: goods.querySelector('description').textContent,
                    price: goods.querySelector('price').textContent,
                    image: goods.querySelector('image').textContent,
                };
            });
            return goods;
        });
}
function addItemsToDOM(goods) {
    const goodsList = document.querySelector('.goods');
    goods.forEach(good => {
        if (good.name === "Elite") {
            const goodDiv = document.createElement('div');
            goodDiv.className = 'good-div';
            goodDiv.innerHTML = `
                <img src="${good.image}">
                <p>${good.name}</p>
                <p>${good.discr}</p>
                <p> ${good.price}</p>
            `;
            goodsList.appendChild(goodDiv);
        }
        else if(good.name==="Cefiro"){
            const goodDiv = document.createElement('div');
            goodDiv.className = 'good-div';
            goodDiv.innerHTML = `
                <img src="${good.image}">
                <p>${good.name}</p>
                <p>${good.discr}</p>
                <p> ${good.price}</p>
            `;
            goodsList.appendChild(goodDiv);
        }
        else if(good.name==="Lilly"){
            const goodDiv = document.createElement('div');
            goodDiv.className = 'good-div';
            goodDiv.innerHTML = `
                <img src="${good.image}">
                <p>${good.name}</p>
                <p>${good.discr}</p>
                <p> ${good.price}</p>
            `;
            goodsList.appendChild(goodDiv);
        }
        else if(good.name==="Honey Oud"){
            const goodDiv = document.createElement('div');
            goodDiv.className = 'good-div';
            goodDiv.innerHTML = `
                <img src="${good.image}">
                <p>${good.name}</p>
                <p>${good.discr}</p>
                <p> ${good.price}</p>
            `;
            goodsList.appendChild(goodDiv);
        }

    });
}
document.addEventListener('DOMContentLoaded', function () {

    loadXML(WAY).then(() => {
        addItemsToDOM(goods);
    })
        .catch(error => console.error('Error fetching XML:', error));
})