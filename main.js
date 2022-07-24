const modalButtons = document.querySelectorAll(`[data-modal-button]`);
const modal = document.querySelector(`.modal`);
modal.querySelector(`.modal__window`).addEventListener('click', function(event){event.stopPropagation()})

modalButtons.forEach(function(item){
    item.addEventListener('click', function(){
        modal.classList.remove(`hidden`);
    })
})

modal.addEventListener(`click`, function(){modal.classList.add(`hidden`);})
modal.querySelector(`.modal__button`).addEventListener(`click`, function(){alert(`Функция не доступна!`)})
modal.querySelector(`.modal__close`).addEventListener(`click`, function(){modal.classList.add(`hidden`)})




