printEven(60);

function printEven(num){
    for (let i = 1; i <= num; i++){
        if(i % 2 === 0) {
            console.log('Четное число:', i);
        }
    }
}
