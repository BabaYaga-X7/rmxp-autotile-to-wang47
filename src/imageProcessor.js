import { tileMapping, partsDefinition } from './config.js';
import { inputCanvas, inputCtx, partsCanvas, partsCtx, outputCanvas, outputCtx, status, downloadBtn } from './domElements.js';

export function processImage(file) {
    if (!file) return;

    const img = new Image();
    img.onload = function() {
        if (img.width !== 96 || img.height !== 128) {
            status.textContent = '🚫 System Error: Image dimensions must be 96x128 pixels. Please recalibrate your input.';
            downloadBtn.disabled = true;
            return;
        }

        // Draw the uploaded image onto the input canvas
        inputCtx.clearRect(0, 0, inputCanvas.width, inputCanvas.height);
        inputCtx.drawImage(img, 0, 0);

        // Draw parts onto the parts canvas (128x16 row)
        partsCtx.clearRect(0, 0, partsCanvas.width, partsCanvas.height);
        partsDefinition.forEach((part, index) => {
            partsCtx.drawImage(
                inputCanvas,
                part.sx, part.sy, 16, 16,
                index * 16, 0, 16, 16
            );
        });

        // Generate the 47-tile Blob tileset (12x4 grid)
        outputCtx.clearRect(0, 0, outputCanvas.width, outputCanvas.height);
        tileMapping.forEach((tile, index) => {
            if (tile.id === -1) return; // Skip empty slot

            const tileX = (index % 12) * 32; // 12 tiles wide
            const tileY = Math.floor(index / 12) * 32; // 4 rows

            // Define the four quadrants of the 32x32 tile
            const quadrants = [
                { part: tile.parts[0], flipH: tile.flip[0], flipV: tile.flip[1], dx: 0, dy: 0 },  // Top-left
                { part: tile.parts[1], flipH: tile.flip[2], flipV: tile.flip[3], dx: 16, dy: 0 }, // Top-right
                { part: tile.parts[2], flipH: tile.flip[4], flipV: tile.flip[5], dx: 0, dy: 16 }, // Bottom-left
                { part: tile.parts[3], flipH: tile.flip[6], flipV: tile.flip[7], dx: 16, dy: 16 } // Bottom-right
            ];

            // Draw each quadrant with appropriate flipping
            quadrants.forEach(quad => {
                const partX = quad.part * 16; // Source x in parts canvas
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

        status.textContent = '🌟 Tileset Generation Complete! Matrix size: 384x128 | Format: 47-Tile Blob | Ready for Download';
        downloadBtn.disabled = false;
    };
    img.onerror = function() {
        status.textContent = '⚠️ System Malfunction: Invalid image format detected. Please upload a PNG file.';
        downloadBtn.disabled = true;
    };
    img.src = URL.createObjectURL(file);
}
