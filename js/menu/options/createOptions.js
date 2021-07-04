export function createOptions() {
    let modal = document.createElement('div');
        modal.classList.add('level__disable-block');
        modal.innerHTML = `
        <div class="options__str">
        <h1>Options</h1>

        <div class="options">
            <div class="options__block">
                <p>Name:</p><input type="text" class="nickname nickname__before">
            </div>
        </div>
        <button class="options__button">Save</button>
    </div>
            `
        document.body.appendChild(modal);
}
