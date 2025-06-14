// pattern 1
//  * * * *
//  * * * *
//  * * * *
//  * * * *

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j < n; j++) {
      row += '* '
    }
    console.log(row)
  }
}

// pattern1(4)

// pattern 2
// *
// * *
// * * *
// * * * *
// * * * * *

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j <= i; j++) {
      row += '* '
    }
    console.log(row)
  }
}

// pattern2(5)

// pattern 3
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern3(n) {
  for (let i = 0; i <= n; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row = row + j + ' '
    }
    console.log(row)
  }
}

// pattern3(5)

// pattern 4
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function pattern4(n) {
  for (let i = 0; i <= n; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row = row + i + ' '
    }
    console.log(row)
  }
}

// pattern4(5)

// pattern 5
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern5(n) {
  for (let i = 0; i <= n; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row = row + j + ' '
    }
    console.log(row)
  }
}

// pattern5(5)

// pattern 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern6(n) {
  for (let i = n; i >= 1; i--) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row = row + j + ' '
    }
    console.log(row)
  }
}

// pattern6(5)

// pattern 7
// * * * * *
// * * * *
// * * *
// * *
// *

function pattern7(n) {
  for (let i = n; i >= 1; i--) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row = row + '* '
    }
    console.log(row)
  }
}

// pattern7(5)

// pattern 8
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j < n - (i + 1); j++) {
      row += ' '
    }
    for (let k = 0; k < i + 1; k++) {
      row += '*'
    }
    console.log(row)
  }
}

// pattern8(5)

// pattern 9
// 1
// 1 0
// 1 0 1
// 1 0 1 0

function pattern9(n) {
  for (let i = 0; i < n; i++) {
    let row = ''
    let toggle = 1
    for (let j = 0; j < i + 1; j++) {
      row += toggle
      toggle = toggle === 1 ? 0 : 1
    }
    console.log(row)
  }
}

pattern9(5)

// pattern 10
// 1
// 0 1
// 0 1 0
// 1 0 1 0

function pattern10(n) {
  let toggle = 1
  for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j < i + 1; j++) {
      row += toggle
      toggle = toggle === 1 ? 0 : 1
    }
    console.log(row)
  }
}

pattern10(5)
