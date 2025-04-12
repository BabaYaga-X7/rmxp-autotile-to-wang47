import { tileMapping, partsDefinition } from './config.js';
import { inputCanvas, inputCtx, partsCanvas, partsCtx, outputCanvas, outputCtx, status, downloadBtn } from './domElements.js';

export function processImage(file) {
    if (!file) return;

    const canvasWrapper = document.querySelector('.canvas-wrapper');
    canvasWrapper.classList.add('loading');
    [inputCanvas, partsCanvas, outputCanvas].forEach(canvas => canvas.classList.add('clearing'));

    // Use requestAnimationFrame to ensure the loading state is visible
    requestAnimationFrame(() => {
        // Clear all canvases
        inputCtx.clearRect(0, 0, inputCanvas.width, inputCanvas.height);
        partsCtx.clearRect(0, 0, partsCanvas.width, partsCanvas.height);
        outputCtx.clearRect(0, 0, outputCanvas.width, outputCanvas.height);
        status.textContent = '';
        status.classList.remove('error', 'success');
        downloadBtn.disabled = true;

        const img = new Image();
        img.onload = function() {
            if (img.width !== 96 || img.height !== 128) {
                status.textContent = 'Error: Image must be 96x128 pixels.';
                status.classList.add('error');
                downloadBtn.disabled = true;
                canvasWrapper.classList.remove('loading');
                [inputCanvas, partsCanvas, outputCanvas].forEach(canvas => canvas.classList.remove('clearing'));
                return;
            }

            // Process the image
            requestAnimationFrame(() => {
                // Draw the uploaded image onto the input canvas
                inputCtx.drawImage(img, 0, 0);

                // Draw parts onto the parts canvas (128x16 row)
                partsDefinition.forEach((part, index) => {
                    partsCtx.drawImage(
                        inputCanvas,
                        part.sx, part.sy, 16, 16,
                        index * 16, 0, 16, 16
                    );
                });

                // Generate the 47-tile Blob tileset (12x4 grid)
                tileMapping.forEach((tile, index) => {
                    if (tile.id === -1) return;

                    const tileX = (index % 12) * 32;
                    const tileY = Math.floor(index / 12) * 32;

                    // Draw quadrants
                    const quadrants = [
                        { part: tile.parts[0], flipH: tile.flip[0], flipV: tile.flip[1], dx: 0, dy: 0 },
                        { part: tile.parts[1], flipH: tile.flip[2], flipV: tile.flip[3], dx: 16, dy: 0 },
                        { part: tile.parts[2], flipH: tile.flip[4], flipV: tile.flip[5], dx: 0, dy: 16 },
                        { part: tile.parts[3], flipH: tile.flip[6], flipV: tile.flip[7], dx: 16, dy: 16 }
                    ];

                    quadrants.forEach(quad => {
                        const partX = quad.part * 16;
                        outputCtx.save();
                        outputCtx.translate(tileX + quad.dx + (quad.flipH ? 16 : 0), tileY + quad.dy + (quad.flipV ? 16 : 0));
                        outputCtx.scale(quad.flipH ? -1 : 1, quad.flipV ? -1 : 1);
                        outputCtx.drawImage(
                            partsCanvas,
                            partX, 0, 16, 16,
                            0, 0, 16, 16
                        );
                        outputCtx.restore();
                    });
                });

                // Remove loading states after processing
                setTimeout(() => {
                    canvasWrapper.classList.remove('loading');
                    [inputCanvas, partsCanvas, outputCanvas].forEach(canvas => canvas.classList.remove('clearing'));
                    status.textContent = 'Wang 47-tile Blob tileset generated successfully! (384x128, 12 tiles wide, 4 rows)';
                    status.classList.add('success');
                    downloadBtn.disabled = false;
                }, 200); // Match this with the CSS transition duration
            });
        };

        img.onerror = function() {
            status.textContent = 'Error loading image.';
            status.classList.add('error');
            downloadBtn.disabled = true;
            canvasWrapper.classList.remove('loading');
            [inputCanvas, partsCanvas, outputCanvas].forEach(canvas => canvas.classList.remove('clearing'));
        };

        img.src = URL.createObjectURL(file);
    });
}
