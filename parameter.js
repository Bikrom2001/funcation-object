
// function aluPrice(taka){
//     console.log(taka);
// }

// aluPrice(30);


function ApplePrice(taka){
    console.log('amma apple kinte taka diche amer', taka);

    var priceApple = 30 ;
    var AppleQuntity = taka / priceApple ;
    return AppleQuntity ;
}

var ammarMoney = 500 ;

var Apple = ApplePrice(ammarMoney);

console.log(Apple);