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
    // 1. Referencias a los elementos del DOM
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sidebar = document.getElementById('sidebar-menu');
    
    const btnTransparencia = document.getElementById('btn-transparencia');
    const btnInicio = document.getElementById('btn-inicio');
    const modalInfo = document.getElementById('modal-info');
    const closeModal = document.getElementById('close-modal');

    // 2. Abrir menú lateral (Hamburguesa)
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            console.log("¡Clic en hamburguesa detectado!");
            sidebar.style.width = '250px';
        });
    } else {
        console.error("Error: No se encontró el id 'menu-toggle' o 'sidebar-menu' en el HTML.");
    }

    // 3. Cerrar menú lateral (X)
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            sidebar.style.width = '0';
        });
    }

    // 4. Botón de Inicio
    if (btnInicio) {
        btnInicio.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte
            sidebar.style.width = '0';
        });
    }

    // 5. Botón de Transparencia (Abre el Folleto)
    if (btnTransparencia && modalInfo) {
        btnTransparencia.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte
            console.log("¡Abriendo folleto de transparencia!");
            sidebar.style.width = '0'; // Cierra el menú
            modalInfo.style.display = 'block'; // Abre el modal
        });
    } else {
        console.error("Error: No se encontró el botón de transparencia o el modal.");
    }

    // 6. Cerrar Modal (Folleto)
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modalInfo.style.display = 'none';
        });
    }

    // 7. Cerrar al hacer clic fuera del cuadro blanco
    window.addEventListener('click', (e) => {
        if (e.target === modalInfo) {
            modalInfo.style.display = 'none';
        }
    });
});
