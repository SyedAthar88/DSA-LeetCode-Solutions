function setZeroes(matrix) {
    // ============================================
    // STEP 1: Initialize flags
    // ============================================
    
    let firstRow = false;  // Tracks if the first row originally had a zero
    let firstCol = false;  // Tracks if the first column originally had a zero

    // ============================================
    // STEP 2: Scan the entire matrix and set markers
    // ============================================
    
    // Loop through each row
    for (let i = 0; i < matrix.length; i++) {
        // Loop through each column in the current row
        for (let j = 0; j < matrix[0].length; j++) {
            
            // Check if current cell is zero
            if (matrix[i][j] === 0) {
                
                // If zero is in the FIRST ROW, remember it!
                if (i === 0) {
                    firstRow = true;
                }
                
                // If zero is in the FIRST COLUMN, remember it!
                if (j === 0) {
                    firstCol = true;
                }
                
                // Put a marker in the FIRST ROW at column j
                // This means: "Column j needs to be zeroed"
                matrix[0][j] = 0;
                
                // Put a marker in the FIRST COLUMN at row i
                // This means: "Row i needs to be zeroed"
                matrix[i][0] = 0;
            }
        }
    }

    // ============================================
    // STEP 3: Use markers to zero out inner cells
    // ============================================
    
    // Loop through rows (skipping first row)
    for (let i = 1; i < matrix.length; i++) {
        // Loop through columns (skipping first column)
        for (let j = 1; j < matrix[0].length; j++) {
            
            // Check if this row OR column needs to be zeroed
            // matrix[i][0] === 0  → marker says: "Row i needs zeroing"
            // matrix[0][j] === 0  → marker says: "Column j needs zeroing"
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                // Zero out this cell
                matrix[i][j] = 0;
            }
        }
    }

    // ============================================
    // STEP 4: Handle the first row
    // ============================================
    
    // If first row originally had a zero, zero out the entire row
    if (firstRow) {
        // Loop through all columns in the first row
        for (let j = 0; j < matrix[0].length; j++) {
            // Zero out each cell in the first row
            matrix[0][j] = 0;
        }
    }

    // ============================================
    // STEP 5: Handle the first column
    // ============================================
    
    // If first column originally had a zero, zero out the entire column
    if (firstCol) {
        // Loop through all rows in the first column
        for (let i = 0; i < matrix.length; i++) {
            // Zero out each cell in the first column
            matrix[i][0] = 0;
        }
    }

    // ============================================
    // STEP 6: Done! Matrix is modified in-place
    // ============================================
    
    // No return statement needed because we modified the original matrix
}