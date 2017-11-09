// string
let myName = 'Jesus';
//myName = 27;// error: type '27' is not assignable to type 'string'.

// number
let myAge = 27.5;
//myAge = 'Jesus';// error: type 'Jesus' is not assignable to type 'number'.

// boolean
let hasHobbies = true;
// REQUIRES CAST
//hasHobbies = 1;// error: type '1' is not assignable to type 'boolean'.

// any
let anotherValue;
// Works as pure JavaScript, it can store `any` value.
anotherValue = 24;
anotherValue = '24';

// explicit string
let myGFsName: string = 'Luisa';

// explicit number
let myGFsAge: number;
myGFsAge = 24.2;
//myGFsAge = '24';// error: type '24' is not assignable to type 'number'.

// explicit boolean
let doesSheHasHobbies: boolean = true;

// array
let hobbies = ['Cooking', 'Reading'];
console.log(hobbies[1]);// Reading
console.log(typeof hobbies);// object
//hobbies = [100];// error: type 'number[]' is not assignable to type 'string[]'.

// explicit array
let movies: any[] = ['LOTR 1', 'LOTR 2', 'LOTR 3'];
movies = [300];

// tuples
let address: [string, number] = ['Madrugada', 123];
//let books: [string, number] = [7, 'El Silmarilion'];// error: type '[number, string]' is not assignable to type '[string, number]'

// enums
enum Color {
	Gray,//0
	Green = 100,//100
	Blue,//101, continues the previous item value
	Black = 3// 3, and the next item would be 4
}
let myColor: Color = Color.Green;
console.log(myColor);// 100
let otherColor: Color = Color.Blue;
console.log(otherColor);// 101
let lastColor: Color = Color.Black;
console.log(lastColor);// 3

// any
let car: any = 'BMW';
console.log(car); // BMW
car = { brand: 'BMW', series: 666 };
console.log(car);// { brand: 'BMW', series: 666 }

console.clear();

// functions
// - functionName() : returnType
function returnMyName(): string {
	return myName;
}
console.log(returnMyName());

// functions returning void
function sayHello(): void {
	console.log('Hello', myGFsName);
}
sayHello();

// functions with args
function calculateAgeDifference(hers: number, mine: number): number {
	return mine - hers;
}
console.log(calculateAgeDifference(myGFsAge, myAge));
//console.log(calculateAgeDifference('24', myAge));// error: type '"24"' is not assignable to type 'number'

// functions as types
// specify what type of functions can be assigned to this variable: (a: number, b: number) => number
let calculate: (a: number, b: number) => number;
calculate = calculateAgeDifference;
//calculate = sayHello;// error: type '() => void' is not assignable to the type '(a: number, b: number) => number'
console.log(calculate(24, 27));

// typed objects
let user: { name: string, age: number } = {
	name: 'Jesus',
	age: 27
};
//user = {};// error: type '{}' is not assignable to type { name: string, age: number }
// property names are important, they cannot be changed like this:
//user = {
//	a: 'Luisa',
//	b: 24
//};// error: type '{ a: string, b: number }' is not assignable to type { name: string, age: number }

// complex objects
let complex: { data: number[], output: (all: boolean) => number[] } = {
	data: [100, 3.99, 24],
	output: function (all: boolean): number[] {
		return this.data
	}
};