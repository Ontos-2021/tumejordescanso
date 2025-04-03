document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scroll for internal links ---
    const scrollLinks = document.querySelectorAll('a.scroll-link[href^="#"], a[href^="#hero"]'); // Incluye botones del hero

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento de salto por defecto

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula la posición del elemento destino
                const elementPosition = targetElement.getBoundingClientRect().top;
                // Considera el desplazamiento actual de la página
                const offsetPosition = elementPosition + window.pageYOffset;

                // Realiza el scroll suave
                window.scrollTo({
                    top: offsetPosition, // Ajusta si tienes un header fijo
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic Form Submission Handler (Example - Does not send data) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir envío real del formulario

            // Aquí normalmente enviarías los datos usando fetch() o XMLHttpRequest
            // a un backend o servicio como Formspree, Netlify Forms, etc.

            // Muestra un mensaje de confirmación (simple ejemplo)
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

            // Opcional: Limpiar el formulario después del envío
            // contactForm.reset();
        });
    }


    // --- Potential Future Enhancements ---
    // 1. Header fijo que aparece/cambia al hacer scroll.
    // 2. Animaciones sutiles al hacer scroll (Intersection Observer API).
    // 3. Validación de formulario más robusta en el lado del cliente.
    // 4. Implementación de un carrusel para testimonios si hay muchos.
    // 5. Lightbox para las imágenes de la galería de productos.

});
