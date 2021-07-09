import {result, localValue1, mainMenu} from '../menu/menu.js'
import {createForm} from '../menu/regForm/registrationForm.js'
import {checkLogin} from '../menu/regForm/logIn.js'
import {createMenuCanvs} from '../menu/menuCanvas/menuCanvas.js'
import {canvas} from '../canvas/script.js'

anime({
    targets: '.line',
    duration: 3000,
    easing: 'easeInOutSine',
    width: [0, '100%']
});
let localValue = sessionStorage.getItem('myKey'),
    localNickname = sessionStorage.getItem('nickname'),
    localPoints = sessionStorage.getItem('LevelPoints'),
    localLevel = sessionStorage.getItem('currentLevel'),
    localPointsToUp = sessionStorage.getItem('LevelPointsToUp');

document.getElementsByClassName('start__block')[0].addEventListener('click', () => {

    sessionStorage.setItem('myKey', 'myValue'); 

    createMenuCanvs();
    result();
    
    anime({
        targets: '#preview',
        translateX: [0, '-100%'],
        duration: 2000
    });

    anime({
        targets: '.main__menu',
        translateX: ['100%', 0],
        duration: 2000
    });

    VANTA.BIRDS({
        el: ".main",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: '#1d252d',
        color1: 0xedc828,
        color2: 0xfcfcfc,
        wingSpan: 17.00,
        separation: 100.00,
        cohesion: 14.00,
        quantity: 3.00
    });

    setTimeout(() => {
        document.getElementById('preview').classList.add('hidden');
    }, 400);
});

window.onload = function() {       
    if(localValue != undefined) {
        document.getElementById('preview').classList.add('hidden');
        createMenuCanvs();
        result();
    }

    if(localValue1 != undefined) {
        document.getElementById('preview').classList.add('hidden');
        canvas.classList.remove('hidden');

        createMenuCanvs();
        result();
        mainMenu[0].classList.add('hidden');
    }

    if(localNickname != undefined) {
        document.getElementsByClassName('nickname__show')[0].innerHTML = localNickname;
    }

    if(localLevel != undefined) {
        document.getElementsByClassName('personal__level')[0].innerHTML = localLevel;
    }

    if(localPoints != undefined) {
        document.getElementsByClassName('level__score')[0].innerHTML = localPoints;
    }

    if(localPointsToUp != undefined) {
        document.getElementsByClassName('level_score-to-up')[0].innerHTML = localPointsToUp;
    }
}