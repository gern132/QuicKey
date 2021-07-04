export function optionLogic() {
    anime({
        targets: '.level__disable-block',
        translateX: ['100%', 0],
        duration: 2000
    })

    let disableLevel = document.getElementsByClassName('level__disable-block')[0];

    disableLevel.addEventListener('click', (e) => {

        if(e.target == disableLevel) {
            console.log('true');
            anime({
                targets: '.level__disable-block',
                translateX: [0, '100%'],
                duration: 2000
            })

            setTimeout(() => {
                disableLevel.remove();
            }, 400);
        }
    });
}