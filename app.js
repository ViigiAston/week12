const images = ['1.png', '2.png', '3.png'];
const pictureButton = document.querySelector('.profile-picture');
const targetImage = document.querySelector('.profile-picture img');
let i = 0;

pictureButton.addEventListener('click', () => {
    targetImage.style.opacity = '0';

    setTimeout(() => {
        i++;
        if (i === images.length) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        targetImage.style.opacity = '1';
    }, 200);
});
