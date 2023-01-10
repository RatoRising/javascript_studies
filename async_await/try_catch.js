// This try_catch will return the success as there is no error
try {
	console.log('Start of try runs'); // (1) <--
	console.log('End of try (never reached)'); // (2)
} catch (err) {
	console.log(`Error has occurred!`); // (3) <--
}

// This try_catch will catch the error as the varialble lalala is not defined
try {
	console.log('Start of try runs'); // (1) <--

	lalala; // error, variable is not defined!

	console.log('End of try (never reached)'); // (2)
} catch (err) {
	console.log(`Error has occurred!`); // (3) <--
}

// This is maybe clearer as you can see the conditional working and validating as true or false
const number = 51;
try {
   if (number > 50) {
      console.log('Success');
   } else {
      throw new Error('The number is lower');
   }
   console.log('Hellow number is ok');
} catch (error) {
   console.log('An error was caught!');
   console.log('Error message: ' + error);
}