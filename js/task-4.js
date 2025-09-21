const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  if (userEmail === '' || userPassword === '') {
    return alert('All form fields must be filled in');
  }

  const userInfo = {
    email: userEmail,
    password: userPassword,
  };

  console.log(userInfo);

  event.currentTarget.reset();
});
