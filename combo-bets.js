var columns = {
    columnA: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    columnB: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    columnC: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
}

var dozens = {
    firstDoz: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    middleDoz: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    topDoz: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
}

var lowerHalf = [];
for (var i = 1 ; i <= 18; i++) {
    lowerHalf.push(i);
}
var upperHalf = [];
for (let i = 19; i <= 36; i++) {
    upperHalf.push(i);
}

// even/odd checks via isEven boolean

// red/black checks via isRed boolean

var streets = {
    streetA: [1, 2, 3],
    streetB: [4, 5, 6],
    streetC: [7, 8, 9],
    streetD: [10, 11, 12],
    streetE: [13, 14, 15],
    streetF: [16, 17, 18],
    streetG: [19, 20, 21],
    streetH: [22, 23, 24],
    streetI: [25, 26, 27],
    streetJ: [28, 29, 30],
    streetK: [31, 32, 33], 
    streetL: [34, 35, 36]
}

var doubleStreets = {
    double1: [streets.streetA, streets.streetB],
    double2: [streets.streetB, streets.streetC],
    double3: [streets.streetC, streets.streetD],
    double4: [streets.streetD, streets.streetE],
    double5: [streets.streetE, streets.streetF],
    double6: [streets.streetF, streets.streetG],
    double7: [streets.streetG, streets.streetH], 
    double8: [streets.streetH, streets.streetI], 
    double9: [streets.streetI, streets.streetJ],
    double10: [streets.streetJ, streets.streetK],
    double11: [streets.streetK, streets.streetL]
}

var basket = [0, 1, 2, 3, 37]

// splits are sequenced first vertical and then horizontal
var splits = {
    vertical: 
    {
        colA: [[1, 4], [4, 7], [7, 10], [10, 13], [13, 16], [16, 19], [19, 22], [22, 25], [25, 28], [28, 31], [31, 34]],
        colB: [[2, 5], [5, 8], [8, 11], [11, 14], [14, 17], [17, 20], [20, 23], [23, 26], [26, 29], [29, 32], [32, 35]],
        colC: [[3, 6], [6, 9], [9, 12], [12, 15], [15, 18], [18, 21], [21, 24], [24, 27], [27, 30], [30, 33], [33, 36]]
        },
    horizontal: 
    {
        lowStreets: [[1, 2], [2, 3], [4, 5], [5, 6], [7, 8], [8,9], [10, 11], [11, 12], [13, 14], [14, 15], [16, 17], [17, 18]],
        highStreets: [[19, 20], [20, 21], [22, 23], [23, 24], [25, 26], [26, 27], [28, 29], [29, 30], [31, 32], [32, 33], [34, 35], [35, 36]]
    }
    
}



console.log(splits.vertical.colB[5])
console.log(splits.horizontal.lowStreets[3])