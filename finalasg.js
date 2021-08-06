
function fn1()
{

     let str1=document.querySelector("#inp1").value;
     // console.log(name);

      document.querySelector("#sec").innerHTML=`<h1 style="font-size: 20px; margin: 15px; ">Your name is:${str1}</h1>`;
     

}
function fn2()
{
    // var str2= document.getElementById("inp2").value;
    // console.log(str2);
    
    let str2=document.querySelector("#inp2").value;
    // console.log(name);

     document.querySelector("#sec2").innerHTML=`<h1>You live in :${str2}</h1>`;

}
