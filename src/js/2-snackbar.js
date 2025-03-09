import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const params = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[type="number"]'),
  radioButtons: document.querySelectorAll('input[name="state"]'),
  btnCreate: document.querySelector('button[type="submit"]'),
};

setTimeout(() => {
  iziToast.show({
    title: 'Hello',
    message: 'Welcome to Snackbar!',
    titleColor: '#FFFFFF',
    messageColor: '#FFFFFF',
    position: 'bottomRight',
    backgroundColor: '#0099FF',
    iconUrl: 'img/hello.svg',
  });
}, 1000);

params.form.addEventListener('submit', promiceCreate);

function promiceCreate(event) {
  event.preventDefault();
  const checkRadio = document.querySelector('input[name="state"]:checked');
  const delay = Number(params.delayInput.value);
  console.log('🚀 ~ promiceCreate ~ delay:', delay);
  if (!checkRadio || delay < 0) {
    iziToast.show({
      title: 'Caution',
      message: 'You forgot important data',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      position: 'topRight',
      backgroundColor: '#FFA000',
      iconUrl: 'img/caution.svg',
    });
    return;
  }

  const state = checkRadio.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  params.delayInput.value = '';
  params.radioButtons.forEach(radio => {
    radio.checked = false;
  });

  promise
    .then(message => {
      iziToast.show({
        title: 'OK',
        message: message,
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        position: 'topRight',
        backgroundColor: ' #326101',
        iconUrl: 'img/ok.svg',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        message: error,
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        position: 'topRight',
        backgroundColor: '#EF4040',
        iconUrl: 'img/error.svg',
      });
    });
}
