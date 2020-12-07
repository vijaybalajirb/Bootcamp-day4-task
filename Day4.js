// //1..Print odd number in array
//  arr=[1,2,3,4,5,6,7,8]
// //Anonymns method
// let Odd_num=function(arr){
//     Odds=[]
//     for(i=0;i<arr.length;i++)
//     {
//         if(+arr[i]%2!=0)
//         {
//            Odds.push(arr[i])
//         }
//     }
//     return Odds;
// }

// let Odd=Odd_num(arr)
// console.log(Odd)

// //llfe method

// (function(arr){
//     Odds=[]
//     for(i=0;i<arr.length;i++)
//     {
//         if(+arr[i]%2!=0)
//         {
//            Odds.push(arr[i])
//         }
//     }
//     console.log(Odds)
// }([1,2,3,4,5,6,7,8]));


//2.Convert all the string to title case

arrays=["vijay","tom","ana"]
//anonymns method
let title_case=function(arrays){
    title=[]
    for(i in arrays)
    {
       title.push(arrays[i].charAt(0).toUpperCase()+arrays[i].slice(1))
    }
    
    console.log(title)
}
title_case(arrays)

//llfe method
(function(arrays){
    title=[]
    for(i in arrays)
    {
       title.push(arrays[i].charAt(0).toUpperCase()+arrays[i].slice(1))
    }
    
    console.log(title)
})(["vijay","tom","ana"])

//3.Sum of all numbers in array
//anonymns method
arr=[1,2,3,4,5,6,7,8,9,10]
let sum=function(arr){
    sum=0;
    for(i in arr){
        sum=sum+arr[i];
    }
    console.log(sum)
}
sum(arr)

//llfe method
(function(arr){
    sum=0;
    for(i in arr){sum=sum+arr[i]}
    console.log(sum)
})([1,2,3,4,5,6,7,8,9,10])


//4.Return prime numbers in the array
//Anonymns method
arr=[5, 12, 11, 13, 17, 19,16, 23,24,36]
let prime=function(arr){
    s=[];
    for(i in arr){
        if(arr[i]%i!=0)
        {s.push(arr[i])}
    }
    console.log(s.join(" ")) 

}
prime(arr)

//llfe method
(function(arr){
    s=[];
    for(i in arr){
        if(arr[i]%i!=0)
        {s.push(arr[i])}
    }
    console.log(s.join(" ")) 
})([5, 12, 11, 13, 17, 19,16, 23,24,36])

//5.Return palindromes in an array
//Using anonyms method
arr=["faf","bob","nani"]
let palindrome=function(arr){
    for(i=0;i<arr.length;i++){
        c=arr[i].split("").join('');
        d=arr[i].split("").reverse().join('')
        if(c==d)
        {
           console.log(arr[i])
        }  
    }
}
palindrome(arr) 

//using llfe
(function(arr){
    for(i=0;i<arr.length;i++){
        c=arr[i].split("").join('');
        d=arr[i].split("").reverse().join('')
        if(c==d)
        {
           console.log(arr[i])
        }  
    }
})(["faf","bob","nani"])

//6.Median of two sorted array of same size
//anonymns function
let arr1=[1,2,3,4,5] //median of arr1 is 3 //ascending sort 
let arr2=[5,4,3,2,1] //median of arr2 is 3 //descending sort
let median=function(arr1,arr2){
let merge=[];
let length=arr1.length
if(arr1.length == arr2.length)
{
    for(i=0;i<arr1.length;i++)
    {
        merge.push(arr1[i])
        merge.push(arr2[i])
    }
    c=merge.sort(function(a,b){return a-b})
    s=Math.floor(merge.length/2);
 console.log((+merge[s]+ +merge[s-1])/2)
    
}}
median(arr1,arr2)

//llef method
(function(arr1,arr2){
    let merge=[];
let length=arr1.length
if(arr1.length == arr2.length)
{
    for(i=0;i<arr1.length;i++)
    {
        merge.push(arr1[i])
        merge.push(arr2[i])
    }
    c=merge.sort(function(a,b){return a-b})
    s=Math.floor(merge.length/2);
 console.log((+merge[s]+ +merge[s-1])/2)
    
}
})([1,2,3,4,5],[5,4,3,2,1])


//7Remove duplicated from the array

arr=['a','a','b','b','c','c']
//anonymns
let remove_duplicates=function(arr){
d=[]
for(i in arr)
{
    if(!d.includes(arr[i]))
    {
        d.push(arr[i])
    }   
}
console.log(d)   
}
remove_duplicates(arr)

//llfe method
(function(arr){
    d=[]
    for(i in arr)
    {
        if(!d.includes(arr[i]))
        {
            d.push(arr[i])
        }   
    }
    console.log(d)  
})(['a','a','b','b','c','c'])

//9.Rotate the array k times
//Anonymns
arr=[1,2,3,4,5,6,7,8,9,10]
k=3
let rotate_array=function(arr,k){
    
    for(i=0;i<k;i++)
    {
        arr.push(arr.shift())
    }
    console.log(arr)   
}
rotate_array(arr,3)

//llfe method
(function(arr,c){
    for(i=0;i<k;i++)
    {
        arr.push(arr.shift())
    }
console.log(arr)

})([1,2,3,4,5,6,7,8,9,10],3)



