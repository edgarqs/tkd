// Definir la variable tecnicasPorCinturon antes de usarla
const tecnicasPorCinturon = {
    "cinta-blanca": {
        "ataques": ["Técnica 1", "Técnica 2", "Técnica 3"],
        "defensas": ["Técnica 4", "Técnica 5", "Técnica 6"],
        "tecnicas-especiales": ["Técnica 7", "Técnica 8", "Técnica 9"],
        "patadas": ["Técnica 10", "Técnica 11", "Técnica 12"]
    },
    "cinta-amarilla": {
        "ataques": ["Técnica 13", "Técnica 14", "Técnica 15"],
        "defensas": ["Técnica 16", "Técnica 17", "Técnica 18"],
        "tecnicas-especiales": ["Técnica 19", "Técnica 20", "Técnica 21"],
        "patadas": ["Técnica 22", "Técnica 23", "Técnica 24"]
    },
    "cinta-negra": {
        "ataques": [
            ...tecnicasPorCinturon["cinta-blanca"]["ataques"],
            ...tecnicasPorCinturon["cinta-amarilla"]["ataques"],
            // Agregar técnicas específicas de cinta negra
        ],
        "defensas": [
            ...tecnicasPorCinturon["cinta-blanca"]["defensas"],
            ...tecnicasPorCinturon["cinta-amarilla"]["defensas"],
            // Agregar técnicas específicas de cinta negra
        ],
        "tecnicas-especiales": [
            ...tecnicasPorCinturon["cinta-blanca"]["tecnicas-especiales"],
            ...tecnicasPorCinturon["cinta-amarilla"]["tecnicas-especiales"],
            // Agregar técnicas específicas de cinta negra
        ],
        "patadas": [
            ...tecnicasPorCinturon["cinta-blanca"]["patadas"],
            ...tecnicasPorCinturon["cinta-amarilla"]["patadas"],
            // Agregar técnicas específicas de cinta negra
        ]
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const cinturonSelect = document.getElementById("cinturon");
    const tipoTecnicaSelect = document.getElementById("tipo-tecnica");
    const mostrarBtn = document.getElementById("mostrar-btn");
    const resultadoDiv = document.getElementById("resultado");

    // Llenar las opciones del select de cinturón
    for (const cinturon in tecnicasPorCinturon) {
        const option = document.createElement("option");
        option.value = cinturon;
        option.textContent = cinturon.charAt(0).toUpperCase() + cinturon.slice(1).replace(/-/g, " ");
        cinturonSelect.appendChild(option);
    }

    // Llenar las opciones del select de tipo de técnica
    const tiposTecnica = ["ataques", "defensas", "tecnicas-especiales", "patadas", "todas"];
    tiposTecnica.forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.textContent = tipo === "todas" ? "Todas las Técnicas" : tipo.charAt(0).toUpperCase() + tipo.slice(1).replace(/-/g, " ");
        tipoTecnicaSelect.appendChild(option);
    });

    // Función para mostrar las técnicas
    function mostrarTecnicas() {
        const cinturonSeleccionado = cinturonSelect.value;
        let tipoTecnicaSeleccionada = tipoTecnicaSelect.value;

        if (tipoTecnicaSeleccionada === "todas") {
            tipoTecnicaSeleccionada = Object.keys(tecnicasPorCinturon[cinturonSeleccionado]);
        } else {
            tipoTecnicaSeleccionada = [tipoTecnicaSeleccionada];
        }

        let tecnicas = [];

        tipoTecnicaSeleccionada.forEach(tipo => {
            tecnicas = tecnicas.concat(tecnicasPorCinturon[cinturonSeleccionado][tipo]);
        });

        // Barajar técnicas aleatoriamente
        tecnicas.sort(() => Math.random() - 0.5);

        resultadoDiv.innerHTML = '';
        tipoTecnicaSeleccionada.forEach(tipo => {
            resultadoDiv.innerHTML += `<h2>${tipo.charAt(0).toUpperCase() + tipo.slice(1).replace(/-/g, " ")}</h2>`;
            resultadoDiv.innerHTML += `<ul>${tecnicasPorCinturon[cinturonSeleccionado][tipo].map(tecnica => `<li>${tecnica}</li>`).join('')}</ul>`;
        });
    }

    // Asociar evento click al botón
    mostrarBtn.addEventListener("click", mostrarTecnicas);
});
