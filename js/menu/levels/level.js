export function createLevelChoose() {
    let modal = document.createElement('div');
        modal.classList.add('level__disable-block');
        modal.innerHTML = `
        <div class="choose__level">
            <div class="choose__level-block">
                <p>1</p>
                <p>Level</p>
            </div>
            <div class="choose__level-block">
                <p>2</p>
                <p>Level</p>
            </div>
            <div class="choose__level-block">
                <p>3</p>
                <p>Level</p>
            </div>
            <div class="choose__level-block">
                <p>4</p>
                <p>Level</p>
            </div>
            <div class="choose__level-block">
                <p>5</p>
                <p>Level</p>
            </div>
            <div class="choose__level-block">
                <p>6</p>
                <p>Level</p>
            </div>
            <div class="choose__level-block">
                <p>7</p>
                <p>Level</p>
            </div>
            <div class="choose__level-block">
                <p>8</p>
                <p>Level</p>
            </div>
            <div class="choose__level-block">
                <p>9</p>
                <p>Level</p>
            </div>
        </div>
            `
        document.body.appendChild(modal);
}
