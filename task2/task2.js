const formRegistration = document.forms.registration;

const nameImput = formRegistration.elements.nameImput;
const email = formRegistration.elements.email;
const age = formRegistration.elements.age;
const genders = formRegistration.querySelectorAll('input[type="radio"]');
const profession = formRegistration.elements.profession;
const password = formRegistration.elements.password;
const passwordRepeat = formRegistration.elements.passwordRepeat;
const checkbox = formRegistration.elements.checkbox;
const buttonSubmit = formRegistration.elements.buttonSubmit;

const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorAge = document.getElementById('errorAge');
const errorAgeSecond = document.getElementById('errorAgeSecond');
const errorGender = document.getElementById('errorGender');
const errorProfession = document.getElementById('errorProfession');
const errorPassword = document.getElementById('errorPassword');
const errorPasswordRepeat = document.getElementById('errorPasswordRepeat');
const errorCheckbox = document.getElementById('errorCheckbox');

buttonSubmit.addEventListener('click', function(evt) {
    evt.preventDefault();

//валидация для поля Имя
    if (nameImput.value.trim() === '') {
        errorName.textContent = 'Введите имя';
        nameImput.classList.add("error");
    } else {
        errorName.textContent = "";
        nameImput.classList.remove("error");
    }

//валидация для поля Email
    let emailRegexp = /^\w+@\w+\.\w+$/;
	let emailValue = email.value;
	if (emailRegexp.test(emailValue)) {
		errorEmail.textContent = "";
        email.classList.remove("error");
	} else {
		errorEmail.textContent = "Неправильный формат почты";
        email.classList.add("error");
	}

//валидация для поля Возраст
    if (age.value.trim() === '') {
        errorAge.textContent = 'Введите возраст';
        age.classList.add("error");
	} else {
		errorAge.textContent = "";
        age.classList.remove("error");
    }

    let ageRegexp = /^\d{1,3}$/;
	let ageValue = age.value;
	if (ageRegexp.test(ageValue)) {
		errorAgeSecond.textContent = "";
        age.classList.remove("error");
	} else {
		errorAgeSecond.textContent = "Неправильный формат возраста";
        age.classList.add("error");
	}

//валидация для поля Пол
    let checkedRadio = false;
	genders.forEach(function (gender) {
		if (gender.checked) {
			checkedRadio = true;
		}
	});

	if (!checkedRadio) {
		errorGender.textContent = 'Ни один из чекбоксов не выбран, выберите нужный вариант, пожалуйста';

	} else {
		errorGender.textContent = "";
	}
    console.log("Пол:", formRegistration.querySelectorAll('input[type="radio"]:checked').value);

//валидация для поля Профессия
    if (profession.value === "") {
        errorProfession.textContent = "Вы должны выбрать элемент из списка";
}

//валидация для поля Пароль
    const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordValue = password.value;
    if (passwordRegexp.test(passwordValue)) {
        errorPassword.textContent = "";
        password.classList.remove("error");
    } else {
        errorPassword.textContent = "Неправильный формат пароля, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру";
        password.classList.add("error");
    }

//валидация для поля Пароль повторный
    if (password.value !== passwordRepeat.value) {
        errorPasswordRepeat.textContent = "Пароли не совпадают";
        passwordRepeat.classList.add("error");
    } else {
        errorPasswordRepeat.textContent = "";
        passwordRepeat.classList.remove("error");
    }

//валидация для поля Согласие
    if (!checkbox.checked) {
        errorCheckbox.textContent = 'Необходимо согласие на обработку данных.';
    }
    console.log("Согласие:", checkbox.value);

});

if (
    nameImput.checkValidity() &&
    email.checkValidity() &&
    age.checkValidity() &&
    formRegistration.querySelectorAll('input[type="radio"]:checked') &&
    profession.checkValidity() &&
    password.checkValidity() &&
    passwordRepeat.checkValidity() &&
    checkbox.checked
    ) {
    console.log("Имя:", nameImput.value);
    console.log("Email:", email.value);
    console.log("Возраст:", age.value);
    console.log("Пол:", formRegistration.querySelectorAll('input[type="radio"]:checked').value);
    console.log("Профессия:", profession.value);
    console.log("Пароль:", password.value);
    console.log("Повтор пароля:", passwordRepeat.value);
    console.log("Согласие:", checkbox.value);

    registration.reset();
    
    } else {
    console.log("Не все поля проходят валидацию");
    }



