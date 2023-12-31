# frontend72-week16

## Week 16. Практическое задание №2.

### Форма регистрации с валидацией всех полей.

1 Создайте HTML-страницу с формой для регистрации пользователя, содержащую следующие поля:

- Поле ввода имени: обязательное поле, должно содержать только буквы и пробелы. Должно иметь атрибуты placeholder, required, minlength и maxlength. Длина имени должна быть от 2 до 20 символов.
- Поле ввода электронной почты: обязательное поле, должно быть в формате email (содержать символ '@' и доменное имя). Должно иметь атрибуты placeholder и required.
- Поле ввода возраста: обязательное поле. Должно иметь атрибуты placeholder и required.
- Поле выбора пола: представленное в виде radio buttons для выбора между мужчиной и женщиной
- Поле выбора профессии: обязательное поле, представленное в виде выпадающего списка (select). Должно иметь атрибуты required и placeholder для выбора профессии. Варианты профессий: Врач, Программист, Учитель, Дизайнер, Инженер, Продавец, Другое.
- Поле ввода пароля: обязательное поле, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру. Должно иметь атрибуты placeholder, required, minlength и pattern.
- Поле повтора пароля: обязательное поле, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру. Должно иметь атрибуты placeholder, required, minlength и pattern.
- Поле checkbox, показывающее согласие пользователя с обработкой данных. Должно иметь атрибут required.
- Кнопка отправки формы (submit)
- Добавьте атрибут novalidate к тегу <form> для отключения браузерной валидации и использования пользовательской валидации на основе JavaScript

2 Добавьте стили, чтобы форма выглядела отлично

3 Используя JavaScript, добавьте обработчик события отправки формы (submit), который будет выполнять следующие действия:

- Отменять действие по умолчанию для события submit
- Создайте функцию, которая будет проверять валидность переданного поля с использованием свойства validity. Если поле не валидно, добавлять класс error к полю (который будет обводить или подчеркивать поле красным цветом) и отображать сообщение об ошибке в соответствующем элементе span с помощью свойства validationMessage.
- Обязательно проверяйте выбран ли checkbox. Если он не выбран, добавляйте класс error к checkbox и отображайте сообщение об ошибке в соответствующем элементе span
- Создайте функцию, которая будет очищать сообщения об ошибках и удалять классы ошибок у полей и checkbox
- Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму

4 Бонусное задание: добавьте динамическую проверку валидности полей при вводе пользователем. При каждом изменении значения в поле, проверяйте его валидность и добавляйте соответствующее сообщение об ошибке (как в примере).
