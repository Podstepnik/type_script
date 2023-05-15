import $ from 'jquery';

export const myWebsite = $(`
<div> 
	<h2>Welcome to my page</h2>
</div>
`)


const interactiveButton = $(`<button>Click me !</button>`)

interactiveButton.on('click', () => {
	// const h2Element = myWebsite.children('h2')[0];
	// zapis komentowany wyżej i to tutaj niżej - ROBIĄ TO SAMO !!!;
	const [ h2Element ] = myWebsite.children('h2');
	h2Element.innerHTML += '🤩';
})

myWebsite.append(interactiveButton)

