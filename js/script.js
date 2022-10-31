// #1

// let i = 0;
// while (i < 101) {
//     console.log(i);
//     i++;
// }

// #2

// let i = 11;
// while (i < 34) {
//     console.log(i);
//     i++;
// }

// #3

// let i = 0;
// while (i < 101) {
//     console.log(i);
//     i += 2;
// }

// #4
// let count = 0;
// for (let i = 1; i < 101; i += 1){
//     count += i;
// }
// console.log(count);

// #5

// let arr = [1,2,3,4,5]; ;
// for (item of arr){
//     console.log(item)
// }

// #6

// let result = 0;
// let arr = [1,2,3,4,5];
// for (item of arr){
//     result += item;
// }
// console.log(result);

// #7

// var obj = {green:'зеленый', red:'красный', blue:'голубой'}
// for (item in obj){
//     console.log(item)
//     console.log(obj[item])
// }

// #8

// var obj = {Коля: '200', Вася: '300', Петя: '400'}
// for (item in obj){
//     if (item == 'Коля'){
//         console.log(item + ' - Зарплата ' + obj[item] + ` долларов`)
//     }
//     else{
//         pass
//     }
// }

// #9

// var arr = [2,5,9,15,0,4];
// for (item in arr){
//     if (arr[item] >= 3 && arr[item] <= 10){
//         console.log(arr[item])
//     }
// }

// #10
// let result = 0;
// var arr = [-3,-2,-1,0,1,2,3];
// for (item of arr){
//     if (item > 0){
//         result += item;
//     }
// }
// console.log(result);

// #11

// var arr = [1,2,5,9,4,13,4,10];
// for (item of arr){
//     if (item == 4){
//         console.log('Есть!');
//         break
//     }
// }

// #12

// var arr = [10, 20, 30, 50, 235, 3000];
// for (item of arr){
//     item = String(item);
//     if (item[0] == 1 || item[0] == 2 || item[0] == 5){
//         console.log(item);
//     }
// }

// #13
// let count = '';
// var arr = [1,2,3,4,5,6,7,8,9];
// for (item of arr){
//     count += '-' + String(item);
// }
// console.log(count + '-');

// #14

// var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for (day of arr){
//     if (day == 'Суббота' || day == 'Воскресенье'){
//         console.log(day.bold())
//         continue
//     }
//     console.log(day)
// }

// #15

// day = '';
// var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for (item of arr){
//     if (item == 'Понедельник'){
//         day = 'Понедельник';
//         console.log(day.italics())
//         continue
//     }
//     console.log(item)
// }

// #16

// let n = 1000;
// let num = 0;
// for (num; n>50; num++){
//     n= n / 2;
// }
// console.log(n);
// console.log(num);