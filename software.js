// Funciones para mostrar y ocultar el spinner
function mostrarSpinner() {
    document.getElementById("spinner").style.display = "flex";
}

function ocultarSpinner() {
    document.getElementById("spinner").style.display = "none";
}
const logosPath = {
    "ARMADYL": "logos/AD.png",
    "AGS EU": "logos/AGS.png",
    "AGSV2 ESPORTS": "logos/AGS.png",
    "ALQAEDA": "logos/ALQ.png",
    "ALQ": "logos/ALQ.png",
    "ALQ PREMIER": "logos/ALQ.png",
    "ALQ STORM": "logos/ALQ.png",
    "ALQ V2": "logos/ALQ.png",
    "ALYANZ SA": "logos/AYZS.png",
    "ALYANZ NA": "logos/AYZN.png",
    "ALYANZ GIRLS": "logos/AYZG.png",
    "ALYANZ E-SPORTS": "logos/ALYANZ.png",
    "ALYANZ UZK": "logos/ALYANZ.png",
    "AS": "logos/AS.png",
    "AS MOBILE": "logos/AS.png",
    "AS NUVS": "logos/AS.png",
    "AS PC": "logos/AS.png",
    "ASG MOB": "logos/ASG.png",
    "ASG PC": "logos/ASG.png",
    "ASG PROSHU": "logos/ASG.png",
    "ASGARD": "logos/ASG.png",
    "BLOODLUST": "logos/BLOODLUST.png",
    "BRK": "logos/BRK.png",
    "CRITICAL HITS": "logos/CH.png",
    "CT MEXICO": "logos/CTM.png",
    "COURT OF WOLVES": "logos/COW.png",
    "CABRITAS": "logos/CABRITAS.png",
    "CLAN 666": "logos/CLAN_666.png",
    "CLS": "logos/CLS.png",
    "CLS BLACK": "logos/CLS.png",
    "CLS BLACKBOX": "logos/CLS.png",
    "CLS CUYS": "logos/CLS.png",
    "CLS MIX": "logos/CLS.png",
    "CLS PITUDOS": "logos/CLS.png",
    "CLS ROMA": "logos/CLS.png",
    "CLS ROMPEKKS": "logos/CLS.png",
    "CLS SIX9": "logos/CLS.png",
    "CLS UNNAMED": "logos/CLS.png",
    "CLS UNNAMED R": "logos/CLS.png",
    "CLARITY": "logos/CLY.png",
    "CRV": "logos/CRV.png",
    "CRV FEMININA": "logos/CRV.png",
    "DARK MYTH": "logos/DM.png",
    "DIENASTY": "logos/DNST.png",
    "DYNASTY": "logos/DYNASTY.png",
    "N1 NIMA EXY": "logos/N1.png",
    "N1 NIMA EXY 2": "logos/N1.png",
    "GUARANI E-SPORTS": "logos/GUAR.png",
    "DRAGON LEGIONS": "logos/DL.png", // FALTA LOGO
    "E11 ELEVEN EXY": "logos/EXY_TOP.png",
    "ELITE": "logos/KENIT.png",
    "ELITE KENIT": "logos/KENIT.png",
    "EX WNG": "logos/EXWNG.png",
    "EXY BIN PEN": "logos/EXY_SA.png",
    "EXY CREW": "logos/EXY_CREW.png",
    "EXY MOB": "logos/EXY_MOBILE.png",
    "EXY MOBILE": "logos/EXY_MOBILE.png",
    "EXY PRUEBAS": "logos/EXY_CREW.png",
    "EXY SA": "logos/EXY_SA.png",
    "EXY TOP": "logos/EXY_TOP.png",
    "FAZE HACK": "logos/FH.png",
    "FENIX": "logos/FENIX.png",
    "FENIX Z1": "logos/FENIX.png",
    "FXL": "logos/NO.png",
    "FROZONOS": "logos/FROZO.png",
    "FACTOZ": "logos/FZ.png",
    "GAMERS ELITE": "logos/GE.png",
    "GK 1ST": "logos/GK.png",
    "GTX": "logos/GTX.png",
    "GTX SPORTS": "logos/GTX.png",
    "GTX E-SPORTS": "logos/GTX.png",
    "GK ELITE PC": "logos/GK.png",
    "GK MOBILE": "logos/GK.png",
    "GK PC": "logos/GK.png",
    "GLIZZY GANG": "logos/GLIZZY.png",
    "GLIZZY GLOBANT": "logos/GLIZZY.png",
    "GS IMPERIAL": "logos/GS.png",
    "GZ ELITE": "logos/GLIZZY.png",
    "GZ MIDNIGHT": "logos/GLIZZY.png",
    "GZ NIGHT": "logos/GLIZZY.png",
    "GZ XZ": "logos/GLIZZY.png",
    "HELLSTAR": "logos/HS.png",
    "HELL7STAR": "logos/HS.png",
    "HELLSTAR SIX": "logos/HSS.png",
    "IGZ": "logos/IGZ.png",
    "IGZ BLOODIE": "logos/IGZ.png",
    "IGZ ELITE": "logos/IGZ.png",
    "IGZ INFAMOUS": "logos/IGZ.png",
    "IGZ MOBILE": "logos/IGZ.png",
    "IGZ PC": "logos/IGZ.png",
    "IGZ SNIPER": "logos/IGZ.png",
    "INTERPOL": "logos/ITP.png",
    "INT ELITE": "logos/INT.png",
    "ISD": "logos/ISD.png",
    "KITSUNE": "logos/KT.png",
    "KENIT MSR PC": "logos/KNT.png",
    "KAZE SPORTS": "logos/KAZES.png",
    "KAZE GAMING": "logos/KAZEG.png",
    "KENIT SPORTS": "logos/KENIT.png",
    "KH E-SPORTS": "logos/KH.png",
    "KIDS GANG": "logos/KGANG.png",
    "LUXURY": "logos/LU.png",
    "LUXURY GT": "logos/LU.png",
    "LEVIATANES": "logos/LEV.png",
    "MYSTICS": "logos/MTC.png",
    "METSU": "logos/METSU.png",
    "METSU ONI": "logos/METSU.png",
    "MS": "logos/METSU.png",
    "NEW": "logos/NEWBR.png",
    "NEW DRAGON": "logos/NEWDRAGON.png",
    "NEW MOB": "logos/NEWDRAGON.png",
    "NOT": "logos/NOT.png",
    "NOTHING": "logos/NTNG.png",
    "ZNOTHING F1": "logos/NTNG.png",
    "NOHAT": "logos/NOHAT.png",
    "NVIDIA": "logos/NVDIA.png",
    "NVIDIA GG": "logos/NVDIA.png",
    "NWG": "logos/NWG.png",
    "NWG ELITE": "logos/NWG.png",
    "NWG KING": "logos/NWG.png",
    "NWG MOBILE": "logos/NWG.png",
    "NWG PC": "logos/NWG.png",
    "NWA": "logos/NWA.png",
    "O22": "logos/O22.png",
    "PKB": "logos/PKB.png",
    "PKB F1": "logos/PKB.png",
    "PXS SPORTS": "logos/PXS.png",
    "R3": "logos/R3.png",
    "REHABILITED": "logos/RHB.png",
    "R6": "logos/RKN.png",
    "RAPTORS T": "logos/RT.png",
    "RAPTORS TEAM": "logos/RT.png",
    "REAL SMOKE": "logos/RS.png",
    "RKN": "logos/RKN.png",
    "RS": "logos/RS.png",
    "RS ELITE": "logos/RS.png",
    "SELFISH": "logos/SE.png",
    "SINEIRA": "logos/SN.png",
    "SILENCE": "logos/SCE.png",
    "SIXSHOTZ": "logos/SIX.png",
    "SUPERBBCHITOS": "logos/SB.png",
    "TOUKA": "logos/TKM.png",
    "T1": "logos/T1.png",
    "T1 PC": "logos/T1.png",
    "TEAM 21": "logos/TEAM21.png",
    "TTV": "logos/TTV.png",
    "TFO": "logos/TFO.png",
    "TFO NG": "logos/TFO.png",
    "ULT ELITE": "logos/ULT.png",
    "UNDER WORLD": "logos/UW.png",
    "UNKNOWS": "logos/UNK.png",
    "UNNAMED": "logos/UNNAMED.png",
    "UNNAMED R": "logos/UNNAMED.png",
    "UZX E-SPORTS": "logos/UZX_E-SPORT.png",
    "UZX TEAM": "logos/UZX_TEAM.png",
    "VIP E-SPORTS": "logos/VIP.png",
    "VIXENS FURY": "logos/VX.png",
    "VYPER TEAM": "logos/VYPER.png",
    "VENDETTA": "logos/VDT.png",
    "YOTSU": "logos/YOT.png",
    "WHITE DEATH": "logos/WTH.png",
    "WTH DS": "logos/WTH.png",
    "WTH RD": "logos/WTH.png",
    "WZE": "logos/WZE.png",
    "WZE TEAM": "logos/WZE.png",
    "ZELTA": "logos/ZELTA.png",
    "ZENIN": "logos/ZENIN.png",
    "XS AURA": "logos/XS.png", // FALTA LOGO
    "X-ESPORTS": "logos/X.png", // FALTA LOGO
    "1SKT MOBILE": "logos/SKT.png",
    "21S": "logos/21S.png",
    "6XZ E-SPORTS": "logos/6XZ.png",
    "7Z GLIZZY": "logos/GLIZZY.png",
    "8GAY": "logos/GAY.png", // FALTA LOGO
};


const positions = {
    logo: [
        [500, 775], [500, 990], [500, 1205], [500, 1420],
        [500, 1635], [500, 1850], [500, 2065], [500, 2280],
        [500, 2495], [500, 2710],
    ],
    equipo: [
        [1250, 900], [1250, 1115], [1250, 1330], [1250, 1545],
        [1250, 1760], [1250, 1975], [1250, 2190], [1250, 2405],
        [1250, 2620], [1250, 2835], 
    ],
    kills: [
        [1860, 910], [1860, 1125], [1860, 1340], [1860, 1555],
        [1860, 1770], [1860, 1985], [1860, 2200], [1860, 2415],
        [1860, 2630], [1860, 2845],  
    ],
    top: [
        [2090, 910], [2090, 1125], [2090, 1340], [2090, 1555],
        [2090, 1770], [2090, 1985], [2090, 2200], [2090, 2415],
        [2090, 2630], [2090, 2845],
    ],
    total: [
        [2310, 910], [2310, 1125], [2310, 1340], [2310, 1555],
        [2310, 1770], [2310, 1985], [2310, 2200], [2310, 2415],
        [2310, 2630], [2310, 2845],
    ]
};




class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.kills = Array(4).fill(0);
        this.top = Array(4).fill(0);
        this.totalKills = 0;
        this.totalTop = 0;
        this.totalPuntaje = 0;
    }

    calcularTotales() {
        this.totalKills = this.kills.reduce((a, b) => a + b, 0);
        this.totalTop = this.top.reduce((a, b) => a + this.calcularPuntosTop(b), 0);
        this.totalPuntaje = this.totalKills + this.totalTop;
    }

    calcularPuntosTop(posicion) {
        const puntos = {
            1: 50, 
            2: 40, 
            3: 30, 
            4: 20,
            5: 15, 
            6: 10, 
            7: 5, 
        };
        return puntos[posicion] || 0;
    }
}

let equipos = [];
let numEquipos = 0;
const abecedario = "ABCDEFGHIJKLMNO"; // Letras del abecedario

function iniciar() {
    numEquipos = parseInt(document.getElementById("numEquipos").value);
    if (numEquipos >= 1 && numEquipos <= 15) {
        const form = document.getElementById("equiposForm");
        form.innerHTML = "";  // Limpiar entradas anteriores

        for (let i = 0; i < numEquipos; i++) {
            const equipoDiv = document.createElement("div");
            equipoDiv.className = "equipo";

            // Crear etiqueta con la letra correspondiente
            const letraEquipo = abecedario[i]; // Obtener letra del abecedario
            const nombreLabel = document.createElement("label");
            nombreLabel.textContent = `Equipo ${i + 1} - ${letraEquipo}:`;
            equipoDiv.appendChild(nombreLabel);

            // Input para el nombre del equipo
            const nombreInput = document.createElement("input");
            nombreInput.placeholder = `Nombre del equipo ${letraEquipo}`;
            nombreInput.className = "nombre-equipo"; // Asigna la clase para el nombre del equipo
            equipoDiv.appendChild(nombreInput);

            // Crear un contenedor para las 4 salas (Kills y Tops)
            const salasDiv = document.createElement("div");
            salasDiv.className = "salas";

            for (let j = 0; j < 4; j++) {
                const salaDiv = document.createElement("div");
                salaDiv.className = "sala";

                // Crear inputs para Kills
                const killsLabel = document.createElement("label");
                killsLabel.textContent = `Sala ${j + 1} Kills:`;
                salaDiv.appendChild(killsLabel);

                const killsInput = document.createElement("input");
                killsInput.type = "number"; // Cambiar a number para validar la entrada
                killsInput.placeholder = `Kills Sala ${j + 1}`;
                killsInput.className = "kills-top"; // Asigna la clase para kills
                salaDiv.appendChild(killsInput);

                // Crear inputs para Tops
                const topLabel = document.createElement("label");
                topLabel.textContent = `Top:`;
                salaDiv.appendChild(topLabel);

                const topInput = document.createElement("input");
                topInput.type = "number"; // Cambiar a number para validar la entrada
                topInput.placeholder = `Top Sala ${j + 1} (1-15)`;
                topInput.className = "kills-top"; // Asigna la clase para tops
                salaDiv.appendChild(topInput);

                salasDiv.appendChild(salaDiv);
            }
            
            equipoDiv.appendChild(salasDiv);
            form.appendChild(equipoDiv);
        }
        document.getElementById("resultadosButton").disabled = false;
    } else {
        alert("El número de equipos debe estar entre 1 y 15.");
    }
}


function generarResultados() {
    mostrarSpinner(); // Mostrar el spinner al inicio
    equipos.length = 0;  // Reiniciar el array de equipos
    const inputs = document.querySelectorAll(".equipo");
    inputs.forEach(input => {
        const nombre = input.querySelector("input[placeholder^='Nombre del equipo']").value;
        
        const equipo = new Equipo(nombre);
        for (let j = 0; j < 4; j++) {
            equipo.kills[j] = parseInt(input.querySelector(`input[placeholder='Kills Sala ${j + 1}']`).value) || 0;
            equipo.top[j] = parseInt(input.querySelector(`input[placeholder='Top Sala ${j + 1} (1-15)']`).value) || 0;
        }
        equipo.calcularTotales();
        equipos.push(equipo);
    });

    equipos.sort((a, b) => b.totalPuntaje - a.totalPuntaje);
    equipos.splice(10);  // Limitar a los 10 mejores equipos

    const resultsText = equipos.map(e => `${e.nombre},${e.totalKills},${e.totalTop},${e.totalPuntaje}`).join("\n");
    localStorage.setItem('resultados', resultsText);
    document.getElementById("imagenButton").disabled = false;
    ocultarSpinner(); // Ocultar el spinner al finalizar
}

function crearImagen() {
    mostrarSpinner(); // Mostrar el spinner al inicio
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "Plantilla/Tabla.png";  // Ruta a la imagen de la plantilla

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        let logosCargados = 0;

        equipos.forEach((equipo, index) => {
            const logo = new Image();
            logo.src = logosPath[equipo.nombre] || "logos/default.png"; 

            logo.onload = function () {
                ctx.drawImage(logo, ...positions.logo[index], 170, 170);

                // Nombres de equipos con negrita
                ctx.fillStyle = "black"; // Nombres en negro
                ctx.font = "bold 95px Anton"; // Aplicar negrita
                ctx.textAlign = "center"; // Centrar el texto
                ctx.fillText(equipo.nombre, positions.equipo[index][0], positions.equipo[index][1]);

                // Kills en negrita
                ctx.fillStyle = "black"; // Kills en negro
                ctx.font = "bold 105px Anton"; // Aplicar negrita
                ctx.textAlign = "center";
                ctx.fillText(equipo.totalKills, positions.kills[index][0], positions.kills[index][1]);

                // Top y Total en blanco (sin negrita si prefieres)
                ctx.fillStyle = "black";
                ctx.font = "bold 105px Anton"; // Aplicar negrita
                ctx.fillText(equipo.totalTop, positions.top[index][0], positions.top[index][1]);

                // Cambiar el color a blanco para el Total
                ctx.fillStyle = "white";
                ctx.font = "bold 100px Anton"; // Aplicar negrita
                ctx.fillText(equipo.totalPuntaje, positions.total[index][0], positions.total[index][1]);

                logosCargados++;
                if (logosCargados === equipos.length) {
                    const imgURL = canvas.toDataURL("image/png");
                    const link = document.createElement("a");
                    link.href = imgURL;
                    link.download = "Tabla_Resultados.png";
                    link.click();
                    ocultarSpinner(); // Ocultar el spinner al finalizar
                    clearTimeout(timer); // Cancelar el temporizador si se completó correctamente
                }
            };

            // Error de carga del logo
            logo.onerror = function () {
                ctx.fillStyle = "black"; // Nombres en negro
                ctx.font = "bold 95px Anton"; // Aplicar negrita
                ctx.textAlign = "center"; // Centrar el texto
                ctx.fillText(equipo.nombre, positions.equipo[index][0], positions.equipo[index][1]);

                ctx.fillStyle = "black"; // Kills en negro
                ctx.font = "bold 105px Anton"; // Aplicar negrita
                ctx.textAlign = "center";
                ctx.fillText(equipo.totalKills, positions.kills[index][0], positions.kills[index][1]);

                ctx.fillStyle = "black"; // Top y Total en blanco
                ctx.font = "bold 105px Anton"; // Aplicar negrita
                ctx.fillText(equipo.totalTop, positions.top[index][0], positions.top[index][1]);

                // Cambiar el color a blanco para el Total
                ctx.fillStyle = "white";
                ctx.font = "bold 100px Anton"; // Aplicar negrita
                ctx.fillText(equipo.totalPuntaje, positions.total[index][0], positions.total[index][1]);

                logosCargados++;
                if (logosCargados === equipos.length) {
                    const imgURL = canvas.toDataURL("image/png");
                    const link = document.createElement("a");
                    link.href = imgURL;
                    link.download = "Tabla_Resultados.png";
                    link.click();
                    ocultarSpinner(); // Ocultar el spinner al finalizar
                    clearTimeout(timer); // Cancelar el temporizador si se completó correctamente
                }
            };
        });
    };
    const timer = setTimeout(() => {
        ocultarSpinner(); // Ocultar el spinner si hay un fallo
        mostrarError("Ha habido un fallo, Generar y Descargar de nuevo.");
    }, 60000); // 60000 ms = 1 minuto
}

function mostrarError(mensaje) {
    // Obtener o crear el contenedor de mensaje de error
    let errorDiv = document.getElementById("errorMensaje");
    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.id = "errorMensaje";
        errorDiv.style.position = "fixed";
        errorDiv.style.top = "50%";
        errorDiv.style.left = "50%";
        errorDiv.style.transform = "translate(-50%, -50%)";
        errorDiv.style.backgroundColor = "rgba(255, 0, 0, 0.9)";
        errorDiv.style.color = "white";
        errorDiv.style.padding = "15px 25px";
        errorDiv.style.borderRadius = "8px";
        errorDiv.style.zIndex = "1000";
        errorDiv.style.textAlign = "center";
        errorDiv.style.maxWidth = "90%";
        errorDiv.style.wordWrap = "break-word";
        errorDiv.style.fontSize = "1rem";
        errorDiv.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
        document.body.appendChild(errorDiv);
    }
    
    // Limpiar contenido previo y añadir mensaje nuevo
    errorDiv.innerHTML = ''; // Eliminar contenido previo
    const mensajeTexto = document.createElement("span");
    mensajeTexto.innerText = mensaje;

    // Crear y añadir botón de cerrar
    const cerrarButton = document.createElement("button");
    cerrarButton.innerText = "OK";
    cerrarButton.style.marginTop = "10px";
    cerrarButton.style.padding = "5px 10px";
    cerrarButton.style.border = "none";
    cerrarButton.style.backgroundColor = "black";
    cerrarButton.style.color = "white";
    cerrarButton.style.borderRadius = "4px";
    cerrarButton.style.cursor = "pointer";
    cerrarButton.onclick = function() {
        errorDiv.style.display = "none"; // Ocultar el mensaje de error al hacer clic
    };

    // Añadir mensaje y botón al contenedor
    errorDiv.appendChild(mensajeTexto);
    errorDiv.appendChild(document.createElement("br")); // Separador
    errorDiv.appendChild(cerrarButton);

    // Mostrar el mensaje de error
    errorDiv.style.display = "block";
}

document.getElementById("iniciarButton").onclick = iniciar;
document.getElementById("resultadosButton").onclick = generarResultados;
document.getElementById("imagenButton").onclick = crearImagen;
