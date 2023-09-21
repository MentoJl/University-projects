let matrix = []
let matrixRows = 0
let matrixColls = 0

function createMatrix(arr) {
    arr = []
    matrixRows = document.getElementById("row").value
    matrixColls = document.getElementById("coll").value

    for (let i=0; i<matrixRows; ++i) {
        let row = []
        for (let j=0; j<matrixColls; ++j) {
            row.push(Math.floor(Math.random() * (9 + 9 + 1)) -9)
        }
        arr.push(row)
    }
    return arr
}

function positiveElements(matrix) {
    let counter = 0
    for (let i=0; i<matrixRows; ++i) {
        for (let j=0; j<matrixColls; ++j) {
            if (matrix[i][j] > 0) {
                counter++
            }
        }
    }
    return counter
}

function displayMatrix(matrix) {
    console.log(matrix)
}

function rowsWithoutNullElements(matrix) {
    let counter = 0
    let positive
    for (let i=0; i<matrixRows; ++i) {
        positive = false
        for (let j=0; j<matrixColls; ++j) {
            if (matrix[i][j] != 0) {
                positive = true
            }
        }
        if (positive) {
            counter++
        }
    }
    return counter
}

function collsWithNullElements(matrix) {
    let counter = 0
    let positive
    for (let i=0; i<matrixColls; ++i) {
        positive = false
        for (let j=0; j<matrixRows; ++j) {
            if (matrix[j][i] === 0) {
                positive = true
            }
        }
        if (positive) {
            counter++
        }
    }
    return counter
}

function sameElementsInRow(matrix) {
    let row = 0
    let mostSameElementsInRow = 0
    for (let i=0; i < matrixRows; ++i) {
        let elementsInRow = []
        let seriesOfSameElements = 0
        for (let j=0; j < matrixColls; ++j) {
            if (elementsInRow.indexOf(matrix[i][j]) === -1) {
                elementsInRow.push(matrix[i][j])
            }
            else {
                seriesOfSameElements++
            }
        }
        if (mostSameElementsInRow < seriesOfSameElements)  {
            mostSameElementsInRow = seriesOfSameElements
            row = i
        }
    }
    return row
}

function mullRowsWithoutNulls(matrix) {
    for (let i=0; i < matrixRows; ++i) {
        let nulls = false
        for (let j=0; j < matrixColls; ++j) {
            if (matrix[i][j] === 0) {
                nulls = true
            }
        }
        if (!nulls) {
            let mullRow = 1
            for (let j=0; j < matrixColls; ++j) {
                mullRow *= matrix[i][j]
            }
            console.log(`Mulltiply in rows ${i} without nulls = ${mullRow}`)
        }
    }
}

function mullCollsWithoutNulls(matrix) {
    for (let i=0; i < matrixColls; ++i) {
        let nulls = false
        for (let j=0; j < matrixRows; ++j) {
            if (matrix[j][i] === 0) {
                nulls = true
            }
        }
        if (!nulls) {
            let mullRow = 1
            for (let j=0; j < matrixRows; ++j) {
                mullRow *= matrix[j][i]
            }
            console.log(`Mulltiply in colls ${i} without nulls = ${mullRow}`)
        }
    }
}

function summCollsWithoutNulls(matrix) {
    for (let i=0; i < matrixColls; ++i) {
        let negatives = false
        for (let j=0; j < matrixRows; ++j) {
            if (matrix[j][i] < 0) {
                negatives = true
            }
        }
        if (negatives) {
            let mullRow = 1
            for (let j=0; j < matrixRows; ++j) {
                mullRow += matrix[j][i]
            }
            console.log(`Summ in colls ${i} where elements < 0 = ${mullRow}`)
        }
    }
}

function transposeMatrix(matrix) {
    console.log(`Transpose matrix: `)
    let transposedMatrix = []
    for (let i = 0; i < matrixColls; ++i) {
        let row = []
        for (let j = 0; j < matrixRows; ++j) {
            row.push(matrix[j][i])
        }
        transposedMatrix.push(row)
    }
    console.log(transposedMatrix)
}

function maxSumMainDiagonals(matrix) {
    let elemDiagonals = []
    let counter = 0
    for (let i = 0; i < matrixRows; ++i) {
        for (let j = i + 1, k = 0; j < matrixColls; ++j) {
            if (i === 0 && j !== matrixColls - 1) {
                elemDiagonals.push(matrix[i][j])
                elemDiagonals.push(matrix[j][i])
            }
            if (i !== 0) {
                elemDiagonals[k] += matrix[i][j]
                elemDiagonals[k+1] += matrix[j][i]
                k+=2
            }
        }
    }
    console.log(`The maximum elements parallel to the main diagonal of the matrix ${Math.max(...elemDiagonals)}`)
}

function submit() {
    matrix = createMatrix(matrix)
    displayMatrix(matrix)
    // console.log(positiveElements(matrix))
    // console.log(rowsWithoutNullElements(matrix))
    // console.log(collsWithNullElements(matrix))
    // console.log(sameElementsInRow(matrix))
    // mullRowsWithoutNulls(matrix)
    // mullCollsWithoutNulls(matrix)
    // summCollsWithoutNulls(matrix)
    // transposeMatrix(matrix)
    maxSumMainDiagonals(matrix)
}