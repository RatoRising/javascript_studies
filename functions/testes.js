/* const p1 = new Promise((resolve, reject) => {
	resolve('Success');
});

p1
	.then((value) => {
		console.log(value); // "Success!"
		throw new Error('oh, no!');
	})
	.catch((e) => {
		console.error(e.message); // "oh, no!"
	})
	.then(() => console.log('after a catch the chain is restored'), () => console.log('Not fired due to the catch')); */

// try {
// 	console.log('Start of try runs'); // (1) <--
// 	console.log('End of try (never reached)'); // (2)
// } catch (err) {
// 	console.log(`Error has occurred!`); // (3) <--
// }

// try {
// 	console.log('Start of try runs'); // (1) <--

// 	lalala; // error, variable is not defined!

// 	console.log('End of try (never reached)'); // (2)
// } catch (err) {
// 	console.log(`Error has occurred!`); // (3) <--
// }

// for (let fruta of frutas) {
// 	console.log(fruta);
// }

// let start = 1;
// while (start <= 100) {
// 	start % 2 !== 0 ? console.log(start): false
// 	start++;
// }


