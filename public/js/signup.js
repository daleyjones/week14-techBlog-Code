const signupFormHandler = async function(event) {
  event.preventDefault();


    const usernameel = document.getElementById('username-input-signup');

    const passwordel = document.getElementById('password-input-signup');

    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ 
        username: usernameel.value,
        password: passwordel.value,
       }),
      headers: { 'Content-Type': 'application/json' },
    })

    // Optionally, you can redirect the user to a new page after successful signup
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };

  document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
