function toggleInfo(infoId) {
    const infoDiv = document.getElementById(infoId);
    const arrow = document.getElementById(`arrow-${infoId}`);
    
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
        arrow.textContent = '↑';  // Seta para cima
    } else {
        infoDiv.style.display = 'none';
        arrow.textContent = '↓';  // Seta para baixo
    }
}
