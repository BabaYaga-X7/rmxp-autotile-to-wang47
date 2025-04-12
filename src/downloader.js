import { outputCanvas, status } from './domElements.js';

export function downloadOutput() {
    const link = document.createElement('a');
    link.download = 'wang_47_blob_tileset.png';
    link.href = outputCanvas.toDataURL('image/png');
    link.click();
    status.textContent = 'Output downloaded as wang_47_blob_tileset.png';
    status.classList.remove('error');
    status.classList.add('success');
}
