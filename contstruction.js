function Shamim() {

    //gpa calculation
    
    this.gpa=function (marks) {  
        
        this.gpa;

        if(marks>=0 && marks<=32){
            return gpa=0;

        }else if(marks>=33 && marks<40){
            return gpa=1.0;

        }else if(marks>=40 && marks<50){
            return gpa=2.0;

        }else if(marks>=50 && marks<60){
            return gpa=3.0;

        }else if(marks>=60 && marks<70){
            return gpa=3.5;

        }else if(marks >=70 && marks<80){
            return gpa=4.0;

        }else if(marks >=80 && marks <=100){
            return gpa=5.0;
        }else{
            return `You are not attend the exam`;
        }
        return gpa;
    }


    //grade calculation


    this.grade= function(gpa) {

        this. grade;
        if( gpa>=0 && gpa<1){
            return grade='F'
        }else if( gpa>=1 && gpa < 2){

            return grade='D'

      }else if(gpa>=2 && gpa < 3){
        return grade ='C'

      }else if(gpa >= 3 && gpa < 3.5){
          return grade='B'

      }else if(gpa >=3.5 && gpa < 4){
          return grade='A-'

      }else if(gpa >=4 && gpa < 5){
          return grade='A'
          
      }else if(gpa >=5){
        return grade='A+'
        
      }else{
          return `Your attendence missing`
      }
      return grade;
      
    }

    //cgpa calculation

    this.cgpa= function (bn, en, math, ict, agre, social, rel) { 
        
        this.totalSub= ( bn + en + math + ict + agre + social + rel)
        this.totalCal=this.totalSub/7;
        this.totalResult=this.totalCal.toFixed(2);
        
        if(bn==0 || en==0 || math==0 || ict==0 || agre==0 || social==0 || rel==0 ){
            return` You Are Failed`
        }else{
            return ` Your CGPA= ${this.totalResult} & Your GRADE= ${shamim.grade(this.totalResult)} `
        }
     }
     

}


//Age calculation all information one_five.js a import kora ase

function Dev () { 

    //age calculation

    this.ageCal = function(name, age) {
       
        if(age >=0 && age <=8){
            return ` ${name} You are ${age} years old and you are a children`
        } else if (age > 8 && age<=17){
            return ` ${name} you are ${age} years old. so you are a teenager`
        }else if(age>17 && age <=28){
            return `${name} you are ${age} years old. so you are a young people`
        }else if(age>28 && age<110){
            return `${name} you are ${age} years old. so you are a old people`
        }else{
            return `how is it possible`
        }

      }

      //area calculation

      this.area=function(type, length, width) {

          if(type=='r'){
              return length*width;
          }else if(type=='s'){

            return length*length;
          }else if(type=='t'){
              return (.5*length*width)
          }
      }

      //age define calculation

      this.ageDefine=function (name, years) {

        this.years=2021-years

          return `${name} you are ${this.years} years old`
      }

      //currency calculaiton

       this.currency = function (currencyName, amount) {

           if (currencyName == 'EURO') {

               return amount * 109;
           } else if (currencyName == 'USD') {

               return amount * 84
           } else if (currencyName == 'CAD') {

               return amount * 67
           } else if (currencyName = 'POUND') {

               return amount * 116
           }else{
               return `please give the informaion`
           }
       }


       //Bmi calculation

       this.bmi=function (weight, feet) {
           this.weight=weight;
           this.height=feet/3.28;
           this.mtr=this.height*this.height
           this. bmiCal=this.weight/(this.mtr)

        return this.bmiCal.toFixed(2);

         }


 }



