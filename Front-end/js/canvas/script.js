import {result} from '../menu/menu.js'
import {createLoseWindow} from '../canvas/loseWindow/loseWindow.js'
import {loseWindow} from '../canvas/loseWindow/loseLogic.js'
import {timeDropLetters, levelBlock, levelBlocklength, levelScore} from '../menu/levels/levelLogic.js'

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
    removeInterval,
    score = document.getElementsByClassName('score')[0],
    counterFailClicks = 0,
    counterPercentSC = 0,
    milliseconds = 0,
    timer,
    counterScore = 0,
    counterLevelUp = 1,
    counterPointsToLevelUp = 10,
    checkPole = document.getElementsByClassName('game__time')[0],
    localValue = sessionStorage.getItem('myKey'),
    counterLevelPoints = 0,
    counterLives = 3;


let localPoints = sessionStorage.getItem('LevelPoints'),
    localPointsToUp = sessionStorage.getItem('LevelPointsToUp');

    if(localPoints != undefined) {
        let  counterLevelPoints = localPoints
    } else {
        let counterLevelPoints = 0;
    }

    if(localPointsToUp != undefined) {
        let  counterPointsToLevelUp = localPointsToUp
    } else {
        let counterPointsToLevelUp = 10;
    }

let counter = 0,
    i = 0,
    j = 0;

function resLives() {
    counterLives = 3;
    score.textContent = 0;
    checkPole.innerHTML = '00:00:00'
    counterScore = 0;
    milliseconds = 0;
}

function resetSettings() {
    counterLives = 3;
    i = 0;
    counter = 0;
    score.textContent = 0;
    counterFailClicks = 0;
    counterPercentSC = 0
    counterScore = 0;
}

function resetSettingsBeggin() {
    counterLives = 3;
    i = 0;
    score.textContent = 0;
    counterScore = 0;
    counterFailClicks = 0;
    milliseconds = 0;
}

function persentScore() {
    if(parseInt(score.textContent) > counterFailClicks) {
        counterPercentSC = parseInt(100 - (counterFailClicks / (+score.textContent + counterFailClicks) * 100));
    } else {
        counterPercentSC = parseInt(`-${100 - (+score.textContent / (counterFailClicks + counterFailClicks) * 100)}`);
    }
}

button[0].addEventListener('click', () => {
    startCheck();

        mechanic = setInterval(function res() {
        arrRandom.push(alfa.charAt(Math.floor(Math.random() * alfa.length)));

        newLetterBlock = document.createElement('p');
        newLetterBlock.className = 'text';
        newLetterBlock.innerHTML = arrRandom[arrRandom.length - 1];
        textCanvas.append(newLetterBlock);

        let speedAnim = anime({
            targets: letters[counter++],
            translateX: -2000,
            duration: 5000,
            easing: 'linear'
        });

    if(i >= 3) {
        persentScore();

        createLoseWindow();
        loseWindow();

        document.getElementsByClassName('lose__button')[0].addEventListener('click', () => {
            document.getElementsByClassName('lives')[0].innerHTML = `Lives:${counterLives}`;

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

        resetSettings();
        
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
    }, timeDropLetters);

        removeInterval = setInterval(() => { 
            Array.from(allLetters).forEach((e) => {
                let position = e.getBoundingClientRect();
                if(position.left < 190) {
                    i++;
                    counterLives--;
                    document.getElementsByClassName('lives')[0].innerHTML = `Lives:${counterLives}`;

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

    document.addEventListener('keypress' , (e) => {
        try {
            if(allLetters[0].textContent == e.key) {
                sessionStorage.setItem('currentLevel', document.getElementsByClassName('personal__level')[0].textContent);
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
                        try {
                            document.getElementsByClassName('main__text')[0].classList.add('unvisible__text');
                            document.getElementsByClassName('main__text')[0].classList.remove('main__text');
                        } catch (e) {

                        }
                    }, 1500);
                }
                removeLetter();

                function levelUp() {
                    counterLevelPoints++;
                    sessionStorage.setItem('LevelPoints', counterLevelPoints);
                    sessionStorage.setItem('LevelPointsToUp', counterPointsToLevelUp);

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
    clearInterval(levelScore);
    sessionStorage.removeItem('game');
    sessionStorage.setItem('myKey', 'myValue'); 

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

        export {canvas, score, mechanic, textCanvas, removeInterval, timer,resetSettings, counterScore, milliseconds, checkPole, resetSettingsBeggin, persentScore, counterFailClicks, counterPercentSC, i, counterLives, resLives}