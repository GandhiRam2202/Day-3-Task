const URL= "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
// xhr.onreadystatechange=()=>{
//     console.log(xhr.readyState)
// };
xhr.onload=()=>{
   for(let rcf of (JSON.parse(xhr.response))){
    console.log(rcf.flags.png);
   }
};