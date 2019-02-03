/* Util class with good to have functions. */

export default function create2DArray(rows, cols) {
    const arr = [];

    for (let i=0;i<rows;i++) {
        arr[i] = [];
        for (let j=0;j<cols;j++) {
            arr[i][j] = 0;
        }
    }
    
    return arr;
};
