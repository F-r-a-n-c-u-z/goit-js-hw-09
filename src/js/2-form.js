const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);
form.addEventListener('input', onInput);

function onInput(event) {
  const data = event.currentTarget;
  const email = data.elements.email.value;
  const message = data.elements.message.value;

  const formData = { email: email.trim(), message: message.trim() };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert`Fill in the fields`;
  }

  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveData.email && saveData.message) {
    const saveEmail = saveData.email;
    const saveMessege = saveData.message;

    console.log({ email: saveEmail, message: saveMessege });

    form.reset();
    localStorage.clear();
  }
}

Loaded();
function Loaded() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveData) {
    input.value = saveData.email;
    textarea.value = saveData.message;
  }
}
