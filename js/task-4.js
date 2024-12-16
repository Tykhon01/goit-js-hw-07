const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const emailInput = form.elements.email;
    const paswornInput = form.elements.password;

    const email = emailInput.value.trim();
    const password = paswornInput.value.trim();
    
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        email: email,
        password: password,
    }
    console.log(formData);

    form.reset();
});
