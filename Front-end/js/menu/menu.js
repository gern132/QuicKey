import {canvas, counterLives, resLives} from '../canvas/script.js'
import {createMenuCanvs} from './menuCanvas/menuCanvas.js'
import {createForm} from './regForm/registrationForm.js'
import {checkLogin} from './regForm/logIn.js'
import {createLevelChoose} from './levels/level.js'
import {levelLogic} from './levels/levelLogic.js'
import {createOptions} from './options/createOptions.js'
import {optionLogic} from './options/optionLogic.js'

let menuButton = document.getElementsByClassName('button'),
    menuPoints = document.getElementsByClassName('menu__point'),
    mainMenu = document.getElementsByClassName('main__menu');

let localValue1 = sessionStorage.getItem('game');

export function result() {
  anime({
    targets: '#main__svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 4000,
    direction: 'alternate',
    loop: true
});

  function checkWindowWidth() {
    let windowWidth = document.documentElement.clientWidth;


    Array.from(menuPoints).forEach((e) => {
      e.dataset.x = +e.dataset.x - (+e.dataset.x *((1920 - +windowWidth) / 1920 * 100) / 100);
    });
  }
  checkWindowWidth(); 
  
  menuButton[0].addEventListener('click', () => {

    if(menuButton[0].dataset.button == 'Open') {
        anime({
            targets: '.menu div',
            translateX: function(el) {
              return el.getAttribute('data-x');
            },
            translateY: function(el, i) {
              return 80 + (-80 * i);
            },
            scale: function(el, i, l) {
              return (l - i) + .1;
            },
            rotate: function() { return anime.random(-45, 45); },
            borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
            duration: function() { return anime.random(1200, 1800); },
            delay: function() { return anime.random(0, 400); },
          });  

        setTimeout(() => {
          Array.from(menuPoints).forEach((e) => {
            e.classList.add('anime__point');
          });
        }, 1200);

          menuButton[0].dataset.button = 'Close';
          menuButton[0].innerHTML =  menuButton[0].dataset.button;

          menuPoints[0].dataset.x = '0';
          menuPoints[1].dataset.x = '0';
          menuPoints[2].dataset.x = '0';
      } else {
        anime({
            targets: '.menu div',
            translateX: function(el) {
              return el.getAttribute('data-x');
            },
            translateY: 0,
            scale: 1,
            rotate: function() { return anime.random(-360, 360); },
            borderRadius: function() { return ['50%']; },
            duration: function() { return anime.random(1200, 1800); },
            delay: function() { return anime.random(0, 400); },
          });   

          Array.from(menuPoints).forEach((e) => {
            e.classList.remove('anime__point');
          });

          menuButton[0].dataset.button = 'Open';
          menuButton[0].innerHTML =  menuButton[0].dataset.button; 

          menuPoints[0].dataset.x = '800';
          menuPoints[1].dataset.x = '500';
          menuPoints[2].dataset.x = '1200';

          checkWindowWidth(); 
        }
  });

menuPoints[0].addEventListener('click', () => { 
    resLives();
    document.getElementsByClassName('lives')[0].innerHTML = `Lives:${counterLives}`;
    canvas.classList.remove('hidden');

    sessionStorage.removeItem('myKey');
    sessionStorage.setItem('game', 'gamePole'); 

    anime({
      targets: '.main__menu',
      translateX: [0, '-100%'],
      duration: 2000
    });

    anime({
      targets: '#main',
      translateX: ['100%', 0],
      duration: 2000
    });
    
    setTimeout(() => {
      mainMenu[0].classList.add('hidden');
  }, 400)
  });


  let input = document.getElementsByClassName('nickname__edit'),
      nicknameEdit = document.getElementsByClassName('edit');

  function nickname() {
    input[0].value = `User_${Math.floor(1 + Math.random() * (999 + 1 - 1))}`;
    document.getElementsByClassName('nickname__show')[0].innerHTML = input[0].value;
  }
  nickname();

  nicknameEdit[0].addEventListener('click', () => {
    nicknameEdit[0].classList.add('hidden');
    document.getElementsByClassName('nickname__show')[0].classList.add('hidden');
    nicknameEdit[1].classList.remove('hidden');
    input[0].classList.remove('hidden');


    nicknameEdit[1].addEventListener('click', () => {
      nicknameEdit[0].classList.remove('hidden');
      document.getElementsByClassName('nickname__show')[0].classList.remove('hidden');
      nicknameEdit[1].classList.add('hidden');
      input[0].classList.add('hidden');

      document.getElementsByClassName('nickname__show')[0].innerHTML = input[0].value

      sessionStorage.setItem('nickname', document.getElementsByClassName('nickname__show')[0].textContent)
    });
});

document.getElementsByClassName('login')[0].addEventListener('click', () => {
    createForm();
    checkLogin();
  });

  document.getElementsByClassName('menu__point')[1].addEventListener('click', () => {
    createLevelChoose();
    levelLogic();
  }, { once: true });

  document.getElementsByClassName('menu__point')[2].addEventListener('click', () => {
    createOptions();
    optionLogic();
  });
}

export {localValue1, mainMenu}
