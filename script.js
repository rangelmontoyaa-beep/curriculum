

document.addEventListener('DOMContentLoaded', () => {
    console.log("Currículum cargado correctamente y listo para interactuar.");

    const themeBtn = document.getElementById('theme-btn');
    const outputDiv = document.getElementById('interactive-output');
    const container = document.querySelector('.cv-container');

    let isAlternativeTheme = false;

    themeBtn.addEventListener('click', () => {
        isAlternativeTheme = !isAlternativeTheme;

        if (isAlternativeTheme) {
            container.style.borderColor = '#38bdf8';
            container.style.boxShadow = '0 5px 25px rgba(56, 189, 248, 0.3)';
            outputDiv.textContent = "✨ ¡Estilo visual actualizado con éxito! (Modo Interactivo Activo)";
            outputDiv.style.color = '#0284c7';
        } else {
            container.style.borderColor = '#e1e4e8';
            container.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
            outputDiv.textContent = "🔒 Perfil validado y asegurado con éxito.";
            outputDiv.style.color = '#10b981';
        }
    });

    console.log("%c ¡CV de Angel Francisco Rangel Montoya preparado para entrega!", "color: #0284c7; font-weight: bold; font-size: 14px;");
});