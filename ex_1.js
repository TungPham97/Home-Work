let numUser = Number(prompt('Please enter a number: '));
if ( numUser < 0) {
	console.log('invalid input');
} else if (numUser === 1) {
		console.log('1');
} else {
		for (var fac = 1; numUser > 0; numUser--) {
			fac *= numUser;
		}
		console.log(fac);
}
