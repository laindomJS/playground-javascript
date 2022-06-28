const body = document.querySelector('body');
// console.log(body);
const toogle = document.querySelector('.theme');

toogle.addEventListener('click', () => {
  body.classList.toggle('dark');
})