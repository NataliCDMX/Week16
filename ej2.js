const brick = [['Без ремонта',1000], ['Косметический',3000], ['Евро',5000], ['Дизайнерский',10000]];
const monolith = [['Без ремонта',1000], ['Косметический',3000], ['Евро',5000], ['Дизайнерский',10000]];
const form = document.querySelector('.form');
const arr1 = form.querySelector('.arr1');
const selectArr2 = form.querySelector('.selectArr2');
const byeBlock = form.querySelector('.byeBlock');


arr1.addEventListener('click', () => {

selectArr2.disabled = false;
let a = '';
if (arr1.value == 'monolith'){
    monolith.forEach((element, index) => {
        a += `<option value="${element[1]}">${element[0]}</option>`;
    })
    selectArr2.innerHTML = a;
}else if(arr1.value == 'brick') {
    brick.forEach((element, index) => {
        a += `<option value="${element[1]}">${element[0]}</option>`
    })
    selectArr2.innerHTML = a;
}
});

const contents = document.querySelectorAll('input[name="content"]')

const contentsBlock = document.getElementById('contents')
byeBlock.addEventListener('change', () => {
    let p = 0;
    for (const elem of contents) {
        if (elem.checked) {
          p = elem.value;
        }
      }
      let summ = +selectArr2.value + +p
      alert(summ);
})
