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

function myFunction(a) {
    for (i = 2; i <= a - 1; i++) {
        if (a % i == 0) {
            console.log("Not Prime");
            while(true) {
                a++;
                let isPrime = true;
                for (i = 2; i <= a - 1; i++) {
                    if (a % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime){
                    console.log(a);
                    return;
                }
            }
        }
    }
    console.log("Prime");
}

myFunction(70)

