export function createLoseWindow() {
    let modal = document.createElement('div');
        modal.classList.add('lose__block-window');
        modal.innerHTML = `
        <div class="lose">
                    <div class="lose__block">
                        <h1 class="article">You Lose</h1>
                    </div>
    
                    <div class="lose__time">
                        <p>Total Time:</p>
                        <p class="total__time">00:00:00</p>
                    </div>
    
                    <div class="lose__score">
                        <p>Total Clicks:</p>
                        <p class="level__fail-score">0</p>
                    </div>
    
                    <div class="lose__success">
                        <p>Total Success Clicks:</p>
                        <p class="level__clicks">0</p>
                    </div>
    
                    <div class="lose__fail">
                        <p>Total Fail Clicks:</p>
                        <p class="level__fail">0</p>
                    </div>
    
                    <div class="lose__percent">
                        <p>Total Percent SC:</p>
                        <p class="level__percent">100%</p>
                    </div>
    
                    <div class="lose__button">
                        <p>Again</p>
                    </div>
                </div>
            `
        document.body.appendChild(modal);
}
