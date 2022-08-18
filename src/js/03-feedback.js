import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = {
  email: savedData ? savedData.email : '',
  message: savedData ? savedData.message : '',
};

form.addEventListener('input', throttle(getSavedDataToLs, 500));
form.addEventListener('submit', onFormSubmit);

verifyTextarea();

function getSavedDataToLs(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function verifyTextarea() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    email.value = savedData.email;
    textArea.value = savedData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    console.log(savedData);
  }

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
