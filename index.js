//Part 1 Fizz Buzz

for(let i=1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz")
    } else if(i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

// Part 2 Prime Time

// function findNextPrime(n) {
//     while (true) {
//       n++;
//       if (isPrime(n)) {
//         console.log(n);
//         break; // Exit the loop once a prime number is found
//       }
//     }
//    }
   
//    function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//    }
   
//    // Example usage:
//    findNextPrime(35); // Outputs 11

