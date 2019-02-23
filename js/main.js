////////////////// hamburger-меню

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

  const popupLink = container.querySelectorAll('.popup__link');

    function HidePopup(event) {
      document.body.removeChild(container);
      document.body.style.overflow = '';
    }
    
    for (i=0; i < popupLink.length; i++) {
      popupLink[i].onclick = HidePopup;
    }
  
   return container;
}

////////////////// модальное окно отзывов

const reviews = document.querySelector('.reviews__list');
const revoverlay = document.querySelector('.revoverlay');
const revHead = document.querySelector('.revpopup__content-headline');
const revText = document.querySelector('.revpopup__content-text');
const revcloseBtn = document.querySelector('.revpopup__close');

reviews.addEventListener('click', e => {
    let element = e.target;

    if (element.tagName === 'BUTTON') {
      let revmodalHead = element.parentNode.firstElementChild.innerHTML;
      let revmodalText = element.previousElementSibling.innerHTML;
      revHead.innerHTML = revmodalHead;
      revText.innerHTML = revmodalText;
      revoverlay.style.display = 'block';
    }
})
  
revcloseBtn.addEventListener('click', function() {
  revoverlay.style.display = 'none';
})

revoverlay.addEventListener('click', function() {
  event.preventDefault();
  revoverlay.style.display = 'none';
})

document.addEventListener('keyup', e => {
  let keyName = e.keyCode;

  if (keyName === 27) {
    revoverlay.style.display = 'none';
  }
})

  ////////////////// Валидация формы, модальное окно формы

  const myForm = document.querySelector('#form');
  const orderBtn = myForm.querySelector('.order__form-button');
  const clearBtn = myForm.querySelector('.order__form-button-reset');
  const formTrue = myForm.querySelector('.formoverlay-true');
  const formErr = myForm.querySelector('.formoverlay-error');
  const formtruecloseBtn = myForm.querySelector('.formtrue__close');
  const formerrcloseBtn = myForm.querySelector('.formerr__close');
  
  orderBtn.addEventListener('click', e=> {
    event.preventDefault();
    if (validateForm(myForm)) {
        const name = myForm.elements.name.value;
        const phone = myForm.elements.phone.value;
        const comment = myForm.elements.comment.value;
        const to = 'webdev@mail.ru';
        var formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('comment', comment);
            formData.append('to', to);
            console.log(formData);
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/');
            xhr.send(formData);
            xhr.addEventListener('load', e => {
                if (xhr.response.status) {
                  formTrue.style.display = 'block';    
                } else {
                  formErr.style.display = 'block';
                }

                formtruecloseBtn.addEventListener('click', function() {
                  event.preventDefault();
                  formTrue.style.display = 'none';
                })

                formTrue.addEventListener('click', function() {
                  event.preventDefault();
                  formTrue.style.display = 'none';
                })

                document.addEventListener('keyup', e => {
                  let keyName = e.keyCode;
                
                  if (keyName === 27) {
                    formTrue.style.display = 'none';
                  }
                })

                formerrcloseBtn.addEventListener('click', function() {
                  event.preventDefault();
                  formErr.style.display = 'none';
                })

                formErr.addEventListener('click', function() {
                  event.preventDefault();
                  formErr.style.display = 'none';
                })
                
                document.addEventListener('keyup', e => {
                  let keyName = e.keyCode;
                
                  if (keyName === 27) {
                    formErr.style.display = 'none';
                  }
                })
                
            })
    }
})

function validateForm(myForm) {
  let valid = true;
  
  if (!validateField(myForm.elements.name)) {
      valid = false;
  }

  if (!validateField(myForm.elements.phone)) {
      valid = false;
  }

  if (!validateField(myForm.elements.comment)) {
      valid = false;
  }

  if (!validateField(myForm.elements.street)) {
    valid = false;
  }

  if (!validateField(myForm.elements.home)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;
      return false;
  }
  else {
      field.nextElementSibling.textContent = '';
      return true;
  }
}

const nameForm = document.querySelector('#name');
const phoneForm = document.querySelector('#phone');
const homeForm = document.querySelector('#home');
const floorForm = document.querySelector('#floor');

nameForm.addEventListener('keydown', function(event) {
  let isDigit = true;
  let isDash = false;
  let isControl = false;

  if (event.key >= 0 || event.key <=9) {
    isDigit = false;
  }

  if (event.key == '-') {
    isDash = true;
  }

  if (event.key == 'ArrowLeft' || event.key =='ArrowRight' ||event.key == 'Backspace') {
    isControl = true;
  }

  if (isDigit == false && isDash == false && isControl == false) {
    event.preventDefault();
  }
})

phoneForm.addEventListener('keydown', function(event) {
  let isDigit = false;
  let isDash = false;
  let isControl = false;

  if (event.key >= 0 || event.key <=9) {
    isDigit = true;
  }

  if (event.key == '-') {
    isDash = true;
  }

  if (event.key == 'ArrowLeft' || event.key =='ArrowRight' ||event.key == 'Backspace') {
    isControl = true;
  }

  if (isDigit == false && isDash == false && isControl == false) {
    event.preventDefault();
  }
})

homeForm.addEventListener('keydown', function(event) {
  let isDigit = false;
  let isControl = false;

  if (event.key >= 0 || event.key <=9) {
    isDigit = true;
  }

  if (event.key == 'ArrowLeft' || event.key =='ArrowRight' ||event.key == 'Backspace') {
    isControl = true;
  }

  if (isDigit == false && isControl == false) {
    event.preventDefault();
  }
})

floorForm.addEventListener('keydown', function(event) {
  let isDigit = false;
  let isControl = false;

  if (event.key >= 0 || event.key <=9) {
    isDigit = true;
  }

  if (event.key == 'ArrowLeft' || event.key =='ArrowRight' ||event.key == 'Backspace') {
    isControl = true;
  }

  if (isDigit == false && isControl == false) {
    event.preventDefault();
  }
})

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

for (let i = 0; i < accoItemLength; i++) {
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

////////////////// слайдер бургеров
    
var slides = document.querySelectorAll('.slider .slider__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  goToSlide(currentSlide+1);
 }
 
 function previousSlide() {
  goToSlide(currentSlide-1);
 }
 
 function goToSlide(n) {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slider__item slider__item--active';
 }

var playing = true;
 
function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
}
 
function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

var next = document.getElementById('next');
var previous = document.getElementById('prev');
  
  next.onclick = function() {
      pauseSlideshow();
      nextSlide();
  };

  previous.onclick = function() {
      pauseSlideshow();
      previousSlide();
  };

////////////////// OnePageScroll

const sections = $('.section');
const display = $('.maincontent');

let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);

const isMobile = md.mobile();

const switchActiveClassInsideMenu = menuItemIndex => {
  $('.fixed-menu__item').eq(menuItemIndex).addClass('fixed-menu__item_active').siblings().removeClass('fixed-menu__item_active');
}

const performTransition = sectionEq => {
    if (inscroll) return;

    const sectionEqNum = parseInt(sectionEq);

    if (!!sectionEqNum === false) console.error('неверное значение для аргумента sectionEq'); 

    inscroll = true;
    
    const position = (sectionEqNum * -100) + '%';

    sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
    
    display.css({
      'transform' : `translateY(${position})`
    });

    setTimeout(() => {
      inscroll = false;
      switchActiveClassInsideMenu(sectionEq);
    }, 1000 + 300); //продолжительность transition + 300ms - время для завершения инерции тачустройств

  };
  

const scrollToSection = direction => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'next' && nextSection.length) {
    performTransition(nextSection.index())
  }

  if (direction === 'prev' && prevSection.length) {
    performTransition(prevSection.index())
  }
}

$('.wrapper').on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollToSection('next');
  }

  if (deltaY < 0) {
    scrollToSection('prev');
  }
});

$('.wrapper').on('touchmove', e => {
  e.preventDefault();
});

$(document).on('keydown', e => {
  switch(e.keyCode) {
    case 38: scrollToSection('prev'); break;
    case 40: scrollToSection('next'); break;
  }
});

$('[data-scroll-to]').on('click', e=> {
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-scroll-to');
  performTransition(target);
});

if (isMobile) {
  $(window).swipe({
    swipe: function(event, direction) {
      const nextOrPrev = direction === 'up' ? 'next' : 'prev';
      scrollToSection(nextOrPrev);
    }
  });
}

////////////////// Видеоплеер

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'zmg_jOwa9Fc',
    events: {
      //'onReady': onPlayerReady,
      //'onStateChange': onPlayerStateChange
    }
  });
}











