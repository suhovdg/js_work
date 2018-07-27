function myFirstApp(name, age) {
	alert("Меня зовут "+ name + "и это моя первая программа");

	function showSkills(){
		let skills=["html","css", "php", "python", "postgresql"];

		for (let i=0; i<skills.length; i++){
			document.write("Я владею " + skills[i] + ". <br>");
		}
	}

	showSkills();

	function checkAge() {
		if (age>18) {
          alert("Самое время изучать  JavaScript!");
		} else {
          alert(" Еще рано изучать  JavaScript!");
		}

	}

	 checkAge();

	 function calcPow(num) {
	 	return num * num ;
	}

	calcPow(age);
}

myFirstApp("Denis",42);