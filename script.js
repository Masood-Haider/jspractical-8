// Generating Random Numbers
// let a = Math.ceil(Math.random()*100);
// console.log(a);

// let a= +prompt("enter min number");
// let b= +prompt("enter max number");
// let range=b-a;
// let c=Math.ceil(Math.random()*range+a);
// alert("number "+c);

// Simulate a coin toss by generating a random number (0 or 1) and print "Heads" or "Tails" accordingly. 
// let a=Math.floor(Math.random()*2);
// if(a==0){
//     console.log("heads")
// }
// if(a==1){
//     console.log("tails")
// }

// RANDOM PASSWORD GENERATOR PROGRAM 
// chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
// let password="";
// for(i=0;i<12;i++){
// password=password+ chars.charAt(Math.floor(Math.random()*chars.length));
// }
// console.log(password);

// Converting Strings to Integers and Decimals

// Convert the string "123" to an integer and print its value.
// let a="123";
// let b=parseInt(a);
// console.log(b);

// Convert the string "123.45" to a decimal and print its value. 
// let a="123.45";
// let b=parseFloat(a);
// console.log(b);

// Write a program that takes a string input and converts it to an integer or decimal (depending on the input). 
// let a=prompt("enter a number");
// let b=Number(a);
// alert("number in integers or float "+b);

// Converting Strings to Numbers, Numbers to Strings
// Convert the string "123" to a number and print its value. 
// let a="123";
// let b=Number(a);
// console.log(b);

// Convert the number 123 to a string and print its value.
// let a=123;
// let b=String(a);
// console.log(b);

// Write a program that takes a input (string or number) and converts it to the opposite type (number or string). 
// let a=prompt("enter a number or string");
// if(typeof a==="string"){
//     let b =Number(a);
//     console.log(b);
// }
// if(typeof a==="number"){
//     let b =String(a);
//     console.log(b);   
// }

// Controlling the Length of Decimals using toFixed method
// Use toFixed() to format the number 123.45678 to two decimal places. 
// let a=123.45678;
// let b= a.toFixed(2);
// console.log(b);

// Use toFixed() to format the number 123.45678 to four decimal places. 
// let a=123.45678;
// let b= a.toFixed(4);
// console.log(b);

// Write a program that takes a number input and formats it to a specified number of decimal places using toFixed(). 
// let a = +prompt("enter a number to 10 decimal places");
// let b= a.toFixed(5)
// alert(" your number "+b);

// Getting the Current Date and Time
// Print the current date and time to the console. 
// let a=new Date();
// let b=a.toString();
// console.log(b);

// Print the current date and time in a specific format (e.g. "YYYY-MM-DD HH:mm:ss"). 
// let z=new Date();
// let a=z.getFullYear();
// let b=z.getMonth();
// let c=z.getDay();
// let d=z.getHours();
// let e=z.getMinutes();
// let  f=z.getSeconds();
// console.log(a+"-"+b+"-"+c+"-"+d+":"+e+":"+f);

// Write a program that returns the current date and time as a string. 
// let a =new Date();
// let b=a.getDate().toString();
// let c=a.getTime().toString();
// console.log(b+"    "+c);

// AGE CALCULATOR BY BIRTHDATE 
// let birthday=new Date("2002-12-21");
// let now=new Date();
// let age=now.getFullYear()-birthday.getFullYear();
// console.log(age);

// Extracting Parts of the Date and Time
// Extract the year from the current date and print it to the console. 
// let a=new Date();
// let b=a.getFullYear();
// console.log(b);

// Extract the month from the current date and print it to the console. 
// let a=new Date();
// let b=a.getMonth();
// console.log(b);

// Write a program that takes a date input and extracts the day, month, and year as separate values. 
// let a=new Date("2002-12-21");
// let b=a.getFullYear();
// let c=a.getMonth();
// let d=a.getDay();
// console.log("year :"+b+" month :"+c+"day"+d);

// Specifying a Date and Time
// Create a Date object for a specific date and time (e.g. January 1, 2022 12:00:00). 
// let a=new Date("2022-0-1 12:00:00");
// console.log(a);

// Create a Date object for a specific date and time using user-inputted value
// let year = prompt("enter year")
// let month =prompt("enter month")
// let day = prompt("enter day")
// let hours = prompt("enter hours")
// let minutes =prompt("enter minutes")
// let seconds = prompt("enter seconds")
// let milliseconds =prompt("enter milliseconds")
// let x = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// alert("time ="+x);

// Write a program that takes a string input (e.g. "2022-01-01 12:00:00") and creates a Date object from it. 
// let a= prompt("enter date full");
// let b=new Date(a);
// alert("you full date  "+b);

// Changing Elements of a Date and Time
// Add one day to the current date and print the new date. 
// let day=24*60*60*1000;
// let a=new Date();
// let b=new Date(a.getTime()+day);
// console.log(b.toString());

// Subtract one hour from the current time and print the new time. 
// let hour=60*60*1000;
// let a=new Date();
// let b=new Date(a.getTime()-hour);
// console.log(b.toString());

// Write a program that takes a Date object and adds or subtracts a specified number of days, hours, or minutes. 
// let days2=2*(24*60*60*1000);
// let a=new Date();
// let b=new Date(a.getTime()-days2);
// console.log(b.toString());

// let days5=2*(24*60*60*1000);
// let c=new Date(a.getTime()+days5);
// console.log(c.toString());

// let hour10=10*(60*60*1000);
// let d=new Date(a.getTime()-hour10);
// console.log(d.toString());

// Countdown Timer: Write a JavaScript program to create a countdown timer that displays the remaining time until a specific date and time. 
// let a=new Date().getTime();
// let b=new Date("2024-12-21").getTime();
// let c=b-a;
// console.log(c);

// Schedule Appointment: Write a JavaScript program to schedule an appointment for a specific date and time.
// let a=new Date("2024-06-15");
// let b=new Date();
// if(b.getTime()>=a.getTime()){
//     console.log("appointment today");
// }
