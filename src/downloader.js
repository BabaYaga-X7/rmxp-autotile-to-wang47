import { outputCanvas, status } from './domElements.js';

export function downloadOutput() {
    const link = document.createElement('a');
    link.download = 'wang_47_blob_tileset.png';
    link.href = outputCanvas.toDataURL('image/png');
    link.click();
    status.textContent = '💾 Data Transfer Complete: wang_47_blob_tileset.png successfully downloaded to your local matrix.';
}
