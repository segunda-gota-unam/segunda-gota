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
document.addEventListener('DOMContentLoaded', () => {
    // Referencias al Menú Lateral
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sidebar = document.getElementById('sidebar-menu');
    
    // Referencias al Modal (Folleto)
    const btnTransparencia = document.getElementById('btn-transparencia');
    const btnInicio = document.getElementById('btn-inicio');
    const modalInfo = document.getElementById('modal-info');
    const closeModal = document.getElementById('close-modal');

    // Abrir menú lateral
    menuToggle.addEventListener('click', () => {
        sidebar.style.width = '250px';
    });

    // Cerrar menú lateral
    closeMenu.addEventListener('click', () => {
        sidebar.style.width = '0';
    });

    // Cerrar menú al hacer clic en "Inicio"
    btnInicio.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.style.width = '0';
    });

    // Abrir Modal de Transparencia desde el menú
    btnTransparencia.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.style.width = '0'; // Cierra el menú lateral
        modalInfo.style.display = 'block'; // Muestra el modal
    });

    // Cerrar Modal desde la "X"
    closeModal.addEventListener('click', () => {
        modalInfo.style.display = 'none';
    });

    // Cerrar Modal al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target == modalInfo) {
            modalInfo.style.display = 'none';
        }
    });
});
