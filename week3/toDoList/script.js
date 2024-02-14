function add(){
    let formInput = document.querySelector('.form__item input');
    let ul = document.getElementsByClassName('to-do__list')[0];

    if (formInput.value.trim() === '') { // Проверяем, что введено не пустое значение
        alert('Please enter a task.'); // Показываем сообщение об ошибке
        return; // Прерываем выполнение функции
    }



    let li = document.createElement('li');
    li.classList.add('to-do__item');
    li.classList.add('item');
    // li.textContent = input.value;

    let input = document.createElement('input');
    input.classList.add("item__input");
    input.type = "checkbox";

    li.appendChild(input);

    let text = document.createElement('div');
    text.classList.add('item__text');
    text.textContent = formInput.value;
    li.appendChild(text);

    let img_div = document.createElement('div');
    img_div.classList.add('item__img');
    img_div.textContent = 'delete';

    img_div.addEventListener('click', event=>{
        const img_div = event.target;

        const li = img_div.parentNode;
        console.log(li);
        const list = Array.from(li.parentNode.children);
        list[list.indexOf(li)].remove();

    })

    let img = document.createElement('img');
    img.src = "https://cdn.icon-icons.com/icons2/1150/PNG/512/1486504830-delete-dustbin-empty-recycle-recycling-remove-trash_81361.png ";

    img_div.appendChild(img);
    li.appendChild(img_div);






    // li.addEventListener('click' ,(event)=>{
    //     const li = event.target;
    //     const list = Array.from(li.parentNode.children);
    //     console.log(list);
    //     console.log(li);

    //     list[list.indexOf(li)].remove();
    // });

    li.appendChild
    ul.appendChild(li);
    formInput.value = " ";
}