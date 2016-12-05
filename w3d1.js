// Hello!

// 1.
var cube = function(x) {
  return x * x * x;
};
// 2.
var fullName = function (first, last) {
  return first + " " + last;
};
// 3.
var power = function (base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};
// 4.
var sumCubes = function (numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
};


// Iterating Over Arrays Using each

function sumSquares(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i] ** 2;
  }
  return total;
};


var myArray = [1, 2, 3];

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
};

function sumSquares(numbers) {
  var total = 0;
  each(numbers, function(num) {
    total += num ** 2;
  });
  return total;
}

console.log(sumSquares(myArray) === 14);


function sumCubes(numbers) {
  var total = 0;
  each(numbers, function(num) {
    total = total + cube(num);
  });
  return total;
}

console.log(sumCubes(myArray) === 36);


// 4

function product(numbers) {
  var total = 1;
  each(numbers, function(num) {
    total = total * num;
  });
  return total;
}

console.log(product(myArray) === 6);


// 5

function cubeAll(numbers){
  var cubedArray = [];
  each(numbers, function(num){
    cubedArray.push(num ** 3);
  });
  return cubedArray;
}

console.log(JSON.stringify(cubeAll(myArray)) === JSON.stringify([1, 8, 27]));


// 6

function odds(numbers){
  var oddsArray = [];
  each(numbers, function(num) {
    if(num % 2 !== 0) {
      oddsArray.push(num);
    }
  });
  return oddsArray;
}

console.log(JSON.stringify(odds(myArray)) === JSON.stringify([1, 3]));
