export const useCatalog = () =>{
    
//Объявление переменных

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const subCatalog = document.querySelector('.subcatalog');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const btnReturn = document.querySelector('.btn-return');
const subCatalogHeader = document.querySelector('.subcatalog-header');

//OVERLAY
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.append(overlay);


// Функции

const openMenu = () =>{
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () =>{
    catalog.classList.remove('open');
    overlay.classList.remove('active');

};

const openSubMenu = event => {
    event.preventDefault();
    const target = event.target;
    const itemList = target.closest('.catalog-list__item');
    if(itemList){
        subCatalog.classList.add('subopen');
        subCatalogHeader.innerHTML = itemList.innerHTML;
    }
};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
};



//Вызов функций

btnBurger.addEventListener('click', openMenu);

btnClose.addEventListener('click', () => {
    closeMenu();
    closeSubMenu();
});

overlay.addEventListener('click', () => {
    closeMenu();
    closeSubMenu();
});

catalogList.addEventListener('click', openSubMenu);

btnReturn.addEventListener('click', closeSubMenu);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape'){
        closeMenu();
        closeSubMenu();
    }
})
}