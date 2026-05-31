document.addEventListener('DOMContentLoaded', () => {
    // Animación del contador
    const contador = document.getElementById('litros-contador');
    const objetivo = +contador.getAttribute('data-target');
    
    const actualizarContador = () => {
        const valorActual = +contador.innerText.replace(/,/g, ''); // Quita comas si las hay
        // La velocidad de la animación (menor número = más rápido)
        const incremento = objetivo / 100;

        if (valorActual < objetivo) {
            // Sube el número y le agrega las comas de miles
            contador.innerText = Math.ceil(valorActual + incremento).toLocaleString('en-US');
            setTimeout(actualizarContador, 20);
        } else {
            // Asegura que termine exactamente en el objetivo
            contador.innerText = objetivo.toLocaleString('en-US');
        }
    };

    actualizarContador();

    // Manejo básico del formulario
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        // Aquí en la vida real conectarías con un backend (como Formspree o EmailJS)
        // Por ahora, mostraremos un mensaje de éxito
        alert('¡Gracias por tus comentarios! Nos ayudas a mejorar el servicio en la Facultad.');
        form.reset(); // Limpia el formulario
    });
});