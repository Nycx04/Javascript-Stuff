let arr = [2, 2, 2, 2, 2];

let reduce = arr.reduce(sum);

function sum(current, next) {
  return current + next;
}

console.log(reduce);
