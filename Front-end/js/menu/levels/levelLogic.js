import {result} from '../menu.js'
import {canvas, score, mechanic, textCanvas, removeInterval, timer, resetSettings, counterScore, milliseconds,checkPole, resetSettingsBeggin, persentScore, counterPercentSC, counterFailClicks , i} from '../../canvas/script.js'
import {createLoseWindow} from '../../canvas/loseWindow/loseWindow.js'
import {loseWindow} from '../../canvas/loseWindow/loseLogic.js'

let timeDropLetters = 1550;
let levelBlock,
    levelBlocklength = 9;   

export function levelLogic() {
    anime({
        targets: '.level__disable-block',
        translateX: ['100%', 0],
        duration: 2000
    })

    let disableLevel = document.getElementsByClassName('level__disable-block')[0];

    disableLevel.addEventListener('click', (e) => {

        if(e.target == disableLevel) {
            
            anime({
                targets: '.level__disable-block',
                translateX: [0, '100%'],
                duration: 2000
            })

            setTimeout(() => {
                disableLevel.classList.add('hidden');
            }, 400);
        }
    });

    document.getElementsByClassName('menu__point')[1].addEventListener('click', () => {
        disableLevel.classList.remove('hidden');

        anime({
            targets: '.level__disable-block',
            translateX: ['100%', 0],
            duration: 2000
        })
    });
    let scoreToWin = 3;
    document.getElementsByClassName('choose__level')[0].addEventListener('click', (e) =>{
        sessionStorage.setItem('game', 'gamePole'); 
        sessionStorage.removeItem('myKey');

        resetSettingsBeggin();

        let levelScore = setInterval(() =>  {
            if(score.textContent == scoreToWin) {
                persentScore();
                scoreToWin *= 2;
                console.log(scoreToWin)
                clearInterval(mechanic);
                clearInterval(removeInterval);
                textCanvas.innerHTML = '';
                clearInterval(levelScore);
                createLoseWindow();
                loseWindow();

                document.getElementsByClassName('article')[0].innerHTML = "You Win";
        
                document.getElementsByClassName('lose__button')[0].addEventListener('click', () => {
        
                    document.body.style.background = '#1d252d';
                    
                    score.innerHTML = counterScore;
                
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
        
                resetSettings()
                
                document.body.style.background = 'white';
                
                } else {
                    if(i >= 3) {
                        clearInterval(levelScore); 
                        levelBlock.classList.add('choose__level-block');
                        levelBlock.classList.remove('click__level');
                    }
                }
        }, 100);

        levelBlocklength = document.getElementsByClassName('choose__level-block').length;

        timeDropLetters = 170 * document.getElementsByClassName('choose__level-block').length;

        levelBlock = document.getElementsByClassName('choose__level-block')[0];

        if(e.target == levelBlock || e.target == levelBlock.children[0] || e.target == levelBlock.children[1]) {
            levelBlock.classList.remove('choose__level-block');
            levelBlock.classList.add('click__level');

            resetSettingsBeggin()

            let mainMenu = document.getElementsByClassName('main__menu');
    
            canvas.classList.remove('hidden');
            anime({
                targets: '.level__disable-block',
                translateX: [ 0, '100%'],
                duration: 2000
            })
    
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
        }
    });

}


export {timeDropLetters, levelBlock, levelBlocklength}