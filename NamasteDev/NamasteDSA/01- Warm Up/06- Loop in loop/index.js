for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    // console.log(i, j);
  }
}
//  output
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    // console.log(`${i} ${j} `);
  }
}
// output
// 1 1
// 2 1
// 2 2
// 3 1
// 3 2
// 3 3

for (let i = 3; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    // console.log(`${i} ${j} `);
  }
}
// output
// 3 3
// 3 2
// 3 1
// 2 2
// 2 1
// 1 1

for(let i = 0; i <3; i++){
  for (let j = i; j > 0; j--){
    // console.log(i, j);
  }
}

// output
// 1 1
// 2 2
// 2 1

for (let i = 5; i> 0; i--){
  for (let j = 0; j < i; j++){
    console.log(i, j);
  }
}

// output
// 5 0
// 5 1
// 5 2
// 5 3
// 5 4
// 4 0
// 4 1
// 4 2
// 4 3
// 3 0
// 3 1
// 3 2
// 2 0
// 2 1
// 1 0