// // 1.
// let odd =function(){

//     let array =[150,5,2,3,4,11,12,13,14,15]


// let result =[]
//     for(let i=0;i<array.length;i++){

//         if(array[i]%2!=0){
        
        
//         result.push(array[i]);
        
//         }
//         }
// return result;

// }
// odd();

// output;
// (5) [5, 3, 11, 13, 15]

// // 2.



// let str=function(string_array){

//     for(let i=0;i<string_array.length;i++){


//         console.log(string_array[i].charAt(0).toUpperCase()+ string_array[i].slice(1))

//         }
 
// }


// str(["moses","shajan","priya","jaya"]);


// output

// Moses
// Shajan
// Priya
// Jaya

// // 3.

// let array_add=function(array_int){
// let sum =0;
//     for(let i=0;i<=array_int.length;i++){

//           sum =sum+i;
        
//         }

//         return `total is ${sum}` 
 
// }

// array_add([1,2,3,4])

// output;

// 'total is 10'




// let a=[];

// let pali =function(drome){
  
    
//     for(let i=0;i<drome.length;i++){
        
//         b =drome[i].split("").reverse().join("")
    
//     if (b==drome[i]){
    
//     a.push(drome[i])
    
//     }
//     }
//     return a
    
// }


// pali(["racecar","ada","join","vipe"]);

// output;
// (2) ['racecar', 'ada']



// let duplicateremover =function(duplicateremover){

//     let result5 =[];
//     for(let i=0;i<duplicateremover.length;i++){
//     if(!result5.includes(duplicateremover[i])){
    
//     result5.push(duplicateremover[i])
//     }
//     }
// return result5
// }
// duplicateremover(["hellow","hellow","hola","hola","jola","jola","maala"]);

// output;
// (4) ['hellow', 'hola', 'jola', 'maala'];

//  (function(arr){
//   for(let i=0;i<2;i++){
//     arr.unshift(arr.pop())};
//       return arr;
//     })([1, 2, 3, 4, 5]);

// output;
// (5) [4, 5, 1, 2, 3]


// let odd =(array)=>{

//     let result =[]
//         for(let i=0;i<array.length;i++){
    
//             if(array[i]%2!=0){
            
            
//             result.push(array[i]);     
//             }
//             }
//     return result;
    
//     }
//     odd([150,5,2,3,4,11,12,13,14,15]);

// output;

// (5) [5, 3, 11, 13, 15]



// let stringy=(string_array)=>{
//     let b =[];
//         for(let i=0;i<string_array.length;i++){
    
    
//           b.push(string_array[i].charAt(0).toUpperCase()+ string_array[i].slice(1))
    
//             }
//      return b
//     };
//    stringy(["moses","shajan","priya","jaya"]);

// output;

// (4) ['Moses', 'Shajan', 'Priya', 'Jaya']


// let a=[];

// let pali=(drome)=>{
  
    
//     for(let i=0;i<drome.length;i++){
        
//         b =drome[i].split("").reverse().join("")
    
//     if (b==drome[i]){
    
//     a.push(drome[i])
    
//     }
//     }
//     return a
    
// }

// pali(["racecar","ada","join","vipe"]);

// output;

// (2) ['racecar', 'ada']



// let addition =(array_int)=>{
//     let sum =0;
//         for(let i=0;i<=array_int.length;i++){
    
//               sum =sum+i;
            
//             }
    
//             return `total is ${sum}` 
     
//     }
//     addition([1,2,3,4]);

// output;

// total is 10


// // function removeDuplicates(arr) {
// //     return [...new Set(arr)];
// // }
// // removeDuplicates(["hellow","hellow","hola"]);

// output;
// (2) ['hellow', 'hola']




// // for(let i=0;i<array.length;i++){

// // if(array[i]%2!=0){


// // console.log("odd");

// // }else if(array[i]===0){

// //     console.log("zero");

// // }else if(array[i]<0){

// //     console.log("negative integer");

// // }else{

// //     console.log("even");

// // }
// // }
