document.addEventListener('DOMContentLoaded', () => {
    const idInput = document.getElementById('idInput');
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitBtn');
    const errorMessage = document.getElementById('errorMessage');
    const togglePassword = document.getElementById('togglePassword');

    const correctId = '1263056';
    const correctPassword = '08729';

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('bx-show');
        togglePassword.classList.toggle('bx-hide');
    });

    submitBtn.addEventListener('click', () => {
        const userId = idInput.value;
        const userPassword = passwordInput.value;

        if (userId === correctId && userPassword === correctPassword) {
            submitBtn.disabled = false;
            errorMessage.style.display = 'none';
            window.location.replace('http://127.0.0.1:5500/student.html');
        } else {
            submitBtn.disabled = true;
            errorMessage.style.display = 'block';
        }
    });

    function checkInputs() {
        const userId = idInput.value;
        const userPassword = passwordInput.value;
        if (userId && userPassword) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
            errorMessage.style.display = 'none';
        }
    }

    idInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

}); 




let student = {
    name: 'Bilol',
    status: 'student',
    coin: '1701',
    id: '1263056',
    password: '08729'
}
localStorage.setItem('student', JSON.stringify(student));




