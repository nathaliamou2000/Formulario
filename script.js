// script.js

// Validación de campos (ejemplo)
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');

correoInput.addEventListener('input', () => {
    const correoValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correoInput.value);
    if (!correoValido) {
        correoInput.setCustomValidity('Ingresa un correo válido');
    } else {
        correoInput.setCustomValidity('');
    }
});

contrasenaInput.addEventListener('input', () => {
    const contrasenaValida = contrasenaInput.value.length >= 8;
    if (!contrasenaValida) {
        contrasenaInput.setCustomValidity('La contraseña debe tener al menos 8 caracteres');
    } else {
        contrasenaInput.setCustomValidity('');
    }
});

// Envío de datos al servidor (ejemplo)
const formulario = document.querySelector('form');
formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(formulario);

    try {
        const response = await fetch('procesar_formulario.php', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log('Datos enviados correctamente');
        } else {
            console.error('Error al enviar los datos');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
});
