// Exercise 1: Counting Sheep
const countingSheep = sheep => {
	// Base case
	if(sheep === 0) {
		return `All sheep jumped over the fence`
	} else {
		return `Another sheep jumps over the fence`
		let newNumber = sheep - 1;
		countingSheep(newNumber)
	}
}

// Exercise 2: Power Calculator
const powerCalculator = (base, exponent) => {
	if(exponent <= 0) {
		return exponent;
	} else {
		return base * powerCalculator(base, exponent - 1);
	}
}

// Exercise 3: Reverse String
const reverseString = str => {
	if(str === "") {
		return "";
	} else {
		return reverseString(str.substring(1)) + str.charAt(0)
	}
}

// Exercise 4: nth Triangular Number
const triNumber = num => {
	if(num <= 1) {
		return num
	} else {
		return num + triNumber(num - 1)
	}
}

// Exercise 5: String Splitter
const stringSplit = (str, char) => {
	if(str === '') {
		return str;
	} else if (str.charAt(0) === char) {
		return stringSplit(str.substring(1), char)
	} else {
		return str.charAt(0) + stringSplit(str.substring(1), char)
	}
}

// Exercise 6: Fibonacci
const fibonacci = num => {
	if(num < 2) {
		return num;
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2)
	}
}

// Exercise 7: Factorial
const factorial = num => {
	if(num === 1) {
		return num
	} else {
		return num * factorial(num - 1)
	}
}

// Exercise 8: 
let mySmallMaze = [
	[' ', ' ', ' '],
	[' ', '*', ' '],
	[' ', ' ', 'e']
];

let maze = [
	[' ', ' ', ' ', '*', ' ', ' ', ' '],
	['*', '*', ' ', '*', ' ', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', '*', '*', '*', '*', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const findBlocks = maze => {
	let rows = maze.length;
	let columns = maz[0].length;
	const blocks = [];
	const path = ["0,0"]; 
	let directions = "";

	for(i=0; i < rows; i++) {
		for(j=0; j < columns; j++) {
			if(maze[i][j] === '*') {
				blocks.push(`${i}, ${j}`)
			}
		}
	}

	return findPath(rows, columns, blocks, path, directions, 0, 0);
}

const findPath = (rows, columns, blocks, path, directions, row, col) {
	let nextRow = row;
	let nextCol = col;

	if(`${nextRow}, ${nextCol}` === `${rows - 1},${columns - 1}`) {
		return directions;
	}

	const blocksCheck = str => {
		return blocks.includes(str)
	}

	const pathCheck = str => {
		return path.includes(str)
	}

  if(blocksCheck(`${nextRow - 1},${nextCol}`) === false && pathCheck(`${nextRow - 1},${nextCol}`) === false && !(nextRow - 1 < 0)) {
		// North
    directions += "U";
    nextRow = nextRow - 1;
    path.push(`${nextRow},${nextCol}`)
  } else if(blocksCheck(`${nextRow + 1},${nextCol}`) === false && pathCheck(`${nextRow + 1},${nextCol}`) === false && !(nextRow + 1 > rows - 1)) {
		// South
		directions += "D";
    nextRow = nextRow + 1;
    path.push(`${nextRow},${nextCol}`)
	} else if(blocksCheck(`${nextRow}, ${nextCol - 1}`) === false && pathCheck(`${nextRow},${nextCol - 1}`) === false && !(nextCol - 1 < 0)) {
		// West
		directions+= "L";
    nextCol = nextCol - 1;
    path.push(`${nextRow},${nextCol}`);
	} else if(blocksCheck(`${nextRow},${nextCol + 1}`) === false && pathCheck(`${nextRow},${nextCol + 1}`) === false && !(nextCol + 1 > columns)) {
		// East
		directions+= "R";
    nextCol = nextCol + 1;
    path.push(`${nextRow},${nextCol}`)
	}
	return findPath(rows, columns, blocks, path, directions, nextRow, nextCol)
}
console.log(findBlocks(maze))


// FUNCTION CALLS
//countingSheep(3);
//powerCalculator(10, 2);
//reverseString('hello');
//triNumber(6)
//stringSplit('02/29/2020', '/')
//fibonacci(7)
//factorial(5)
