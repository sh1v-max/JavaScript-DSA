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
    console.log(`${i} ${j} `);
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

