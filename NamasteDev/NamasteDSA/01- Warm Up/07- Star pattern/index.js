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

pattern2(5)