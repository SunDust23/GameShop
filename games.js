// Массив объектов с данными, которые нужно применять в каждом повторяющемся блоке
let data = [
    { _id: 0, img: './games/img1.jpg', title: 'Смотреть собак', developer: "Юбики", text: 'Покупай хот-дога, дразни корейцев', price: '1099' },
    { _id: 1, img: './games/img2.jpg', title: 'Лихой Семёнъ', developer: "Крокоманда", text: 'Крайне серьёзная игра', price: '449' },
    { _id: 2, img: './games/img3.jpg', title: 'Воевать-мастерить', developer: "Метелица", text: 'Во имя света!', price: '1699' },
    { _id: 3, img: './games/img4.jpg', title: 'Выброс 4', developer: "Беседка", text: 'Война всегда один', price: '1999' },
    { _id: 4, img: './games/img5.jpg', title: 'Масса проблем', developer: "Электронные арты", text: 'Проблем с анимацией...', price: '1000' },
    { _id: 5, img: './games/img6.jpg', title: 'Тёмный соус', developer: "Из мягкого обеспечения", text: 'Восславь Солнце!', price: '1000' },
    { _id: 6, img: './games/img7.jpg', title: 'Валькин дед', developer: "Хвостотрёпные игры", text: 'Я не плачу, это дощщь', price: '590' },
    { _id: 7, img: './games/img8.jpg', title: 'Бердянск', developer: "Квантовые мечты", text: 'Будьте же людьми!', price: '999' },
    { _id: 8, img: './games/img9.jpg', title: 'Смертельная скрутка', developer: "Кодзима - Гений", text: 'Слишком гениально, чтобы иметь название', price: '5899' },
    { _id: 9, img: './games/img10.jpg', title: 'Просто Потомучто 2', developer: "Квадратный", text: 'Потому что гладиолус', price: '369' },
    { _id: 10, img: './games/img11.jpg', title: 'Дед спец', developer: "Электронные арты", text: 'Страшна, вырубай!!1!!', price: '740' },
    { _id: 11, img: './games/img12.jpg', title: 'КиберВедьмак 2077', developer: "Компакт-диск проект красный", text: 'В комплекте с Киану Ривз', price: '4999' },
    { _id: 12, img: './games/img13.jpg', title: 'ДЕРевня', developer: "Кепка комом", text: 'Выжить без интернета', price: '3699' },
    { _id: 13, img: './games/img14.jpg', title: 'Мясной комбинат 11', developer: "Нижний мир Область Студии", text: 'Гладиатор! Бессмертный бой!', price: '1740' },
    { _id: 14, img: './games/img15.jpg', title: 'Подайте бумагу', developer: "Какой-то чувак", text: 'Слава Арстоцке!', price: '320' },
];

let cart = [
    // {
    //     title: 'product 1', price: '1234'
    // },
    // {
    //     title: 'product-хуёдукт', price: '1488'
    // },
    // {
    //     title: 'Что-то 1', price: '1337'
    // },
    // {
    //     title: 'Худи', price: '4191'
    // },
];

// Функция, которая возвращает один элемент повторяющегося шаблона
// с вставкой в него переменных
const getRowTemplate = (img, title, developer, text, price, id) => {

    return `
            <div class="column">
                <div class="card">
                    <img src="${img}" class="image"/>
                        <div class="container">
                            <h2>${title}</h2>
                            <p class="title">${developer}</p>
                            <p>${text}</p>
                            <p>${price} руб.</p>
                            <p><input type="button" class="button" onclick="addToCart(${id})" value="Добавить в корзину"></p>
                        </div>
                </div>
            </div>
    `;
};

// Функция, которая пробегается по всему массиву и на каждой итерации
// подставляет данные из одного элемента массива в функиwb. взятия шаблона Html
const getAllNews = (data) => {
    let content = '';

    data.forEach(el => {
        content += getRowTemplate(el.img, el.title, el.developer, el.text, el.price, el._id);
    });

    return content;
};

// Функция рендера всего контента на основе переданных данных
const renderAllNews = (data) => {
    document.getElementById('news').innerHTML = getAllNews(data);
};

renderAllNews(data);


function addToCart(id)
{
    console.log(data[id].title, data[id].price);
    cart.push({title: data[id].title, price: data[id].price});
    renderAllCarts(cart);
    renderTotalPrice(cart);
    renderCount(cart);
}



// const addToCart = (title) => {
//     // let obj = [{title: title, price: "100"}];
//     console.log(title, 'price');
//     // cart.push(obj);
// }


const getRowCart = (title, price) => {
    return `
    <p><a href="#">${title}</a> <span class="price">${price} руб.</span></p>
    `;
}

const getAllCarts = (cart) => {
    let content = '';
 
    cart.forEach(el => {
        content += getRowCart(el.title, el.price);
    });

    return content;
};

const renderAllCarts = (cart) => {
    document.getElementById('carts').innerHTML = getAllCarts(cart);
};

renderAllCarts(cart);



const getTotalPrice = (cart) => {
    let totalPrice = 0;

    cart.forEach(el => {
        let num = Number(el.price);
        totalPrice += num;
    });

    return totalPrice;
}

const renderTotalPrice = (cart) => {
    document.getElementById('prices').innerHTML = getTotalPrice(cart);
}

renderTotalPrice(cart);



const getCartCount = (cart) => {
    let count = 0;

    cart.forEach(el => {
        count += 1;
    });

    return count;
}

const renderCount = (cart) => {
    document.getElementById('counts').innerHTML = getCartCount(cart);
}

renderCount(cart);