
const btn=document.querySelector("#button");
const t1=document.querySelector("#text1");
const t2=document.querySelector("#text2");
const t3=document.querySelector("#text3");
const t4=document.querySelector("#text4");
const t5=document.querySelector("#text5");
const m=document.querySelector(".message");

btn.addEventListener("click",function(){
  let body={
            "isbn":t1.value,
            "name": t2.value,
            "writer":t3.value,
            "price": t4.value,
            "classification":t5.value
  };

  fetch("http://localhost:8080/editBook",{
    method:"POST",
    headers: {
        "Content-Type":"application/json" //資料格式是json
    },
    body:JSON.stringify(body) //把js物件轉成json格式
})
    .then(function (response) {
      //從json格式轉回js物件
      return response.json();
    })
    .then(function (data) {
      //我們在做事的地方
      console.log(data);
       body = data;
       console.log(t1);
       alert(body.message);
      
    })
    .catch(function (error) {
      //抓資料不成功 錯誤 就會進cath
      console.log(error);
    });





})
