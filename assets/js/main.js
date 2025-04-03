document.addEventListener('DOMContentLoaded', function() {

    const headerOffset = 0; // Ajusta si tienes un header fijo (ej: 60 para 60px de altura)

    // --- Smooth Scroll for internal links ---
    const scrollLinks = document.querySelectorAll('a.scroll-link[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Opcional: Mover el foco al elemento destino para accesibilidad
                // targetElement.focus({ preventScroll: true }); // preventScroll evita un salto brusco
            }
        });
    });

    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Contact Form Handler ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir envío real (para este ejemplo)

            // --- Validación Simple (Ejemplo) ---
            // HTML5 'required' ya hace esto, pero sirve como ejemplo
            const nombre = contactForm.querySelector('#nombre').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const mensaje = contactForm.querySelector('#mensaje').value.trim();

            formMessage.textContent = ''; // Limpiar mensaje previo
            formMessage.style.color = ''; // Resetear color

            if (!nombre || !email || !mensaje) {
                 formMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
                 formMessage.style.color = 'red';
                 // Opcional: Enfocar el primer campo vacío
                 // if (!nombre) contactForm.querySelector('#nombre').focus();
                 // else if (!email) contactForm.querySelector('#email').focus();
                 // else if (!mensaje) contactForm.querySelector('#mensaje').focus();
                 return; // Detener si la validación falla
            }

            // --- Simulación de Envío (Reemplazar con fetch() real) ---
            console.log('Enviando formulario (simulado):', { nombre, email, mensaje });

            // Mostrar mensaje de éxito en la página
            formMessage.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
            formMessage.style.color = 'green'; // Estilo para éxito

            // Limpiar el formulario
            contactForm.reset();

            // Opcional: Ocultar mensaje después de unos segundos
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000); // 5 segundos

            // En un caso real, aquí harías la llamada fetch() a tu backend o servicio:
            /*
            fetch('TU_ENDPOINT_AQUI', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email, mensaje })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // o response.text() si no devuelve JSON
            })
            .then(data => {
                console.log('Success:', data);
                formMessage.textContent = '¡Mensaje enviado con éxito!';
                formMessage.style.color = 'green';
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                formMessage.textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
                formMessage.style.color = 'red';
            });
            */
        });
    }


    // --- Intersection Observer for Fade-in Animations (Ejemplo Opcional) ---
    /*
    const fadeElems = document.querySelectorAll('.section-padding'); // Elementos a animar

    const observerOptions = {
        root: null, // Observa en relación al viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger cuando el 10% del elemento es visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Opcional: Dejar de observar una vez animado
                // observer.unobserve(entry.target);
            } else {
                 // Opcional: Resetear si quieres que se anime cada vez que entra/sale
                 // entry.target.style.opacity = '0';
                 // entry.target.style.transform = 'translateY(20px)';
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    fadeElems.forEach(elem => {
        // Estilos iniciales para la animación
        elem.style.opacity = '0';
        elem.style.transform = 'translateY(20px)';
        elem.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        intersectionObserver.observe(elem);
    });
    */

    // --- Otros Potenciales Enhancements comentados en el HTML/CSS ---
    // Header fijo, carrusel de testimonios, lightbox, etc.

});