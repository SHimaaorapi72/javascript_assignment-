// var num = Number(prompt("Enter a Number please"));
// console.log(num);




// var num = Number(prompt("Enter a Number please"));

// if( num%3===0 && num%4===0){
//     console.log("Yes");
// }else {
//     console.log('No');
// }





// var num1 = Number(prompt("Enter Number1 please"));
// var num2 = Number(prompt("Enter Number2 please"));

// if(num1>num2){
//     console.log(num1);
// }else if(num2>num1){
//     console.log(num2)
// }else if(num1===num2){
//     console.log('numbers are equal');
// }else {
//     console.log("enter a valid number");
    
// }




// var num = Number(prompt("Enter a Number please"));

// if(num>0){
//     console.log("Positive")
// }else if(num<0){
//     console.log("Negative")
// }else {
//     console.log("enter a valid number");

// }





// var num1 = Number(prompt("Enter Number1 please"));
// var num2 = Number(prompt("Enter Number2 please"));
// var num3 = Number(prompt("Enter Number3 please"));

// if(num1>num2 && num2>num3){
//     console.log("max element =" ,num1 , "min element =",num3);
// }else{
//     console.log("enter a valid number")
// }






// var num = Number(prompt("Enter Number1 please"));

// if(num%2===0){
//     console.log('even');
// }else if(num%2 !== 0){
//     console.log("odd")
// }else{
//     console.log("enter a valid number")
// }







// var char = prompt("Enter a character please");

// if(char ==='a' || char ==='e' || char ==='i' || char ==='o' || char ==='u'){
//     console.log('vowel')
// }else{
//     console.log("consonant")
// }






// var num = Number(prompt("Enter a Number please"));

// for(i=1; i<=num; i++){
//     console.log(i)
// }





// var num = Number(prompt("Enter a Number please"));

// for(i=1; i<=12; i++){
//     result = num*i
//     console.log(result);
// }

// var num = Number(prompt("Enter a Number please"));

// for(i=1; i<=num; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }






// var num1 = Number(prompt("Enter Number1 please"));
// var num2 = Number(prompt("Enter Number2 please"));


// result = num1**num2;
// console.log(result);





// var sub_1 = Number(prompt("Enter subject1 please"));
// var sub_2 = Number(prompt("Enter subject2 please"));
// var sub_3 = Number(prompt("Enter subject3 please"));
// var sub_4 = Number(prompt("Enter subject4 please"));
// var sub_5 = Number(prompt("Enter subject5 please"));


// var total = sub_1 + sub_2 +sub_3 +sub_4+sub_5 ;
// var average = (sub_1 + sub_2 +sub_3 +sub_4+sub_5)/5;
// var precentage = total/500 *100;

// console.log ("Total marks =", total , "Average Marks =" ,average , "Percentage =" ,precentage);



// var day = prompt("Enter a month please");

// switch(day){
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         console.log('Days in month 31');

//     break;
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         console.log('Days in month 30');
//     break;
//     case '2': console.log("Days in month 28 or 29");
//     break;
//     default: console.log("entar a valid month")

// }








// var sub_1 = Number(prompt("Enter Physics grade"));
// var sub_2 = Number(prompt("Enter Chemistry grade"));
// var sub_3 = Number(prompt("Enter Biology grade"));
// var sub_4 = Number(prompt("Enter Mathematics grade"));
// var sub_5 = Number(prompt("Enter Computer grade"));

// var total =  sub_1 + sub_2 + sub_3 + sub_4 + sub_5 ;
// var Percentage = total/500 *100 ;

// if(Percentage >= 90){
//     console.log("Grad A")
// }else if(Percentage < 90 && Percentage >= 80){
//     console.log("Grad B")
// }else if(Percentage < 80 && Percentage >= 70){
//     console.log("Grad C")
// }else if(Percentage < 70 && Percentage >= 60){
//     console.log("Grad D")
// }else if(Percentage < 60 && Percentage >= 40){
//     console.log("Grad E")
// }else if(Percentage < 40 ){
//     console.log("Grad f")
// }else{
//     console.log("enter a valid grade")
// }




       //switch case ...


    
// var day = prompt("Enter a month please");

// switch(day){
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         console.log('Days in month 31');

//     break;
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         console.log('Days in month 30');
//     break;
//     case '2': console.log("Days in month 28 or 29");
//     break;
//     default: console.log("entar a valid month")

// }






// var char = prompt("Enter a character please");

// switch(char){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     console.log("vowel")
//     break;
//     default:
//     console.log("consonent");
// }






// var num1 = Number(prompt("Enter Number1 please"));
// var num2 = Number(prompt("Enter Number2 please"));

// switch(num1> num2){
//     case true: console.log("number1 is max")
//     break;
//     case false: console.log("number2 is max")
//     break;
//     default: console.log("enter a valid number")
// } 






// var num = Number(prompt("Enter Number please"));

// switch(num%2===0){
//     case true :console.log("even")
//     break;
//     case false : console.log("odd")
//     break;
//     default: console.log("enter a valid number")
// }





// var num = Number(prompt("Enter Number please")); 

// switch(num > 0 ){
//     case true : console.log("positive");
//     break;
//     case false: console.log("negative");
//     break;
//     default: console.log("Zero");
// }






let result;

const operator = prompt('Enter operator (  +, -, * , / ):');


var number1 = Number(prompt('Enter first number: '));
var number2 = Number(prompt('Enter second number: '));

switch(operator) {
    case '+':
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

    case '-':
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

    case '*':
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

    case '/':
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

    default:
    console.log('Invalid operator');
    break;
}0
