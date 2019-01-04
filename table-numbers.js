function TableNumbers (value, red, even, zero){
    this.value = value;
    this.isRed = red;
    this.isEven = even;
    this.isZero = zero
}

// I use a boolean for zero to prevent bugs related to the player betting even/odd and accidentally winning or similar situations

const num0 = new TableNumbers(0, false, false, true);
const num1 = new TableNumbers(1, true, false, false);
const num2 = new TableNumbers(2, false, true, false);
const num3 = new TableNumbers(3, true, false, false);
const num4 = new TableNumbers(4, false, true, false);
const num5 = new TableNumbers(5, true, false, false);
const num6 = new TableNumbers(6, false, true, false);
const num7 = new TableNumbers(7, true, false, false);
const num8 = new TableNumbers(8, false, true, false);
const num9 = new TableNumbers(9, true, false, false);
const num10 = new TableNumbers(10, false, true, false);
const num11 = new TableNumbers(11, false, false, false);
const num12 = new TableNumbers(12, true, true, false);
const num13 = new TableNumbers(13, false, false, false);
const num14 = new TableNumbers(14, true, true, false);
const num15 = new TableNumbers(15, false, false, false);
const num16 = new TableNumbers(16, true, true, false);
const num17 = new TableNumbers(17, false, false, false);
const num18 = new TableNumbers(18, true, true, false);
const num19 = new TableNumbers(19, true, false, false);
const num20 = new TableNumbers(20, false, true, false);
const num21 = new TableNumbers(21, true, false, false);
const num22 = new TableNumbers(22, false, true, false);
const num23 = new TableNumbers(23, true, false, false);
const num24 = new TableNumbers(24, false, true, false);
const num25 = new TableNumbers(25, true, false, false);
const num26 = new TableNumbers(26, false, true, false);
const num27 = new TableNumbers(27, true, false, false);
const num28 = new TableNumbers(28, false, true, false);
const num29 = new TableNumbers(29, false, false, false);
const num30 = new TableNumbers(30, true, true, false);
const num31 = new TableNumbers(31, false, false, false);
const num32 = new TableNumbers(32, true, true, false);
const num33 = new TableNumbers(33, false, false, false);
const num34 = new TableNumbers(34, true, true, false);
const num35 = new TableNumbers(35, false, false, false);
const num36 = new TableNumbers(36, true, true, false);
const numDoubleAught = new TableNumbers(37, false, false, true)

var croup = num18;

console.log(croup.value);
if (croup.value >= 19) {
    console.log("top half");
} else {
    console.log("bottom half");   
}