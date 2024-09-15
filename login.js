const loginBox = document.querySelector('.login-box');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('focusin', () => {
    loginBox.style.animationPlayState = 'paused';
  });

  input.addEventListener('focusout', () => {
    loginBox.style.animationPlayState = 'running';
  });
});