const form = document.forms.registration;

const name = form.elements.name;
const email = form.elements.email;
const age = form.elements.age;
const gender = form.elements.gender;
const profession = form.elements.profession;
const password = form.elements.password;
const passwordRepeat = form.elements.passwordRepeat;
const checkbox = form.elements.checkbox;
const buttonSubmit = form.elements.buttonSubmit;

const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorAge = document.getElementById('errorAge');
const errorGender = document.getElementById('errorGender');
const errorProfession = document.getElementById('errorProfession');
const errorPassword = document.getElementById('errorPassword');
const errorPasswordRepeat = document.getElementById('errorPasswordRepeat');
const errorCheckbox = document.getElementById('errorCheckbox');


/*3 Используя JavaScript, добавьте обработчик события отправки формы (submit), который будет выполнять следующие действия:
o	Отменять действие по умолчанию для события submit

o	Создайте функцию, которая будет проверять валидность переданного поля с использованием свойства validity. 
Если поле не валидно, добавлять класс error к полю (который будет обводить или подчеркивать поле красным цветом) и 
отображать сообщение об ошибке в соответствующем элементе span с помощью свойства validationMessage.

o	Обязательно проверяйте выбран ли checkbox. Если он не выбран, добавляйте класс error к checkbox и 
отображайте сообщение об ошибке в соответствующем элементе span

o	Создайте функцию, которая будет очищать сообщения об ошибках и удалять классы ошибок у полей и checkbox

o	Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму

4 Бонусное задание: добавьте динамическую проверку валидности полей при вводе пользователем. 
При каждом изменении значения в поле, проверяйте его валидность и добавляйте соответствующее сообщение об ошибке.*/