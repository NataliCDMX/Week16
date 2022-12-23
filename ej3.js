////////////////////////////// 3.1 Дан массив ['js', 'css', 'html']. Выведите на экран первый элемент.

let elements = ['js', 'css', 'html'];
 console.log( elements[0] ); 

////////////////////////////// 3.2	Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений, таких как false, undefined, пустые строки, 0, null с помощью метода filter. Ожидаемый результат: [1, 2, 3].

const arr1 = [0, 1, false, 2, undefined, '', 3, null],
    arr2 = [0, false, undefined, '', null],
    res = arr1.filter(item => !arr2.includes(item));
console.log(res);

////////////////////////////// 3.3 Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3. Ожидаемый результат: 2

let array = [ [1, 2], [1, 2, 3], [1, 2, 3, 4]];
function checkLength(array) {
    return array.length > 3
};
console.log(array.findIndex(checkLength));
 