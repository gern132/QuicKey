// import {dataBase} from './dataBase.js'

function checkLogin() {
    let regForm = document.getElementById('form'),
        submitRegForm = regForm.querySelector('.submit'),
        cancelRegForm = regForm.querySelector('.cancel'),
        requestLogin,
        mainReg = document.getElementsByClassName('main__registration')[0]

        mainReg.addEventListener('click', (e) => {

            if(e.target == mainReg || e.target == cancelRegForm) {
                
                anime({
                    targets: '.main__registration',
                    translateX: [0, '100%'],
                    duration: 2000
                })
    
                setTimeout(() => {
                    mainReg.remove();
                }, 400);
            }
        });

    submitRegForm.addEventListener('click', authForm);

    function authForm(e) {
        e.preventDefault();
        
        let email = regForm.querySelector('.email').value,
            password = regForm.querySelector('.password').value;

            authWithEmailAndPass(email, password)
    }

    function authWithEmailAndPass(email, password) {
        const apiKey = 'AIzaSyCG-hCB3sTh8TDdYylD_PEKtaYYTD1YKIw';

            requestLogin = fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {

                method: 'POST',
                body: JSON.stringify({
                    email, password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                if(data.idToken) {
                    mainReg.classList.add('hidden')
                } else {
                    alert('false');
                }
            })
    }

    anime({
        targets: '.main__registration',
        translateX: ['100%', 0],
        duration: 2000
    })
}

export {checkLogin}

    // gern5051@gmail.com
    // 50515051 