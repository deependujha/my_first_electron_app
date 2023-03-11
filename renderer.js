const buttonClicked = () => {
	console.log('you clicked the button');
	// get div and change its text
	document.getElementById('manipulatedText').innerText =
		'Hello World, you clicked the button';
};

// attach an event listener to the button
document.getElementById('myBtn').addEventListener('click', buttonClicked);
