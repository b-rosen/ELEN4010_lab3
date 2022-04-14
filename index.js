let students = [
{
name: 'Kwezi',
studentNumber: 453528,
yearOfStudy: 4
},
{
name: 'Pieter',
studentNumber: 454345,
yearOfStudy: 3
},
{
name: 'Jade',
studentNumber: 678343,
yearOfStudy: 4
},
{
name: 'Kiren',
studentNumber: 567893,
yearOfStudy: 4
}
]

const button = document.getElementById('addButton')
button.addEventListener('click', function () {
	const headerElement = document.getElementById('heading');
	headerElement.innerHTML = 'My New Heading';
}, false)
