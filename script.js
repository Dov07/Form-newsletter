Su
const form = document.querySelector('form');
const input = document.querySelector('.input');
const main = document.querySelector('main');
const cardSub = document.querySelector('.card-sub');
const closeBtn = document.querySelector('.close');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const email = input.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMessage.style.display = 'block'; 

    return;
  }


  errorMessage.style.display = 'none';
  input.classList.remove('error-border');


  main.style.display = 'none';
  cardSub.style.display = 'grid'; 


  const emailBold = cardSub.querySelector('b');
  emailBold.textContent = email;
});


closeBtn.addEventListener('click', () => {
  cardSub.style.display = 'none';
  main.style.display = 'flex'; 


  form.reset();
});
