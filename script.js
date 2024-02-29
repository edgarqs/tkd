document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const cinturon = urlParams.get('cinturon');
    const tecnica = urlParams.get('tecnica');
  
    const tecnicas = obtenerTecnicasParaCinturon(cinturon);
    mostrarTecnicas(tecnica, tecnicas);
  });
  
  function obtenerTecnicasParaCinturon(cinturon) {
    const tecnicasParaCinturon = {};
  
    // Recopilar todas las técnicas disponibles para el cinturón seleccionado y anteriores
    for (const key in baseDeDatos) {
      if (baseDeDatos.hasOwnProperty(key) && esCinturonAnterior(cinturon, key)) {
        for (const tecnica in baseDeDatos[key]) {
          if (baseDeDatos[key].hasOwnProperty(tecnica)) {
            if (!tecnicasParaCinturon[tecnica]) {
              tecnicasParaCinturon[tecnica] = [];
            }
            tecnicasParaCinturon[tecnica] = tecnicasParaCinturon[tecnica].concat(baseDeDatos[key][tecnica]);
          }
        }
      }
    }
  
    // Aleatorizar las técnicas dentro de cada tipo
    for (const tipoTecnica in tecnicasParaCinturon) {
      if (tecnicasParaCinturon.hasOwnProperty(tipoTecnica)) {
        tecnicasParaCinturon[tipoTecnica] = shuffle(tecnicasParaCinturon[tipoTecnica]);
      }
    }
  
    return tecnicasParaCinturon;
  }
  
  // Función para mezclar aleatoriamente un array (técnica de Fisher-Yates)
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  
  function esCinturonAnterior(cinturonSeleccionado, cinturonActual) {
    const cinturonesOrdenados = ['negro1', 'negro2', 'negro3']; // Definir el orden de los cinturones
    const indexSeleccionado = cinturonesOrdenados.indexOf(cinturonSeleccionado);
    const indexActual = cinturonesOrdenados.indexOf(cinturonActual);
    return indexActual <= indexSeleccionado;
  }
  
  function mostrarTecnicas(tecnica, tecnicas) {
    const tecnicasContainer = document.getElementById('tecnicas-container');
    tecnicasContainer.innerHTML = ''; // Limpiar contenido anterior
  
    switch (tecnica) {
      case 'ataques':
      case 'defensas':
      case 'especiales':
      case 'patadas':
        mostrarTecnicasIndividuales(tecnica, tecnicas[tecnica], tecnicasContainer);
        break;
      case 'todas':
        for (const tipoTecnica in tecnicas) {
          if (tecnicas.hasOwnProperty(tipoTecnica)) {
            mostrarTecnicasIndividuales(tipoTecnica, tecnicas[tipoTecnica], tecnicasContainer);
          }
        }
        break;
      default:
        break;
    }
  }
  
  function mostrarTecnicasIndividuales(tipoTecnica, listaTecnicas, contenedor) {
    const tituloTecnica = document.createElement('h2');
    tituloTecnica.textContent = capitalizar(tipoTecnica);
    contenedor.appendChild(tituloTecnica);
  
    listaTecnicas.forEach(tecnica => {
      const p = document.createElement('p');
      p.textContent = tecnica;
      contenedor.appendChild(p);
    });
  }
  
  function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  
  // Base de datos simulada
  const baseDeDatos = {
    negro1: {
      defensas: ["Are Maki",
                    "Momtong An Maki",
                    "Momtong Maki",
                    "Olgul Maki",
                    "Jansonnal Momtong Bakat Maki",
                    "Sonnal Momtong Maki",
                    "Momtong Bakat Maki",
                    "Olgul Bakat Maki",
                    "Gechio Are Maki",
                    "Batagson Momtong Maki",
                    "Batagson Momtong An Maki",
                    "Sonnal Are Maki",
                    "Goduro Batagson Momtong An Maki",
                    "Gechio Momtong Maki",
                    "Okgoro Are Maki",
                    "Jansonnal Momtong Yop Maki",
                    "Goduro Momtong Maki",
                    "Goduro Are Maki"],
        ataques: ["Momtong Bande Jirugui",
                    "Momtong Baro Jirugui",
                    "Olgul Bande Jirugui",
                    "Momtong Dubong Jirugui",
                    "Sonnal An Chigui",
                    "Pioson Kut Seuo Chirugui",
                    "Dung Chumok Ape Chigui",
                    "Me Chumok Neryo Yop Chigui",
                    "Palkup Dollio Chigui",
                    "Du Checho Jirugui",
                    "Dung Chumok Bakat Chigui",
                    "Yop Jirugui"],
        especiales: ["Kibon Chumbi",
                    "Chebipum Mok Chigui",
                    "Momtong Piochok Palkup Chigui",
                    "Bituro Jansonnal Olgul Bakat Maki",
                    "Bo Chumok Chumbi",
                    "Gawi Maki",
                    "Dangkio Ollyo Murup Chigui",
                    "Piochok Chagui",
                    "Oe Santul Maki",
                    "Dangkio Tok Jirugui"],
        patadas: ["Ap Chagui",
                    "Dollyo Chagui",
                    "Yop Chagui",
                    "Tuit Chagui",
                    "Nacko Chagui",
                    "Furio Chagui",
                    "Neryo Chagui",
                    "Mom Dollyo Yop Chagui",
                    "Mom Dollyo Tuit Chagui",
                    "Mom Dollyo Nacko Chagui",
                    "Mom Dollyo Furio Chagui"]
    },
    negro2: {
        defensas: ["Jansonnal Are Maki",
                    "Nulo Maki",
                    "An Palmok Gechio Momtong Maki",
                    "Jansonnal Momtong Maki"],
        ataques: ["Sonnal Bakat Chigui", "Palkup Yop Chigui", "Sonnal Mok Chigui"],
        especiales: ["Tong Milgui Chumbi",
                    "Akumson Kalchebi",
                    "Murup Koki",
                    "Piochok Jirugui",
                    "Chagun Dol Chogui",
                    "Dangkio Are Pionson Kut Checho Chirugui",
                    "Me Chumok Are Piochok Chigui",
                    "Batagson Tok Chigui",
                    "Kumgang Maki",
                    "Kun Dol Chogui",
                    "Santul Maki"]
    },
    negro3: {
        defensas: ["Sonnal Gechio Are Maki", "An Palmok Goduro Olgul Yop Maki"],
        ataques: ["Palkup Ollyo Chigui"],
        especiales: ["Kolcho Maki",
                    "An Palmok Kumgang Momtong Maki",
                    "Kiopson Chumbi",
                    "Mohe Chigui",
                    "Gechio Santul Maki",
                    "Dangkio Dung Chumok Ape Chigui"]
    },
    negro4: {
        defensas: ["Sonnal Dung",
                    "Gechio Momtong Maki",
                    "Goduro Sonnal Dung Momtong Bakat Maki",
                    "Sonnal Okgoro Are Maki",
                    "An Palmok Momtong Bakat Normativa de Examen 1º a 5 DAN Pag. 11 de 21 Maki",
                    "Jansonnal Olgul Maki",
                    "Yop Are Maki",
                    "An Palmok Goduro Momtong Maki", "Bam Chumok Sosum Chigui"],
        ataques: ["Pionson Kut Opo Chirugui"],
        especiales: ["Hwangso Maki",
                    "Sonbadak Goduro An Palmok Momtong Bakat Maki",
                    "Bawi Milgui",
                    "Gorro Olligui",
                    "Chetdari Jirugui",
                    "Kumgang Ap Jirugui",
                    "Me Chumok Yop Momtong Piochok Chigui",
                    "Nalgue Piogui",
                    "Bituro Jansonnal Momtong Bakat Maki",
                    "An Palmok Bituro Momtong Bakat Maki",
                    "Kumgang Yop Jirugui",
                    "Sonnal Oe Santul Maki",
                    "Taesan Milgui"]
    },
    negro5: {
        defensas: ["Okgoro Olgul Maki", "Sonnal Oe Santul Maki"],
        ataques: ["Du Me Chumok Yang Yopguri Chigui"],
        especiales: ["An Palmok Are Piochok Maki",
                    "Sonnal Kumgang Are Maki",
                    "Oe Santul Yop Chagui",
                    "Du Chumok Jori Chumbi"]
    }
  };
