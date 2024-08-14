for (var i=1; i<101; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i %  5 === 0) console.log("Buzz");
    else console.log(i)
}

for (let x = 0; x< 100;) console.log((++x%3 ? '' : 'fizz')+(x%5 ? '' : 'buzz') || x)
