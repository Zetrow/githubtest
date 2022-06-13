setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
}, 5900);
setTimeout(() => {
    document.querySelector('.contentforacc').style.display = 'none';
}, 0);

window.onload = function() {
    setTimeout(function() {
        document.querySelector('.contentforacc').style.display = "block";
    }, 5000);
}