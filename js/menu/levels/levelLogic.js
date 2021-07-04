export function levelLogic() {
    anime({
        targets: '.level__disable-block',
        translateX: ['100%', 0],
        duration: 2000
    })

    let disableLevel = document.getElementsByClassName('level__disable-block')[0];

    disableLevel.addEventListener('click', (e) => {

        if(e.target == disableLevel) {
            
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

    document.getElementsByClassName('choose__level')[0].addEventListener('click', (e) => {

        let levelBlock = document.getElementsByClassName('choose__level-block')[0];
        if(e.target == levelBlock || e.target == levelBlock.children[0] || e.target == levelBlock.children[1]) {
            levelBlock.classList.toggle('choose__level-block');
            levelBlock.classList.toggle('click__level');
        }
    });
}