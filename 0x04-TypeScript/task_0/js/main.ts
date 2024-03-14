import renderTable from './tableRender.js';

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

/**
* Student object 1
*
* @type {{ firstName: string, lastName: string, age: number, locatin: string }}
*/
const student1: Student = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 25,
	location: 'Mexico',
}

/**
* Student object 1
*
* @type {{ firstName: string, lastName: string, age: number, locatin: string }}
*/
const student2: Student = {
	firstName: 'John',
	lastName: 'Smith',
	age: 17,
	location: 'Los Vegas',
}

/**
* Create an array containing the two students
* @type {Student[]}
*/
const studentsList: Array<Student> = [
	student1,
	student2,
];

document.body
	.appendChild(
		renderTable(studentsList)
	);
