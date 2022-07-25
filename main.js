// ============МОДАЛЬНОЕ ОКНО =====================

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

// ==============ПРОСМОТР ФОТО==========

const viewPhotos = document.querySelectorAll([`[data-portfolio]`]);
const view = document.querySelector(`.view`);
const viewLeft = view.querySelector(`.view__left`);
const viewRight = view.querySelector(`.view__right`);

view.querySelector(`.view__window`).addEventListener('click', function(event){event.stopPropagation()});
viewLeft.addEventListener('click', function(event){event.stopPropagation()});
viewRight.addEventListener('click', function(event){event.stopPropagation()})

viewPhotos.forEach(function(item){

    item.addEventListener('click', function(){
        view.classList.remove(`hidden`);
        view.querySelector(`#view-image`).src = `img/portfolio/${this.dataset.portfolio}.jpg`;
    })
})

viewLeft.addEventListener(`click`, function(){
    const photoPath = view.querySelector(`#view-image`).src.slice(-34, -5);
    let photoIndex = Number(view.querySelector(`#view-image`).src.slice(-5, -4));
    photoIndex = photoIndex == 1 ? 8 : photoIndex-1;
    view.querySelector(`#view-image`).src = `${photoPath}${photoIndex}.jpg`
})

viewRight.addEventListener(`click`, function(){
    const photoPath = view.querySelector(`#view-image`).src.slice(-34, -5);
    let photoIndex = Number(view.querySelector(`#view-image`).src.slice(-5, -4));
    photoIndex = photoIndex==8 ? 1 : photoIndex+1;
    view.querySelector(`#view-image`).src = `${photoPath}${photoIndex}.jpg`
})


view.querySelector(`.view__close`).addEventListener(`click`, function(){view.classList.add(`hidden`)})
view.addEventListener(`click`, function(){view.classList.add(`hidden`);})
