document.addEventListener('DOMContentLoaded', function(){
    const leftButton = document.querySelector('.switcher').children[0];
    const rightButton = document.querySelector('.switcher').children[1];
    const girlScreen = document.querySelector('.centralItem__img');
    const textScreen = document.querySelector('.centralItem__info');

    console.log(leftButton);
    console.log(rightButton);
    console.log(girlScreen);
    console.log(textScreen);

    rightButton.addEventListener('click',() => {
        if (rightButton.classList.contains("switcher__button-rightActive")) {
            girlScreen.style.display = `none`;
            textScreen.style.display = `block`;
            rightButton.classList.remove("switcher__button-rightActive");
            rightButton.classList.add("switcher__button-rightInactive");
            leftButton.classList.remove("switcher__button-leftInactive");
            leftButton.classList.add("switcher__button-leftActive");
        }
    });

    leftButton.addEventListener('click',() => {
        if (leftButton.classList.contains("switcher__button-leftActive")) {
            girlScreen.style.display = `block`;
            textScreen.style.display = `none`;
            leftButton.classList.remove("switcher__button-leftActive");
            leftButton.classList.add("switcher__button-leftInactive");
            rightButton.classList.remove("switcher__button-rightInactive");
            rightButton.classList.add("switcher__button-rightActive");
        }
    })
});
