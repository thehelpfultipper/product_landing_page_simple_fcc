const email = document.querySelector('#email');

// reset input value on form submission
document.querySelector('form').addEventListener('submit', () => {
  email.value = '';
})