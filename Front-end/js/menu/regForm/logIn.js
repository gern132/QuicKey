function checkLogin() {
    let regForm = document.getElementById('form'),
        submitRegForm = document.getElementsByClassName('submit')[0],
        cancelRegForm = document.getElementsByClassName('cancel')[0],
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
        
        let email = document.getElementsByClassName('email')[0].value,
            password = document.getElementsByClassName('password')[0].value;

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