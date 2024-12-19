document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío tradicional del formulario
  
    const formData = new FormData(this);
    
    fetch('/procesar-formulario', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert("Formulario enviado con éxito");
    })
    .catch(error => {
      console.error("Error al enviar el formulario:", error);
    });
  });
  