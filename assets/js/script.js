const nuevaTarea = document.querySelector("#ingresar_tarea");
const botonAgregar = document.querySelector("#boton_agregar");
const tablaTarea = document.querySelector("#tabla_tarea");
const contador = document.querySelector("#total");
const tareaRealizada = document.querySelector("#realizada");
const tareas = [
    {
        id: '1412',
        tarea: 'Comprar tomates',
        completado: false
    },
    {
        id: '1231',
        tarea: 'Llamar a mi mama urgente!',
        completado: false
    },
    {
        id: '3243',
        tarea: 'Comprar las medicinas para la operación',
        completado: false
    },
];

botonAgregar.addEventListener('click', () => {

    const tareaNueva = nuevaTarea.value
    const newId = Date.now();
    const autoId = String(newId).slice(-4);

    if (tareaNueva == "") {
        alert("favor ingresar una tarea");
    } else {
        tareas.push({ id: autoId, tarea: tareaNueva, completado: false })
        nuevaTarea.value = "";
    }
    renderTareas();
    console.log(tareas);

})

function renderTareas() {
    let html = "";
    for (let tarea of tareas) {
        html +=
            `
        <tr>
            <th>${tarea.id}</th>
            <th>${tarea.tarea}</th>
            <th><input type="checkbox" id="check-box" style="cursor:pointer"></th>
            <th><button data-id="${tarea.id}" class="delete-button"
            style="background: none;
            border: 0;
            color: inherit;">
            <i class="fa-solid fa-trash-can"></i></button></th>
        </tr>
        `;
        contador.textContent = `${tareas.length}`;

    }
    tablaTarea.innerHTML = html;
}

renderTareas();





