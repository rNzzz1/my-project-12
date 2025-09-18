const emailInput = document.getElementById('email');

emailInput.addEventListener('input', validateEmail);

function validateEmail(){
    const regex = /[A-Za-z0-9\.]{2,10}@[a-z0-9]{1,10}\.[a-z]{2,3}/
    if(regex.test(emailInput.value))
    {
        removeError(emailInput);
        return true;
    }
    else
    {
        showError(emailInput, "email введён в неверном формате");
        return false;
    }
}

function showError(input, message) {
    const form = input.parentElement;
    const errorElement = form.querySelector('.error') || document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    form.appendChild(errorElement);
    input.style.borderColor = 'red';
}

function removeError(input) {
    const form = input.parentElement;
    const errorElement = form.querySelector('.error');
    if(errorElement)
    {
        form.removeChild(errorElement);
    }
    input.style.borderColor = 'purple'
}
const form = document.querySelector('.form');
const modal = document.getElementById('modal');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  form.querySelectorAll('.form__input').forEach(input => {
    const error = input.nextElementSibling;
    if (!input.checkValidity()) {
      error.textContent = 'Пожалуйста, заполните поле корректно';
      valid = false;
    } else {
      error.textContent = '';
    }
  });

  if (valid) {
    modal.showModal();
    form.reset();
  }
});
