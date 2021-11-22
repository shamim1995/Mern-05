

//Result

let shamim = new Shamim();

let name=prompt(`name`)
let roll= prompt(`Roll`)

let bn= parseInt(prompt(`Bangla`))
let en= parseInt(prompt(`English`))
let math= parseInt(prompt(`Math`))
let ict= parseInt(prompt(`ICT`))
let agre= parseInt(prompt(`Agreculture`))
let social= parseInt(prompt(`Social`))
let rel= parseInt(prompt(`Religion`))



console.log(`

Name: ${name}, Roll- No- ${roll}

Bangla  = ${ bn}     =${ shamim.gpa(bn) }       =${ shamim.grade ( shamim.gpa (bn)) }
English = ${en}     =${ shamim.gpa(en) }       =${ shamim.grade ( shamim.gpa (en)) }
Math    = ${math}   =${ shamim.gpa(math) }     =${ shamim.grade ( shamim.gpa (math)) }      
Ict     =${ict}     =${ shamim.gpa(ict) }      =${ shamim.grade ( shamim.gpa (ict)) }
Agrecul =${agre}    =${ shamim.gpa(agre) }     =${ shamim.grade ( shamim. gpa (agre)) }        
Social  =${social}  =${ shamim.gpa(social) }   =${ shamim.grade ( shamim. gpa (social))}
Religion= ${rel}    =${ shamim.gpa(rel) }      =${ shamim.grade ( shamim. gpa (rel))}
-----------------------------------------------------------------------------
                   ${ shamim.cgpa ( shamim.gpa(bn), shamim.gpa(en), shamim.gpa(math), shamim.gpa(ict), shamim.gpa(agre), shamim.gpa(social), shamim.gpa(rel) )} 
`);




//construction function

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