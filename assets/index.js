document.addEventListener('DOMContentLoaded', function(){
    const leftButton = document.querySelector('.switcher').children[0];
    const rightButton = document.querySelector('.switcher').children[1];
    const textScreen = document.querySelector('.centralItem__info');

    rightButton.addEventListener('click',() => {
        if (rightButton.classList.contains("switcher__button-rightActive")) {
            textScreen.style.opacity = `1`;
            rightButton.classList.remove("switcher__button-rightActive");
            rightButton.classList.add("switcher__button-rightInactive");
            leftButton.classList.remove("switcher__button-leftInactive");
            leftButton.classList.add("switcher__button-leftActive");
        }
    });

    leftButton.addEventListener('click',() => {
        if (leftButton.classList.contains("switcher__button-leftActive")) {
            textScreen.style.opacity = `0`;
            leftButton.classList.remove("switcher__button-leftActive");
            leftButton.classList.add("switcher__button-leftInactive");
            rightButton.classList.remove("switcher__button-rightInactive");
            rightButton.classList.add("switcher__button-rightActive");
        }
    })
});
