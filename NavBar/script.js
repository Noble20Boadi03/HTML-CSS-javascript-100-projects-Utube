const numbers = [1, 2, 3, 4, 5];

numbers.forEach(consoleItem);

function consoleItem(Item, index, arr){
    console.log('a['+index+'] = ' + Item);
}

const List = document.querySelectorAll('li');

List.forEach( li => {
    li.addEventListener('click', ()=>{
        List.forEach(li => {
            li.classList.remove('activity');
        })
        li.classList.add('activity');
    })
})