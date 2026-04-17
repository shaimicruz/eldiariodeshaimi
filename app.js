window.onload = function () {
    alert("Bienvenida a mi página ✨");
};

function mostrarSeccion(id) {
    let secciones = document.querySelectorAll('.seccion-contenido');
    secciones.forEach(s => s.classList.remove('activa'));

    let botones = document.querySelectorAll('nav button');
    botones.forEach(b => b.classList.remove('activo'));

    document.getElementById(id).classList.add('activa');
    document.getElementById('btn-' + id).classList.add('activo');
}

let form = document.getElementById('form-contacto');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;

    alert("Gracias " + nombre + " 💌");

    form.reset();
});