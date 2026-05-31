// function sum(a,callback){
//     console.log("sum = ",a+10)
//     callback(a);
// }

// function sub(a,callback){
//     console.log("sum = ",a-10)
//     callback(a);
// }

// function mul(a,callback){
//     console.log("sum = ",a*10)
//     callback(a);
// }

// function div(a){
//     console.log("sum = ",a/10)

// }


// //call back hell

// sum(10,(a)=>{sub(a,(a)=>{mul(a,(a)=>{div(10)})})})



/**
 * what is promises in java ?
 * 1) call  back can not handle the exceptions to over come it we use the promises.
 * 2) we can perform async programing
 * 3) syntax : datatype varible= new Promise((resolve,reject)=>{
 * resolve();
 * }) 
 * 
 * What are the different states of a Promises ?
 * 1) resolve state   - fullfill
 * 2) reject state    - failure
 * 3)pending state    -  pending
 * 
 * 
 * .then() ?
 * resolve is done by the .then method
 * 
 * .catch ?
 * reject is done by the .catch method
 * 
 * .finally() ?
 * this method excuite any way at last
 * 
 * 
 *  
 * 
 * 
 */

// const p=new Promise((resolve,reject)=>{
//     reject("fail method")
// })

// p.then((res)=>{console.log(res)}).catch((res)=>{console.log(res)}).finally(()=>{console.log("finally")})

// const pro=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("data is loading")
//            resolve("data");
//      },2000);
 

// })

// pro.then((data)=>{
//     console.log(data);
    
   
    
   
// })


//fetching fake api data using promises

// const pro= new Promise((reslove,reject)=>{
//     let url="https://dummyjson.com/quotes";
//     const response=fetch(url).then();
//     console.log(response);
//     if(response.ok){
//       reslove(response);
//     }else{
//         reject("fail url data")
//     }
   
// })

// pro.then((response)=>{return response.json()})
// .then((response)=>{console.log(response)})
// .catch((response)=>{console.log(response)})



const pro = new Promise((resolve, reject) => {
  let url = "https://pokeapi.co/api/v2/pokemon/ditto";
  
  fetch(url).then((response) => {
    if (response.ok) {
      resolve(response);
    } else {
      reject(response);
    }
  });
});

pro.then((response) => response.json())
   .then((data) => {

    console.log(data.game_indices)

    for(i=0;i<data.game_indices.length;i++){
        console.log(data.game_indices[i].version.url);
    }
    
        
    
    
   })
   .catch((error) => {
     console.log("fails", error);
   });
// made changes in code

  


