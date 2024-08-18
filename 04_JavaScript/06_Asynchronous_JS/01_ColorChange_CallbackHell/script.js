const delayedColorChange = (color, delay, doNextFunc) => {
    setTimeout(
        () => {
            document.body.style.backgroundColor = color;
            doNextFunc();
        },
        delay
    );
}


delayedColorChange('red', 1000, () => {
    delayedColorChange('blue', 1000, () => {
        delayedColorChange('green', 1000, () => {
            delayedColorChange('yellow', 1000, () => {
                delayedColorChange('orange', 1000, () => {
                })
            })
        })
    })
});