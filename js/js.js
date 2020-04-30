(function form() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');

    const span = document.createElement('span');
    const pass = document.querySelector('#pass');


    name.addEventListener('focus', function () {
        name.classList.remove('error');
    });

    name.addEventListener('blur', function () {
        if (!name.value) {
            name.classList.add('error')
        }
    });

    email.addEventListener('focus', function () {
        email.classList.remove('error');
        span.remove()
    });

    email.addEventListener('blur', function () {
        if (!email.value) {
            email.classList.add('error')
        };
        span.innerHTML = 'Пожалуйста, введите правильно Email.';
        span.className = 'invalid_email';
        if (!email.value.includes('@')) {
            email.before(span);
        }

    });
    pass.addEventListener('cut', function(event){
        return false

    });
   
})()

