document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
  
        const url = this.getAttribute('href'); // Obtiene la URL del enlace
        history.pushState(null, '', url); // Cambia la URL en la barra de direcciones
  
        loadContent(url); // Carga el contenido de la URL
      });
    });
  
    // Función para cargar el contenido del archivo HTML
    function loadContent(url) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
    }
  
    // Cargar contenido inicial al inicio
    loadContent('/contact'); // Carga contact.html al inicio
  });
  