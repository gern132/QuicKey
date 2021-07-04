export function createMenuCanvs() {
    let modal = document.createElement('div');
        modal.classList.add('main__menu');
        modal.innerHTML = `
        <div class="profile">
            <div class="profile__block">
                <div class="level">
                    <span class="personal__level">1</span>
                    <span>lvl</span>
                    <span class="level__score">0</span><span class="level_score-to-up">100</span>
                </div>
            </div>
            
            <div class="short__info">
                <div class="nickname__block">
                    <div class="nickname nickname__show">Gern</div>
                    <input type="text" class="nickname nickname__edit hidden">
                </div>
    
                <div class="edit__block">
                    <img src="img/pencil.svg" alt="" class="edit">
                    <img src="img/tick.svg" alt="" class="edit edit__confirm hidden">
                </div>
            </div>
        </div>

        <div class="main">
            <svg viewbox="0 0 1000 500" width="100%" id="main__svg">
                <path stroke="white" stroke-width="3" fill="none" d="M578.7,410.1c-5.7-1-13-2.6-19.7-4.3v-0.4c11.2-3.9,19.2-15,19.2-32.3,0-19.9-11.9-34.1-30.2-34.1-18.2,0-31.4,13.9-31.4,35.5,0,21.7,13.7,33.5,29.7,34.1a12.916,12.916,0,0,1,4.1,1c7.8,2.7,16.7,5.4,25.8,7.8Zm-31.4-8.6c-13.6,0-21.5-12.9-21.4-27.2-0.1-14.6,7.1-28.2,21.8-28.2,14.3,0,21.3,13.9,21.3,27.4C569,388.9,561.2,401.5,547.3,401.5ZM630,359.1h-8.8v29.7a12.869,12.869,0,0,1-.8,4.5,12.723,12.723,0,0,1-11.6,8c-8,0-10.8-6.2-10.8-15.4V359.1h-8.8v28.3c0,17,9.1,21.2,16.7,21.2a18.211,18.211,0,0,0,16-9h0.2l0.5,7.9h7.8c-0.3-3.8-.4-8.2-0.4-13.2V359.1Zm23.4,48.4V359.1h-8.8v48.4h8.8ZM649,340a5.363,5.363,0,0,0-5.5,5.5,5.234,5.234,0,0,0,5.3,5.4c3.5,0,5.7-2.4,5.6-5.4A5.223,5.223,0,0,0,649,340Zm52,59.1a24.985,24.985,0,0,1-10.8,2.4c-9.6,0-16.8-6.9-16.8-18.1,0-10.1,6-18.3,17.1-18.3a20.4,20.4,0,0,1,10.2,2.3l2-6.8a29.417,29.417,0,0,0-12.2-2.5c-15.8,0-26,10.8-26,25.7,0,14.8,9.5,24.7,24.1,24.7a32.415,32.415,0,0,0,13.9-2.8Zm12.1,8.4h8.7V381.8l6.4-7.4,22.2,33.1h10.3l-26.3-38.8,24.4-28.6H748l-20.6,25.3c-1.7,2.2-3.5,4.6-5.3,7.2h-0.3V340.1h-8.7v67.4Zm92.8-22.6a33.21,33.21,0,0,0,.3-4.1c0-8.9-4.2-22.8-20-22.8-14.1,0-22.7,11.5-22.7,26.1s8.9,24.4,23.8,24.4c7.7,0,13-1.6,16.1-3l-1.5-6.3a31.806,31.806,0,0,1-13.4,2.5c-8.8,0-16.4-4.9-16.6-16.8h34ZM772,378.6c0.7-6.1,4.6-14.3,13.5-14.3,9.9,0,12.3,8.7,12.2,14.3H772Zm38.7-19.5,17.9,44.6a7.673,7.673,0,0,1,.6,2.3,6.317,6.317,0,0,1-.7,2.1,26.687,26.687,0,0,1-7.4,9.8,23.277,23.277,0,0,1-7.7,4.3l2.2,7.4a23.852,23.852,0,0,0,10.8-5.7c6-5.2,10.3-13.7,16.6-30.3l13.2-34.5h-9.3l-9.6,28.4c-1.2,3.5-2.2,7.2-3.1,10.1H834c-0.8-2.9-2-6.7-3.1-9.9l-10.6-28.6h-9.6Z"></path>
            </svg>
        </div>

        <div class="menu">
            <div data-x="800" class="menu__point"><span>Play</span></div>
            <div data-x="500" class="menu__point"><span>Level</span></div>
            <div data-x="1200" class="menu__point"><img width="30px" height="30px" src="img/options.svg" alt=""></div>
            <button data-button="Open" class="button menu__point">Open</button>
        </div>

        <div class="login">
            <p>Sign in</p>
        </div>
            `
        document.body.appendChild(modal);
}