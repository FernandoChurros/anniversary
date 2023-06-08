const btn = document.querySelectorAll('.btn'); // 0 = sim, 1 = não, 2 = close
const wrapper = document.querySelector('.wrapper');
const span = document.querySelector('.no__span');

function esconde_esconde() {
    span.classList.toggle('hide');
    wrapper.classList.toggle('hide');
}

btn[0].addEventListener('click', () => {
    const video = document.querySelector('#video');

    video.classList.toggle('hide');
    video.play();
    wrapper.classList.toggle('hide');
})

btn[1].addEventListener('click', esconde_esconde);

btn[2].addEventListener('click', esconde_esconde)
