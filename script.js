const goods = [
  { title: "Shirt" },
  { price: 50 },
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
];

// возвращает разметку для конкретного товара

// объявляем стрелочную функцию renderGoodsItem с параметрами title, price,
// которая возвращает разметку для конкретного товара:
// блок div с классом "goods-item", который уже создан в index.html
// функция только возвращает значение

// const renderGoodsItem = (title = "Товар", price = 0) => {
//   return `<div class="goods-item">
//   <h3>${title}</h3>
//   <p>${price}</p>
//   </div>`;
// };

// упростил - убрал фигурные скобки и return
// и добавил параметры по умолчанию "Товар" и 0
const renderGoodsItem = (title = "Товар", price = 0) =>
  `<div class="goods-item">
  <h3>${title}</h3>
  <p>${price}</p>
  </div>`;

// собирает все товары в один  список и записывает его в контейнер .goods-list:

// объявляем стрелочную функцию renderGoodsList с параметром list
const renderGoodsList = (list) => {
  // Метод map() создаёт новый массив с результатом вызова
  // указанной функции для каждого элемента массива
  let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));
  // выводим в div с классом .goods-list элемент goodsList
  // и убираем запятую с помощью .join("")
  // Если разделитель - пустая строка,
  // элементы массива ничем не разделяются в возвращаемой строке
  document.querySelector(".goods-list").innerHTML = goodsList.join("");
};

// запускаем функцию renderGoodsList с параметром: goods
renderGoodsList(goods);
