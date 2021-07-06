import {result} from '../menu/menu.js'
import {createLoseWindow} from '../canvas/loseWindow/loseWindow.js'
import {loseWindow} from '../canvas/loseWindow/loseLogic.js'
// import firebase from "firebase/app";
// import "firebase/database";

let button = document.getElementsByClassName('game__button'),
    canvas = document.getElementById('main'),
    alfa = 'abcdefghijklmnopqrstuvwxyz',  
    arrRandom = [],
    allLetters = document.getElementsByClassName('text'),
    textCanvas = document.getElementsByClassName('text__block')[0],
    newLetterBlock,
    letters = document.getElementsByTagName('p'),
    database,
    mechanic,
    score = document.getElementsByClassName('score')[0],
    counterFailClicks = 0,
    counterPercentSC = 0;

let counter = 0,
    i = 0,
    j = 0;

button[0].addEventListener('click', () => {

    startCheck();

        mechanic = setInterval(function res() {
        arrRandom.push(alfa.charAt(Math.floor(Math.random() * alfa.length)));

        newLetterBlock = document.createElement('p');
        newLetterBlock.className = 'text';
        newLetterBlock.innerHTML = arrRandom[arrRandom.length - 1];
        textCanvas.append(newLetterBlock);

        anime({
            targets: letters[counter++],
            translateX: -2000,
            duration: 5000,
            easing: 'linear'
        });

    if(i >= 1) {
        if(parseInt(score.textContent) > counterFailClicks) {
            counterPercentSC = parseInt(100 - (counterFailClicks / (+score.textContent + counterFailClicks) * 100));
        } else {
            counterPercentSC = parseInt(`-${100 - (+score.textContent / (counterFailClicks + counterFailClicks) * 100)}`);
        }

        createLoseWindow();
        loseWindow();

        document.getElementsByClassName('lose__button')[0].addEventListener('click', () => {

            document.body.style.background = '#1d252d';
            counterFailClicks = 0;
            counterScore = 0;
            score.innerHTML = counterScore;
        
            milliseconds = 0;
            checkPole.innerHTML = '00:00:00'
        
            anime({
                targets: '.lose__block-window',
                translateX: [0, '100%'],
                duration: 2000
            });

            setTimeout(() => {
                document.getElementsByClassName('lose__block-window')[0].remove();
            }, 1500);
        
        });
        
        clearInterval(timer);

        arrRandom = [];
        i = 0;
        counter = 0;
        
        document.body.style.background = 'white';
        
        clearInterval(mechanic);
        clearInterval(removeInterval);
        textCanvas.innerHTML = '';

        anime({
            targets: '.mini__anime',
            scale: [
                {value: .1, easing: 'easeOutSine', duration: 500},
                {value: 1, easing: 'easeInOutQuad', duration: 1200}
            ],
            delay: anime.stagger(200, {grid: [21, 26], from: 'center'})
        });
        }
    }, 800);

        let removeInterval = setInterval(() => { 
            Array.from(allLetters).forEach((e) => {
                let position = e.getBoundingClientRect();
                if(position.left < 190) {
                    i++;

                    function pakmanEat() {
                        let packman = document.getElementById('sprite__img');

                        packman.classList.add('packman');
    
                        setTimeout(() => {
                            packman.classList.remove('packman');
                        }, 400);
                    }
                    pakmanEat();

                    e.classList.remove('text');
                    e.classList.add('unvisible__text');
                }
            });
        }, 10);
});

let counterScore = 0,
    counterLevelPoints = 0,
    counterLevelUp = 1,
    counterPointsToLevelUp = 100;

    document.addEventListener('keypress' , (e) => {
        try {
            if(allLetters[0].textContent == e.key) {
                counterScore++;

                function removeLetter() {
                    anime({
                        targets: allLetters[0],
                        translateY: 600,
                        duration: 5000,
                        rotate: '1turn',
                        scale: 2
                    });
                    allLetters[0].classList.add('main__text', 'animation__key');
                    allLetters[0].classList.remove('text');

                    setTimeout(() => {
                        document.getElementsByClassName('main__text')[0].classList.add('unvisible__text');
                        document.getElementsByClassName('main__text')[0].classList.remove('main__text');
                    }, 1500);
                }
                removeLetter();

                function levelUp() {
                    counterLevelPoints++;

                    document.getElementsByClassName('level__score')[0].innerHTML = counterLevelPoints;

                    if(counterLevelPoints == counterPointsToLevelUp) {
                        counterLevelPoints = 0;
                        counterLevelUp++
                        document.getElementsByClassName('level__score')[0].innerHTML = counterLevelPoints;
                        document.getElementsByClassName('personal__level')[0].innerHTML = counterLevelUp;

                        counterPointsToLevelUp = parseInt(counterPointsToLevelUp * 1.5);

                        document.getElementsByClassName('level_score-to-up')[0].innerHTML = counterPointsToLevelUp;
                    }
                }
                levelUp();

                score.innerHTML = counterScore;

            } else {
                counterFailClicks++;
            }
        } catch (e) {
            
        }
        });

let milliseconds = 0;
let timer;
export let checkPole = document.getElementsByClassName('game__time')[0];

export function startCheck() {
    timer = setInterval(() => {
        milliseconds += 10;
        let dataTime = new Date(milliseconds);
        checkPole.innerHTML = 
            ('0' + dataTime.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dataTime.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dataTime.getUTCMilliseconds()).slice(-3,-1);
    }, 10)
}

document.getElementsByClassName('back__menu')[0].addEventListener('click', () => {
        Array.from(allLetters).forEach((e) => {
            e.classList.remove('text');
            e.classList.add('unvisible__text');
        });
    
    clearInterval(mechanic);
    clearInterval(timer);
    let mainMenu = document.getElementsByClassName('main__menu');
    mainMenu[0].classList.remove('hidden');


    anime({
        targets: '#main',
        translateX: [0, '100%'],
        duration: 2000
        });

        anime({
            targets: '.main__menu',
            translateX: ['-100%', 0],
            duration: 2000
        });

        setTimeout(() => {
            canvas.classList.add('hidden');
        }, 400);
});


// function dataBase() {
//     database = firebase.database();
//     console.log(database);
// }
// dataBase();


        export {canvas, score, counterFailClicks, counterPercentSC}