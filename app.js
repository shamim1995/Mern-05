
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