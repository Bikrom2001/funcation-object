
// var i = 0 ;

// while(i < 10){
//     console.log(i);
//     if(i==8){
//         break;
//     }
//     i++;
// }

// for(var i = 0 ; i <= 20; i++){
//     console.log(i);
//     if(i==10){
//         break ;
//     }
// }

var number = [20, 30, 52, 40, 90, 70, 40, 30];

// for(var i = 0 ; i < number.length; i++){
//     var numbers = number[i];
//     console.log(numbers);
//     if(numbers > 50){
//         break ;
//     }
// }

for(var i = 0; i<number.length; i++){
    var numbers = number[i];
    if(numbers > 60){
        continue;
    }
    console.log(numbers);
}