import {result} from '../menu/menu.js'
import {createForm} from '../menu/regForm/registrationForm.js'
import {checkLogin} from '../menu/regForm/logIn.js'
import {createMenuCanvs} from '../menu/menuCanvas/menuCanvas.js'

anime({
    targets: '.line',
    duration: 3000,
    easing: 'easeInOutSine',
    width: [0, '100%']
});

document.getElementsByClassName('start__block')[0].addEventListener('click', () => {

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