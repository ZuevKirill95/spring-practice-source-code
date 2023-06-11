const putInCart = (buttonHtml) => {
    const name = buttonHtml.parentNode.querySelector(".name").innerHTML;
    const price = buttonHtml.parentNode.querySelector(".price").innerHTML;

    const list = document.querySelector(".list");
    const items = list.querySelectorAll(".item");

    cleanEmptyBlock();

    const itemIfExists = getItemIfExists(items, name);

    if (itemIfExists) {
        const count = itemIfExists.querySelector(".count");
        count.innerHTML++;
    } else {
        const newItem = `<div class="card item">
                            <div class="card-body">
                                <h5 class="card-title name">${name}</h5>
                                <text class="price rub">${price}</text> за <text class="count">1</text> шт.
                            </div>
                        </div>`;

        list.innerHTML += newItem
    }

    incrementTotal(price)
}

const getItemIfExists = (items, name) => {
    let resultItem = null;

    items.forEach(item => {
        const itemName = item.querySelector(".name");

        if (itemName.innerHTML === name) {
            resultItem = item;
        }
    })

    return resultItem;
}

const incrementTotal = (price) => {
    const totalPriceElem = document.querySelector(".total-price");
    let totalPrice = Number(totalPriceElem.innerHTML);

    totalPrice += Number(price);
    totalPriceElem.innerHTML = totalPrice;
}

const cleanEmptyBlock = () => {
    const emptyBlock = document.querySelector(".empty");

    if (emptyBlock) {
        emptyBlock.remove();
    }
}

const clearList = () => {
    const list = document.querySelector(".list");
    const totalPriceElem = document.querySelector(".total-price");
    list.innerHTML = `<p class="empty card-text text-center">Пусто</p>`;
    totalPriceElem.innerHTML = 0;

}