var FoodName = 'apple';

if(FoodName == 'apple'){
    console.log('Food name is Apple');
}
else if (FoodName == 'banana'){
    console.log('Food name is banana');
}
else if (FoodName == 'mango'){
    console.log('Food name is Mango');
}
else if (FoodName == 'Anaros'){
    console.log('Food name is anaros');
}
else if(FoodName == 'orange'){
    console.log('Food name is orange');
}
else{
    console.log('Food name is not matches');
}


switch (FoodName) {
    case 'apple':
        console.log('food naem is Apple');
        break;
    case 'banana':
        console.log('food naem is bannana');
        break;
    
    default:
        break;
}