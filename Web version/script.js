let forward_off =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAYQdTNw8W+SFIKkFa8ejRxd+Wr3Zu2bx9jKehaYa1mvcazAAABTJJREFUeNrs0r0SgkAMBGBMNpn83Ps/r6DooYUDxUFhvooZCpbNTqWUUkoppZRSyt+gt/l5uh6JWgDpzjP3BMJUroxGpAY4c7ttNGYHTOmaaKIB3yb6zOYIlelkJAbn3s9yvpk79+7YYadekzSS29pKIkxV5UFVLZD+epuhJwTrodavYpk3fU9O1LDmPi2Y2DMU+49dU78yp43fGBm4t7CvVYYNLkzCl9vwvjGTPH+ieYwsjBTcz3Lk5IxxCyPLtvz6oRGTPgpuOeqQEt6HcnyOd9rLbslVEAjCFWRARQT/NdGc93/LEzMkq0B2FY13u1UO30z3NOZLQkJqigc39A0uoBFKES5/ROErVOHGJQzfh+9QhVf4Bhekv1GR+R40H1zP6+gT18n+IkgFn/asHq6daou8aJWuyv7izzVALnJeXiUPt1PmtUw2VaqQkvN/88M5l7nqylHExD+v5Kz8Ikx8oGKirlSORIvngVZ0UxQTlyt7cLGTjDUXE8zz/7oq5IvJRsv14A4GG4TTjOWeQNLL1YKywbqegmOHs+zlrwRiUDYUt/9ub1ns7fEcCd25s6wq+NJMeau01koVcgHHpa5T4it3fAt97cVj9x7VvHpV2TeX+dfF+MgKvdCWq4muudgpMjLhqRLXWr6hVDVl+En/eABYmtQ3nb+h25ISR0YRvo3+Ikil+BvqNtoXJYE0G95gvEAuu9HDw7IDKG70+8hqpOCXvlTSy4W2EOzwsKyD4fKikmoQ7OObzct+vJ3iteuPjguew1qfl1TSUHXNb8VZdCsMl2pW9M9xBS+jv0Ba5iYt7xn7I1pKwyW7iDjNHsose9ysUeaoKmJ/WYCWLccWytSyxpHsYol9s5LkLl8DsOr6uXLkUiO4dQMf7IqsVJ3MOfrCtlQQ15zjbAVZ4qIKgVjU9gCJNFIV/TZvwM8LzPIsJQc0FGANCyW80a01emOvu7BMH6xibGtIku4l4WbD0iuasWjAUjFwF10HsBo3Ph+2l4SL4jjgdFEaOw6MB5y00znX0Y6K9Oa8hP6gcJK1ItN4me7prmmfKuY9O2ou/7pAk1shtOkRd4+KNDjo59RaWSsupVmqfe0N2I0Wy0icfRuE5WwLrYyG+9qEETOiyOwtD8Ka58xW8aBxD+tNGrrvLSOCzQ4JygeBWM6qq4tRdmd0ySleYwkSgmXfp9AU/OmRZO/ulNJeYLytg7FgFaZo3Wrv8BleWfK6wIJgLPsTkPWIdU33YvVOP/gpeA7WJMOwwGDdv4r1v31zwUEQCGJoJIrxh6KIruL9r2mQxA+j1s/s0JDpAcgCG9hpX49ky+J4iaRbnvQDwfk5Jf35sP6qSQ82pMdA0kNzxBEjEbeM1B7m9AayoRjI1MfXueX4iof9kDX75PNhvwDDfkfWyA5YIzpGUiAwkvRst7JKhe2ma1KWX5iU4WpSDqVJGcnSRetKgKUbzQCvzAxwHBekd3HBaTYyiwtwuLJUCFcsoiiBJ+AoKn5wt28Fd9v74C4HwV3kmLMaXCDKIhwfY84AYk7tUDhTCIUtIvSxiNDzA4zQ9YGDagOAgxUADjrCMwQ3ktzwDAW9hVnKhSXMIh/9C/RnEDb1Pm+hP1uA/liAUvNi3YBSWd6AUpMpAKWssLKarm6wshaPLnG3/kN4rMgiK+BZr+svHFZ5VfLiafL1C5Q31HvUmhVMZ8X4aUsPlwd2q4iMPqqIvHlUvS/UsNaPaMtatNU2UASc/VQE7Hdt8lnJlGQ9LpfL5XK5XC6Xy+VyGegMvXGokEBqGqUAAAAASUVORK5CYII=";
let forward_on =
	"data:image/png;base64,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";

function forward() {
	document.getElementById("cmdip").href = "http://192.168.0.105/f";
	document.getElementById("cmdip").click();
	document.getElementById("imgforward").src = forward_on;
}

function backward() {
	document.getElementById("cmdip").href = "http://192.168.0.105/b";
	document.getElementById("cmdip").click();
	document.getElementById("imgbackward").src = forward_on;
}

function left() {
	document.getElementById("cmdip").href = "http://192.168.0.105/l";
	document.getElementById("cmdip").click();
}

function right() {
	document.getElementById("cmdip").href = "http://192.168.0.105/r";
	document.getElementById("cmdip").click();
}

function backLeft() {
	document.getElementById("cmdip").href = "http://192.168.0.105/bl";
	document.getElementById("cmdip").click();
}

function backRight() {
	document.getElementById("cmdip").href = "http://192.168.0.105/br";
	document.getElementById("cmdip").click();
}

function stop() {
	document.getElementById("cmdip").href = "http://192.168.0.105/s";
	document.getElementById("cmdip").click();
	document.getElementById("imgforward").src = forward_off;
	document.getElementById("imgbackward").src = forward_off;
}
