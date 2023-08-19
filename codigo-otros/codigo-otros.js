const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Cambio a '.name' para seleccionar por clase
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

// Agregamos async a la función para permitir el uso de await
async function displayUser(username) {
    $n.textContent = 'cargando...';
    try {
        const response = await fetch(`${usersEndpoint}/${username}`);
        const data = await response.json(); // Convertir respuesta a formato JSON
        console.log(data);
        $n.textContent = data.name; // Usar data.name en lugar de '${data.name}'
        $b.textContent = data.blog;
        $l.textContent = data.location;
    } catch (error) {
        handleError(error);
    }
}

function handleError(err) {
    console.log('¡OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err.message}`;
}

displayUser('stolinski').catch(handleError);