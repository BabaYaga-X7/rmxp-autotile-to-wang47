# RPG Maker XP Autotile to Wang 47-Tile Blob Generator

A web-based tool that converts RPG Maker XP autotiles into Wang 47-tile Blob tilesets. This tool helps game developers transition from RPG Maker's autotile format to a more versatile Wang tile system.

## Features

- Converts 96x128 RPG Maker XP autotiles to 384x128 Wang 47-tile Blob tilesets
- Real-time preview of the converted tileset
- One-click download of the generated tileset
- Browser-based tool - no installation required

## Usage

1. Open `index.html` in a web browser
2. Upload a 96x128 pixel RPG Maker XP autotile image
3. The tool will automatically convert it to a Wang 47-tile Blob format
4. Preview the generated tileset
5. Click "Download 47-Tile Blob Tileset" to save the result

## Input Requirements

- Image must be exactly 96x128 pixels
- Image should follow the RPG Maker XP autotile format
- Supported format: PNG

## Output Format

- Generated tileset dimensions: 384x128 pixels
- Layout: 12 tiles wide, 4 rows
- Format: PNG
- Compatible with Wang 47-tile Blob tileset specifications

## Technical Details

The converter works by:
1. Extracting 8 specific parts from the original autotile
2. Reassembling these parts into 47 unique tiles
3. Applying appropriate flipping and rotation to create the final tileset

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Development

The project is built using vanilla JavaScript and HTML5 Canvas. Files are organized as follows:

- `index.html`: Main entry point and UI
- `src/main.js`: Core application logic
- `src/imageProcessor.js`: Image processing and tile generation
- `src/config.js`: Tile mapping and parts configuration
- `src/downloader.js`: Output file handling
- `src/domElements.js`: DOM element management
- `src/style.css`: Application styling