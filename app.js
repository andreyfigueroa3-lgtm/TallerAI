/**
 * ==========================================================================
 * app.js - Lógica Principal del Taller de IA
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // SECCIÓN: PANEL DESLIZABLE (ACORDEÓN)
    // ==========================================================================
    
    // Obtener las referencias al botón y al panel
    const btnMaterial = document.getElementById('btn-material');
    const panelMaterial = document.getElementById('panel-material');
    
    if (btnMaterial && panelMaterial) {
        // Escuchar el evento de clic en el botón "Material para reforzar"
        btnMaterial.addEventListener('click', () => {
            
            // Alternar la clase 'open' en el wrapper del panel.
            // Esto activa la transición CSS de grid-template-rows (de 0fr a 1fr)
            panelMaterial.classList.toggle('open');
            
            // Opcional: Cambiar ligeramente el estilo del botón cuando está activo
            if (panelMaterial.classList.contains('open')) {
                // Estado activo
                btnMaterial.style.borderColor = 'var(--accent-color)';
                btnMaterial.style.boxShadow = '0 0 15px rgba(45, 156, 235, 0.2)';
            } else {
                // Estado inactivo
                btnMaterial.style.borderColor = '';
                btnMaterial.style.boxShadow = '';
            }
        });
    }

});
