import {startCheck, checkPole, score, counterFailClicks, counterPercentSC} from '../script.js'

export function loseWindow() {
        anime({
            targets: '.lose__block-window',
            translateX: ['100%', 0],
            duration: 2000
        });

        function totalTime() {
            document.getElementsByClassName('total__time')[0].innerHTML = checkPole.textContent;
        }
        totalTime();

        function totalClicks() {
            document.getElementsByClassName('level__fail-score')[0].innerHTML = +score.textContent + counterFailClicks;
        }
        totalClicks();

        function totalSuccessfulClicks() {
            document.getElementsByClassName('level__clicks')[0].innerHTML = score.textContent;
        }
        totalSuccessfulClicks();

        function totalFailfulClicks() {
            document.getElementsByClassName('level__fail')[0].innerHTML = counterFailClicks;
        }
        totalFailfulClicks();

        function totalPercentSC() {
            document.getElementsByClassName('level__percent')[0].innerHTML = `${counterPercentSC}%`;
        }
        totalPercentSC();
}