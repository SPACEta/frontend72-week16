const list = document.getElementById('list');
const max = document.getElementById('max');
const min = document.getElementById('min');

//Создайте массив городов, например cities
const cities = ['Париж', 'Мадрид', 'Рим', 'Рига'];

//Создайте пустой массив, который будет хранить температуры для каждого города
let temps = [];

// записать значения в массив
for (let i = 0; i < cities.length; i++) {
    temps.push(prompt("Введите температуру для города " + cities[i], ''));
};

/*Создайте список, в котором будет отображаться информация о каждом городе и его температуре. 
Тут нужно будет использовать цикл для перебора элементов массивов, 
создать элементы и добавить их в список, указывая название города и соответствующую температуру.*/
for (let i = 0; i < temps.length; i++) {
    const newCity = document.createElement('li');   //создать элементы
    newCity.textContent = `Температура в городе ${cities[i]}: ${temps[i]} °C`;
    list.appendChild(newCity);   //добавить их в список
};

/*Найдите максимальную и минимальную температуру из массива с температурами. 
Для этого создайте две переменные и инициализируйте их значениями, 
которые гарантированно будут больше и меньше любой возможной температуры соответственно.*/
(function () {
    let maxTemp = Math.max(...temps);
    let minTemp = Math.min(...temps); 
    max.textContent = `Максимальная температура: ${maxTemp} °C`;
    min.textContent = `Минимальная температура: ${minTemp} °C`;
}) ();