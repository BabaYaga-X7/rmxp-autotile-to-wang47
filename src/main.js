import { imageInput, downloadBtn } from './domElements.js';
import { processImage } from './imageProcessor.js';
import { downloadOutput } from './downloader.js';

// Event listener for file input change
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    processImage(file);
});

// Event listener for download button click
downloadBtn.addEventListener('click', downloadOutput);
