export function optionLogic() {
    anime({
        targets: '.options__disable-block',
        translateX: ['100%', 0],
        duration: 2000
    })

    let disableOptions = document.getElementsByClassName('options__disable-block')[0];

    disableOptions.addEventListener('click', (e) => {

        if(e.target == disableOptions) {
            console.log('true');
            anime({
                targets: '.options__disable-block',
                translateX: [0, '100%'],
                duration: 2000
            })

            setTimeout(() => {
                disableOptions.remove();
            }, 400);
        }
    });
}