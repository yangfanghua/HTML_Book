
const btn=document.querySelector("#button");
const t1=document.querySelector("#text1");
const t2=document.querySelector("#text2");
const t3=document.querySelector("#text3");
const t4=document.querySelector("#text4");
const t5=document.querySelector("#text5");
const m=document.querySelector(".message");
const isbn=document.querySelector("#isbn");
const name1=document.querySelector("#name");
const writer=document.querySelector("#writer");
const price=document.querySelector("#price");
const classification=document.querySelector("#classification");


btn.addEventListener("click",function(){
  let arr=[];
  let body={
    "booklist": [
        {
            "isbn":t1.value,
            "name": t2.value,
            "writer":t3.value,
            "price": t4.value,
            "classification":t5.value
        }
        
    ]
  };

  fetch("http://localhost:8080/addBook",{
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
      arr = data;
       console.log(arr);
       alert(arr.message);
       fn()
    })
    .catch(function (error) {
      //抓資料不成功 錯誤 就會進cath
      console.log(error);
    });

 function fn(){
  isbn.innerHTML=`條碼：${arr.booklist[0].isbn}`;
  name1.innerHTML=`書名：${arr.booklist[0].name}`;
  writer.innerHTML=`著者：${arr.booklist[0].writer}`;
  price.innerHTML=`價格：${arr.booklist[0].price}`;
  classification.innerHTML=`類別：${arr.booklist[0].classification}`;

}



})
