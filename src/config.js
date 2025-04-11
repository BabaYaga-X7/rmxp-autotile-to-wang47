// Define the 47-tile Blob layout and their part mappings
export const tileMapping = [
    // Row 1: 16, 20, 84, 80, 213, 92, 116, 87, 28, 125, 124, 112
    { id: 16, parts: [3, 3, 4, 4], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 20, parts: [3, 2, 4, 5], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 84, parts: [2, 2, 5, 5], flip: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: 80, parts: [2, 3, 5, 4], flip: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: 213, parts: [0, 1, 5, 5], flip: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: 92, parts: [2, 2, 5, 0], flip: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: 116, parts: [2, 2, 0, 5], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 87, parts: [1, 0, 5, 5], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 28, parts: [3, 2, 4, 0], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 125, parts: [1, 1, 0, 0], flip: [1, 0, 0, 0, 0, 0, 0, 0] },
    { id: 124, parts: [2, 2, 0, 0], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 112, parts: [2, 3, 0, 4], flip: [0, 0, 0, 0, 0, 0, 0, 0] },

    // Row 2: 17, 21, 85, 81, 29, 127, 253, 113, 31, 119, (empty), 245
    { id: 17, parts: [4, 4, 4, 4], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 21, parts: [4, 1, 4, 5], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 85, parts: [1, 1, 5, 5], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 81, parts: [1, 4, 5, 4], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 29, parts: [4, 1, 4, 0], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 127, parts: [1, 0, 0, 0], flip: [1, 0, 0, 0, 0, 0, 0, 0] },
    { id: 253, parts: [0, 1, 0, 0], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 113, parts: [1, 4, 0, 4], flip: [1, 0, 0, 0, 0, 0, 0, 0] },
    { id: 31, parts: [4, 0, 4, 0], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 119, parts: [1, 0, 0, 5], flip: [1, 0, 0, 0, 0, 0, 0, 0] },
    { id: -1, parts: [], flip: [] },
    { id: 245, parts: [0, 1, 0, 5], flip: [0, 0, 0, 0, 0, 0, 0, 0] },

    // Row 3: 1, 5, 69, 65, 23, 223, 247, 209, 95, 255, 221, 241
    { id: 1, parts: [4, 4, 7, 7], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 5, parts: [4, 1, 7, 6], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 69, parts: [1, 1, 6, 6], flip: [1, 0, 0, 0, 0, 0, 0, 0] },
    { id: 65, parts: [1, 4, 6, 7], flip: [1, 0, 0, 0, 0, 0, 0, 0] },
    { id: 23, parts: [4, 0, 4, 5], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 223, parts: [0, 0, 5, 0], flip: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: 247, parts: [0, 0, 0, 5], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 209, parts: [0, 4, 5, 4], flip: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: 95, parts: [1, 0, 5, 0], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 255, parts: [0, 0, 0, 0], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 221, parts: [0, 1, 5, 0], flip: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: 241, parts: [0, 4, 0, 4], flip: [0, 0, 0, 0, 0, 0, 0, 0] },

    // Row 4: 0, 4, 68, 64, 117, 71, 197, 93, 7, 199, 215, 193
    { id: 0, parts: [3, 3, 7, 7], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 4, parts: [3, 2, 7, 6], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 68, parts: [2, 2, 6, 6], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 64, parts: [2, 3, 6, 7], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 117, parts: [1, 1, 0, 5], flip: [1, 0, 0, 0, 0, 0, 0, 0] },
    { id: 71, parts: [1, 0, 6, 6], flip: [1, 0, 0, 0, 0, 0, 0, 0] },
    { id: 197, parts: [0, 1, 6, 6], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 93, parts: [1, 1, 5, 0], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 7, parts: [4, 0, 7, 6], flip: [1, 0, 0, 0, 1, 0, 0, 0] },
    { id: 199, parts: [0, 0, 6, 6], flip: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: 215, parts: [0, 0, 5, 5], flip: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: 193, parts: [0, 4, 6, 7], flip: [0, 0, 0, 0, 0, 0, 0, 0] }
];

// Coordinates for extracting the 8 parts from the autotile
export const partsDefinition = [
    { name: 'FULL', sx: 32, sy: 64 }, // 0: Center tile
    { name: 'CORNER_IN_TOP_RIGHT', sx: 80, sy: 0 }, // 1: Inner corner from right half
    { name: 'SIDE_TOP', sx: 16, sy: 32 }, // 2: Top of middle block
    { name: 'CORNER_OUT_TOP_RIGHT', sx: 80, sy: 32 }, // 3: Top-right outer corner
    { name: 'SIDE_RIGHT', sx: 80, sy: 48 }, // 4: Right of middle block
    { name: 'CORNER_IN_BOTTOM_RIGHT', sx: 80, sy: 16 }, // 5: Inner corner from right half
    { name: 'SIDE_BOTTOM', sx: 16, sy: 112 }, // 6: Bottom of middle block
    { name: 'CORNER_OUT_BOTTOM_RIGHT', sx: 80, sy: 112 } // 7: Bottom-right outer corner
];
