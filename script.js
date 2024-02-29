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


function mostrarTecnicas() {
    const cinturonSeleccionado = document.getElementById("cinturon").value;
    const tipoTecnicaSeleccionada = document.getElementById("tipo-tecnica").value;

    const tecnicas = tecnicasPorCinturon[cinturonSeleccionado][tipoTecnicaSeleccionada];

    // Barajar técnicas aleatoriamente
    tecnicas.sort(() => Math.random() - 0.5);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>${tipoTecnicaSeleccionada.charAt(0).toUpperCase() + tipoTecnicaSeleccionada.slice(1)}</h2>`;
    resultadoDiv.innerHTML += `<ul>${tecnicas.map(tecnica => `<li>${tecnica}</li>`).join('')}</ul>`;
}
