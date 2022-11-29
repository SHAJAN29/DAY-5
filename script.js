// // 1.
// let odd =function(){

//     let array =[150,5,2,3,4,11,12,13,14,15]


// let result =[]
//     for(let i=0;i<array.length;i++){

//         if(array[i]%2!=0){
        
        
//         result.push(array[i]);
        
//         }
//         }
// return console.log(result);

// }
// odd();

// // 2.



// let str=function(string_array){

//     for(let i=0;i<string_array.length;i++){


//         console.log(string_array[i].charAt(0).toUpperCase()+ string_array[i].slice(1))

//         }
 
// }


// str(["moses","shajan","priya","jaya"]);


// // 3.

// let array_add=function(array_int){
// let sum =0;
//     for(let i=0;i<=array_int.length;i++){

//           sum =sum+i;
        
//         }

//         return `total is ${sum}` 
 
// }

// console.log(array_add([1,2,3,4]));

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


// console.log (pali(["racecar","ada","join","vipe"]));



// let duplicateremover =function(duplicateremover){

//     let result5 =[];
//     for(let i=0;i<duplicateremover.length;i++){
//     if(!result5.includes(duplicateremover[i])){
    
//     result5.push(duplicateremover[i])
//     }
//     }
// return result5
// }
// console.log(duplicateremover(["hellow","hellow","hola","hola","jola","jola","maala"]))

// (function(arr){
//     arr.unshift(arr.pop());
    
//      return arr;
//    })([1, 2, 3, 4, 5]);

// let odd =(array)=>{

//     let result =[]
//         for(let i=0;i<array.length;i++){
    
//             if(array[i]%2!=0){
            
            
//             result.push(array[i]);     
//             }
//             }
//     return result;
    
//     }
//     console.log(odd([150,5,2,3,4,11,12,13,14,15]));



// let stringy=(string_array)=>{
//     let b =[];
//         for(let i=0;i<string_array.length;i++){
    
    
//           b.push(string_array[i].charAt(0).toUpperCase()+ string_array[i].slice(1))
    
//             }
//      return b
//     };
//     console.log(stringy(["moses","shajan","priya","jaya"]));
let a=[];

let pali=(drome)=>{
  
    
    for(let i=0;i<drome.length;i++){
        
        b =drome[i].split("").reverse().join("")
    
    if (b==drome[i]){
    
    a.push(drome[i])
    
    }
    }
    return a
    
}

console.log (pali(["racecar","ada","join","vipe"]));

// let addition =(array_int)=>{
//     let sum =0;
//         for(let i=0;i<=array_int.length;i++){
    
//               sum =sum+i;
            
//             }
    
//             return `total is ${sum}` 
     
//     }
//     console.log(addition([1,2,3,4]));

// // function removeDuplicates(arr) {
// //     return [...new Set(arr)];
// // }
// // console.log (removeDuplicates(["hellow","hellow","hola"]))




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