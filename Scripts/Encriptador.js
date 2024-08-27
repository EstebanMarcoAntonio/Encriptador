function encriptarTexto() {
    const texto = document.getElementById("texto").value;
    if (/^[a-z\s]+$/.test(texto)) {  
        const textoEncriptado = btoa(texto); 

        mostrarResultado(textoEncriptado);
    } else {
        alert("El texto solo debe contener letras minúsculas y sin acentos.");
    }
}

function desencriptarTexto() {
    const texto = document.getElementById("texto").value;
    try {
        const textoDesencriptado = atob(texto); 
        mostrarResultado(textoDesencriptado);
    } catch (e) {
        alert("El texto no está en formato Base64 válido.");
    }
}
function mostrarResultado(texto) {
    const resultadoHTML = `
        <div class="texto_encriptado_cuadro_enc">
            <p class="txt_encriptado">${texto}</p>
            <div class="btn_copiar">
                <button class="copiar" onclick="copiarTexto()">Copiar</button>
            </div>            
        </div>`;
    
    document.querySelector(".texto_encriptado").innerHTML = resultadoHTML;
}

function copiarTexto() {
    const textoEncriptado = document.querySelector(".txt_encriptado").textContent;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        alert("Texto copiado al portapapeles.");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth >= 879) {
        cursor.style.display = 'block';
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    } else {
        cursor.style.display = 'none';
    }
});
    


