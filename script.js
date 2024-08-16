// alert("hello");

function validateForm() {

	// Получить имя пользователя
	let username = document.forms["regForm"]["username"].value;
	let email = document.forms["regForm"]["usermail"].value;
	let userpass = document.forms["regForm"]["userpass"].value;

	// Проверка на пустоты
	if (username == "") {
		alert("Имя пользователя не может быть пустым!");
		return false;
	} else if(email == "") {
		alert("Email не может быть пустым!");
		return false;
	} else if(userpass == "") {
		alert("Пароль не может быть пустым!");
		return false;
	}

	// Проверка на кол-во букв
	if (username.length < 3 || email.length < 6 || userpass.length < 4) {
		alert("Введенные поля содержат мало букв!");
		return false;
	}	

	// alert(username.length);

	// alert("hello from alert");
	// document.write("hello from document");
	// console.log("hello from console");
	// .innerHTML = "WADWA";

}