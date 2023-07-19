const loginFormHandler = async function(event) {
  event.preventDefault();

  // Collect values from the login form
  const usernameel = document.querySelector('#username-input-login').value.trim();
  const passwordel = document.querySelector('#password-input-login').value.trim();

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({ 
      username: usernameel,
      password: passwordel,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
