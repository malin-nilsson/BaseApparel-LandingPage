window.onload = function () {
    validateForm()
}

function validateForm() {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}