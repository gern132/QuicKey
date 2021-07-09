export function createForm(e) {
    let modal = document.createElement('div');
        modal.classList.add('main__registration');
        modal.innerHTML = `
        <div class="registration">
                <img src="./img/man.svg" alt="">
                <form id="form">
                    <div class="registration__block">
                        <input type="email" required placeholder="Email" class="email">
                        <input type="password" required placeholder="Password" class="password">
                        <div class="submit__buttons">
                            <input type="submit"  value="Cancel" class="cancel">
                            <input type="submit"  value="Sign up" class="submit">
                        </div>
                    </div>
                </form>
            </div>
            `
        document.body.appendChild(modal);
}

