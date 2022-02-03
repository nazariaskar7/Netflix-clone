







// signin
const signin = document.querySelector('.signin');
const signinBtn = document.querySelector('#sign-in');
const heroContent = document.querySelector('.hero__content');
const closeBtn = document.querySelector('.closeBtn');

signinBtn.addEventListener('click', (e) => {
    signin.style.display = 'block';
    signinBtn.style.display = 'none';
    heroContent.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    signin.style.display = 'none';
    signinBtn.style.display = 'block';
    heroContent.style.display = 'block';
})