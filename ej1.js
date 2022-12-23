const input = document.querySelector('.inputNumber')
const oneMoreBtn = document.querySelector('.oneMore')
const doneBtn = document.querySelector('.done')
const error = document.querySelector('.error')
const result = document.querySelector('.result')
const sum = document.querySelector('.sum')


let arr = []

const addOne = () => {
    let number = Number(input.value)
    if (number) {
        arr.push(number)
        console.log(arr);
    } else {
        error.innerHTML = 'Ошибка'
    }
    result.innerHTML = arr
    input.value = ''
}
const getSum = () => {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res = res + arr[i]
    }
    sum.innerHTML = res
}

oneMoreBtn.addEventListener('click', addOne)
doneBtn.addEventListener('click', getSum)