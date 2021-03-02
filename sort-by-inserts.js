// генерация случайных чисел
function randomNumbers(){
let arrs = [];
	for (let i = 0, t = 10000; i < t; i++) {
    	arrs.push(Math.round(Math.random() * t))
	}
	return arrs.join(' ')
}

console.log(randomNumbers());
console.log(' -  -  - ');

// //создание массива из введенных значений
let array;
function getNumberArr(){
	let x = (prompt("Enter numbers separated by space: "));
	let y = x.split(' ');
	return array = y.map(numStr => parseInt(numStr));
}
getNumberArr();

//сортировка 
function insertionSort(arr){
	for(let i = 1; i < arr.length; i++) {
		const current = arr[i];

		for (var j = i; j > 0 && arr[j - 1] > current; j--){
			arr[j] = arr[j - 1];
		}
		arr[j] = current;
	}
	return arr;
}

// вывод сортировки
let arr1 = insertionSort(array);
console.log(`${arr1} - insertionSort`);


//подсчет времени работы сортировки
console.time('elements');
console.timeEnd('elements');

// console.log(' -- ');