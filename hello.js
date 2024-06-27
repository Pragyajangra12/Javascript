




























// console.log("z");
// console.log("c");
// setTimeout(()=>{
//     console.log("hello");
// },1000);
// console.log("h");
// function sum(a,b){
//     console.log(a+b);
// }

// function add(a,b,sumCallback){
//     sumCallback(a,b);
// }
// add(20,39,sum);

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data"+ dataId);
//         if(getNextData){
//         getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// });
// getData(2);
// getData(3);
// let promise= new Promise((resolve,reject)=>{
//     const x="12344";
//     const y=123443;
//     if(x==y){
//         console.log(resolve("success"));
        
//     }else{
//         console.log(reject("error occured"));
        
//  }
// });
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data"+dataId);
//             // resolve("success");
//             reject("Some error occured");
//             if(getNextData){
//                 getNextData();
//             }
//             },3000);
//     }
// )};
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("hey i am a promise");
//         resolve("successfully");
//     });
// };

// let promise= getPromise();
// promise.then((res)=>{
//     setTimeout(()=>{
//         console.log("print",res);
//     },2000);
// });

// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//     },2000);
//     });
// };

// function async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//     },2000);
//     });
// };
// console.log("fetching data1");
// async1().then((res)=>{
//     console.log("fetching data2");
//     async2().then((res)=>{
//     });
// });
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hiiiii");
//         },3000);
//     });
// }

// async function cyx(){
//     await api(12);
//     await api(13);
// }








// async function hello(){
//     console.log("hellooo");
// }












// function datass(dataId,datacallback){
//     datacallback(dataId)
// }

// datass(322,datas);
// const URL="https://cat-fact.herokuapp.com/facts";
// const factPara= document.querySelector("#para");
// const btn1= document.querySelector("#btn");
// const getFacts= async()=>{
//     let response= await fetch(URL);
//     console.log(response.status);
//     let data= await response.json();
//     // console.log(data[2]);
//     factPara.innerText=data[2].text;
// }
// btn1.addEventListener('click',getFacts);