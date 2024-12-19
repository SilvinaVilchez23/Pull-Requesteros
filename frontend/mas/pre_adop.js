document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const date = document.querySelector('input[name="fecha_nacimiento"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const mascota = document.querySelector('select[name="mascota"]').value;
    const pregunta = document.querySelector('textarea[name="pregunta"]').value;

    const datosFormulario = {
      email: email,
      date: date,
      telefono: telefono,
      mascota: mascota,
      pregunta: pregunta
    };

    fetch('http://localhost:3000/api/v1/formu_pre', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosFormulario)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }
      return response.json();
    })
    .then(data => {
      alert('¡Solicitud enviada con éxito!');
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      alert('Hubo un error al enviar la solicitud.');
      console.error('Error:', error);
    });
  });
});
