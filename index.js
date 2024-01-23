// ------- DOM Manipulation --------- //

// Получение всех элементов с тегом <p>
let paragraphs = document.getElementsByTagName("p");

// Обращение к первому элементу с тегом <p>
let firstParagraph = paragraphs[0];

// Изменение содержимого первого <p>
firstParagraph.innerHTML = "Привет, мир!";

// -------- Доступ к элементам по классам:
// Получение всех элементов с классом 'example'
let elementsWithClass = document.getElementsByClassName("example");

// Обращение к первому элементу с классом 'example'
let firstElementWithClass = elementsWithClass[0];

// Изменение стиля первого элемента с классом 'example'
firstElementWithClass.style.color = "blue";

// ---------  Доступ к элементам по идентификатору
// Получение элемента с идентификатором 'myElement'
let elementById = document.getElementById("myElement");

// Изменение содержимого элемента с идентификатором 'myElement'
elementById.innerHTML = "Это мой элемент!";

// ---------- Доступ к элементам с использованием querySelector
// Получение первого элемента с тегом <p>
let firstParagraphQuery = document.querySelector("p");

// Получение всех элементов с классом 'example'
let elementsWithClassQuery = document.querySelectorAll(".example");

// Получение элемента с идентификатором 'myElement'
let elementByIdQuery = document.querySelector("#myElement");

// ----------- EVENTS ------------ //

// # Обработчик события клика:
// Получение элемента по идентификатору
let clickElement = document.getElementById("clickElement");

// Добавление обработчика события клика
clickElement.addEventListener("click", function () {
  // alert('Элемент был кликнут!');

  // ------ Добавление и удаление элементов
  // Создание нового элемента
  let newElement = document.createElement("p");
  newElement.innerHTML = "Это новый параграф";

  // Добавление элемента в существующий элемент (например, в body)
  document.body.appendChild(newElement);

  // Удаление элемента
  let elementToRemove = document.getElementById("elementToRemove");
  elementToRemove.parentNode.removeChild(elementToRemove);
});

// Обработчик события наведения мыши:
// Получение элемента по идентификатору
let hoverElement = document.getElementById("hoverElement");

// Добавление обработчика события наведения мыши
hoverElement.addEventListener("mouseover", function () {
  alert("Мышь наведена на элемент!");
});

// # Обработчик события изменения значения
// Получение элемента по идентификатору
let changeElement = document.getElementById("changeElement");

// Добавление обработчика события изменения значения (например, для input)
changeElement.addEventListener("change", function () {
  alert("Значение элемента было изменено!");
});

// ##Комбинированные обработчики событий

// Получение элемента по идентификатору
let combinedElement = document.getElementById("combinedElement");

// Добавление нескольких обработчиков событий
combinedElement.addEventListener("click", function () {
  alert("Элемент был кликнут!");
});

combinedElement.addEventListener("change", function () {
  alert("Значение элемента было изменено!");
});
