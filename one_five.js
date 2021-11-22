

let dev = new Dev();


//age calculation
console.log(dev.ageCal('shamim', 24));


//area calculation
console.log(`Rectangle= ${dev.area('r', 20, 30)}`);
console.log(`Square= ${dev.area('s', 20, 30)}`);
console.log(`Triangle= ${dev.area('t', 40, 30)}`);


//years calculation
console.log(dev.ageDefine('Hamidul', 1995));


//currency calculation



console.log(`Euro to BDT= ${dev.currency('EURO', 2)}`);
console.log(`CAD TO BDT= ${dev.currency('CAD', 3)}`);
console.log(`POUND TO BDT= ${dev.currency('POUND', 4)}`);
console.log(`USD TO BDT= ${dev.currency('USD', 3)}`);

//bmi calculation

console.log(` Your Bmi ${dev.bmi(50, 5.6)}`);