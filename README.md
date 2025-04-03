# Tu mejor descanso - Landing Page

Landing page profesional y sensible para "Tu mejor descanso", un negocio dedicado a la venta de souvenirs funerarios personalizados. El sitio busca presentar los productos y servicios de manera respetuosa y elegante, facilitando el contacto y el proceso de encargo.

## ✨ Características

*   **Diseño Responsivo:** Adaptable a diferentes tamaños de pantalla (desktop, tablet, móvil).
*   **Secciones Claras:**
    *   Hero Section con llamado a la acción.
    *   Sobre Nosotros (Misión y Valores).
    *   Galería de Productos.
    *   Proceso de Encargo detallado.
    *   Testimonios de clientes.
    *   Formulario de Contacto funcional (frontend).
    *   Footer con información básica.
*   **Estilo Sobrio y Elegante:** Paleta de colores suaves (beige, gris, azul suave) y tipografías seleccionadas (serif para títulos, sans-serif para cuerpo).
*   **Interactividad Básica:** Scroll suave para navegación interna.

## 📂 Estructura del Proyecto

```
/
├── index.html         # Página principal
├── assets/            # Recursos del proyecto
│   ├── css/           # Estilos
│   │   ├── styles.css # Estilos principales
│   │   └── normalize.css # Reset CSS
│   ├── js/            # Scripts JavaScript
│   │   └── main.js    # Funcionalidades interactivas
│   ├── img/           # Imágenes optimizadas
│   │   ├── hero/      # Imágenes de cabecera
│   │   ├── products/  # Galería de productos
│   │   └── testimonials/ # Fotos de testimonios
│   ├── fonts/         # Tipografías
│   └── icons/         # Iconos
```

## 💻 Tecnologías Utilizadas

*   **HTML5:** Para la estructura semántica del contenido.
*   **CSS3:** Para el diseño, layout (Flexbox/Grid), responsividad y estilos visuales (incluyendo Variables CSS).
*   **JavaScript (Vanilla):** Para interacciones básicas como el scroll suave y manipulación del DOM.

## 🚀 Despliegue en GitHub Pages

Puedes desplegar fácilmente este proyecto como un sitio estático usando GitHub Pages:

1.  **Crea un Repositorio en GitHub:** Si aún no lo has hecho, crea un nuevo repositorio en tu cuenta de GitHub.
2.  **Sube el Código:** Clona el repositorio (o inicialízalo si trabajas localmente) y sube todos los archivos del proyecto:
    ```bash
    git init # (Si es un proyecto nuevo local)
    git add .
    git commit -m "Initial commit: Add landing page files"
    git remote add origin TU_URL_DEL_REPOSITORIO_GIT # (Si es nuevo)
    git branch -M main # (O master, según tu configuración)
    git push -u origin main
    ```
3.  **Habilita GitHub Pages:**
    *   Ve a la pestaña "Settings" (Configuración) de tu repositorio en GitHub.
    *   En el menú lateral, selecciona "Pages".
    *   En la sección "Build and deployment", bajo "Source", selecciona "Deploy from a branch".
    *   Elige la rama donde está tu código (normalmente `main` o `master`).
    *   Asegúrate de que la carpeta seleccionada sea `/ (root)`.
    *   Haz clic en "Save".
4.  **Espera el Despliegue:** GitHub Actions construirá y desplegará tu sitio. Puede tardar unos minutos. Una vez listo, la URL de tu sitio aparecerá en la misma sección de "Pages". Normalmente será algo como `https://TUNOMBREDEUSUARIO.github.io/TUNOMBREDEPROYECTO/`.

---

_Desarrollado con cuidado y respeto._

