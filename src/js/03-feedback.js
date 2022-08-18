import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');

let savedData = {};
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(getSavedDataToLs, 500));
form.addEventListener('submit', onFormSubmit);

populateTextarea();

function getSavedDataToLs(e) {
  savedData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

function populateTextarea() {
  const savedD = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedD) {
    email.value = savedD.email;
    textArea.value = savedD.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
