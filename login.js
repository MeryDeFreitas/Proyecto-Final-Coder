// Login

let button = document.getElementById('button')
let nombre = document.getElementById('nombre')
let username = document.getElementById('username')
let password = document.getElementById('password')

button.addEventListener('click', (e) => {
    e.preventDefault()

    const data = {
        nombre: nombre.value,
        username: username.value,
        password: password.value
    }

    // Guardar en local storage
    localStorage.setItem("Nombre", JSON.stringify(nombre));
    localStorage.setItem("Usuario", username);
    localStorage.setItem("Contraseña", password);

    // Lo que hara la pagina cuando el usuario ingrese datos

        swal('Usuario registrado', 'Procedemos al pago','success')
        .then(() => {
    window.location.assign('carrito.html')
        })
    console.log(data)
})
