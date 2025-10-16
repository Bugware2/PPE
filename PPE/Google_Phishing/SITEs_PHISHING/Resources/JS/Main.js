function goToPassword() {
    const emailInput = document.getElementById('email');
    
    if (emailInput.checkValidity()) {
        const Link_fake = document.getElementById('FakeInfo');
        Link_fake.remove();
        document.getElementById('emailStep').style.display = 'none';
        document.getElementById('passwordStep').style.display = 'block';
        document.getElementById('subtitle').innerText = emailInput.value;
    } else {
        emailInput.reportValidity();
    }
}

function LoginCred() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert(`Login with credentials:\nEmail: ${email}\nPassword: ${password}`);
}