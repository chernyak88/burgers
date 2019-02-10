////////////////// бургер-меню

const hamBtn  = document.querySelector('#modal');
const template = document.querySelector('#modal-template').innerHTML;

hamBtn.addEventListener('click', function() {
  const modal = createModal();

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
})

function createModal() {
  const container = document.createElement('div');
  container.className = 'popup';
  container.innerHTML = template;

  const closeBtn = container.querySelector('.popup__close');
  
  closeBtn.addEventListener('click', function() {
    document.body.removeChild(container);
    document.body.style.overflow = '';
  })

  return container;
}

////////////////// вертикальный аккордеон (team)

const items = document.querySelectorAll(".accordeon__item");

for (item of items) {

  item.addEventListener("click", e => {
    const curItem = e.currentTarget;

    if (curItem.classList.contains('accordeon__item--active')) {
      curItem.classList.remove('accordeon__item--active');
    } else {

      Array.from(items).forEach(elem => {
        elem.classList.remove('accordeon__item--active');
      })

      curItem.classList.add('accordeon__item--active');
    }

  });
}

////////////////// меню (горизонтальный аккордеон)

const acco = document.querySelector('.menu-acco');
const accoItem = document.querySelectorAll('.menu-acco__item');
let accoItemLength = accoItem.length;

acco.addEventListener('click', function(e) {
  for (let i = 0; i < accoItemLength; i++) {
    accoItem[i].classList.remove('menu-acco__item--active')
  }
});

for (let i = 0; accoItemLength; i++) {
  accoItem[i].addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    if (accoItem[i].classList.contains('menu-acco__item--active')) {
      accoItem[i].classList.remove('menu-acco__item--active')
    } else {
      for (let i = 0; i < accoItemLength; i++) {
        accoItem[i].classList.remove('menu-acco__item--active')
      }
      accoItem[i].classList.add('menu-acco__item--active')
    }
  });
}

// calculateWidth()
// узнать ширину окна
// accoItem.length
// ширину AccoItem
// return (ширина окна - (ширина accoItem * accoLength))
// let requestWidth = calculateWidth();
// menuAccoContent.style.width = requestWidth + 'px';

